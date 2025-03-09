<template>
  <div id="app" class="dark">
    <div class="loginwrapper" v-if="!connected">
        <label for="username">Ditt namn
          <input type="text" v-model="game.userName" name="username"/>
        </label>
        <button  @click="connect">Anslut</button>

    </div>
    <div id="wrapper" v-else>
      <score-board :game="game" @markScore="e => markScore(e)" />
      <div class="dicewrapper">
        {{ connected }} {{ connected }} {{ gameStarted }} {{ myTurn }} {{ rollsLeft }}
          <dice :dice="game.dice" :canHold="rollsLeft < 3 && rollsLeft > 0" @diceholdchanged="notifyDiceHoldChanged" />
          <button class="rollbutton" :disabled="!connected || !gameStarted || !myTurn || rollsLeft === 0" @click="roll">Roll({{rollsLeft}})</button>
      </div>
      
      <div class="logoutwrapper">
        <button v-if="connected && !gameStarted" @click="startGame">Start Game</button>
        <button v-else-if="connected" @click="leaveGame">Leave Game</button>
        <button style="float:right" v-if="connected && gameStarted" @click="resetGame">Reset Game</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import ScoreBoard from "./components/ScoreBoard.vue";
import Dice from "./components/Dice.vue";
export default {
  name: "App",
  components: {
    ScoreBoard,
    Dice,
  },
  data() {
    return {
      connected: false,
      gameStarted:false,
      game: {        
        userName:'',
        players: [],
        bestBets: null,       
        dice: [
          { value: -1, isHeld: false },
          { value: -1, isHeld: false },
          { value: -1, isHeld: false },
          { value: -1, isHeld: false },
          { value: -1, isHeld: false },
        ],
      },
      socket: null,
      clientId:'',
      wsUri: "wss://rancken.dyndns.org/websocket/websession",
    };
  },
  mounted() {
    // this.socket = this.createSocket();
  },
  methods: {
    connect() {
      if(this.socket && typeof this.socket === WebSocket) {
        console.log("Closing OLD socket");
        this.socket.close();

      }
      this.socket = this.createSocket();
    },
    markScore(e) {
      if(this.myTurn) {
        console.log("markScore");
        console.log(e);
        this.sendCommand("score", this.game.userName + ";" + e.markAs);        
      }
    },
    
    createSocket() {
      var websocket = new WebSocket(this.wsUri);
      websocket.onopen = () => {
        this.sendCommand("hello", this.game.userName + ";" + this.clientId);
        console.log('socet connected');
        this.connected = true;
      };

      websocket.onclose = () => {
        console.log('websocket was closed');
        this.connected = false;
        console.log(this.socket);
        window.setTimeout(() => {console.log('reconnecting');this.socket = this.createSocket(),1000});

      };

      websocket.onmessage = (e) => {
        let ev = JSON.parse(e.data);
        let i = 0;
        let player = null;
        let diceStates = null;
        switch (ev.event) {
          case "UserJoined":
            if(this.game.players.findIndex(p => p.clientId === ev.clientId)< 0) {
              this.game.players.push({
                userName: ev.player,
                clientId: ev.clientId,
                isHisTurn: false,
                score: this.emptyScore,
                rollsLeft:3
              });
              this.clientId = ev.clientId;
            }
            else {
              console.log("Client " + ev.clientId + " successfully reconnected");
            }
            break;
          case "UserLeft":
            i = this.game.players.findIndex((p) => p.userName == ev.player);
            console.log(ev.player + " left. His index is " + i);

            if (i >= 0) {
              /* It was I who quit */
              if(this.game.players[i].userName === this.game.userName) {
                this.socket.close();
                this.connected = false;      
                this.gameStarted = false;         
              }
              console.log('splicing at index ' + i);
              this.game.players.splice(i, 1);
            }
            
            
            break;

          case "GameInfo": 
          console.log('I really should check my perception of the game so that it corresponds to how the server sees it');
          this.game.players = ev.eventArg.players;
            break;

          

          case "UserNameChanged":
            this.game.userName = ev.player;
            player = this.game.players.find((p) => p.userName == ev.player);
            if (player) {
              player.userName = ev.player;
            }
            break;

            case "UserChangedDiceHold":
              diceStates = ev.eventArg;
              if(diceStates.length === 5) {
                for(let d=0;d<5;d++) {
                  this.game.dice[d].isHeld = diceStates[d] === 1;
                }
              }
            break;

          case "TurnChanged":
            this.gameStarted = true;
            this.game.players.forEach((p) => {
              p.isHisTurn = false;
              p.itsHisTurn = false;
            });
            player = this.game.players.find((p) => p.userName == ev.player);
            if (player) {
              console.log('found me!', player.userName);
              player.isHisTurn = true;
              player.itsHisTurn = true;
              player.rollsLeft = 3;
            } 
            break;

          case "UserRolled":
            player = this.game.players.find((p) => p.userName == ev.player);
            this.game.dice[0].value = ev.eventArg.rollState.d1.value;
            this.game.dice[1].value = ev.eventArg.rollState.d2.value;
            this.game.dice[2].value = ev.eventArg.rollState.d3.value;
            this.game.dice[3].value = ev.eventArg.rollState.d4.value;
            this.game.dice[4].value = ev.eventArg.rollState.d5.value;
            
            this.game.bestBets = ev.eventArg.bestBets;
            console.log(this.game.bestBets);
            player.rollsLeft = ev.eventArg.rollState.rollsLeft;
            break;

           case "UserScored":
            player = this.game.players.find((p) => p.userName == ev.player);
            if(player)
              player.score = ev.eventArg;
            this.game.dice.forEach((d) => {
              d.isHeld = false;
             });
            
            break;

            
        }
      };

      websocket.onerror = function (e) {
        console.log("ERROR: " + e.data);
      };
      return websocket;
    },

    roll() {
      
      this.startShuffle(0,7);
    },

    notifyDiceHoldChanged() {
      console.log("---- dice hold changed ----");
      let diceData = [];
      for(let d=0;d<5;d++) {
         diceData.push(this.game.dice[d].isHeld ? 1 : 0);
      }
      this.sendCommand("changeDiceHold", this.game.userName + ";" + JSON.stringify(diceData));
    },

    startShuffle(rep, reps) {
      let rollData = "";

      rollData += this.game.dice[0].isHeld ? "1," : "0,";
      rollData += this.game.dice[1].isHeld ? "1," : "0,";
      rollData += this.game.dice[2].isHeld ? "1," : "0,";
      rollData += this.game.dice[3].isHeld ? "1," : "0,";
      rollData += this.game.dice[4].isHeld ? "1," : "0,";
      
      if(rep === reps) {
       this.sendCommand("roll", this.game.userName + ";" + rollData);        
      }
      else {
        this.game.dice.forEach((d) => {
              if(!d.isHeld)
                d.value = Math.round(Math.random() * 5) + 1;
            });
         window.setTimeout(() => this.startShuffle(rep+1,reps),200);
         
        
      }

    },

    startGame() {
      this.sendCommand("startgame", this.game.userName);
      this.gameStarted = true;
    },

    leaveGame() {
      this.sendCommand("goodbye", this.game.userName );
      this.gameStarted = true;
    },

    resetGame() {
      this.sendCommand("resetgame");
      this.gameStarted = true;
    },
     
    sendCommand(command,args) {
      if (this.socket.readyState === 1) {
        let json = JSON.stringify({command: command, clientId: this.clientId, args: args})
        this.socket.send(json);
      } else {
        console.log("SOCKET IS CLOSED. RECONNECTING");
        this.socket = this.createSocket();
        this.socket.send(command);
      }
    },
  },

  computed: {
    emptyScore() {
      return {
        ones: -1,
        twos: -1,
        threes: -1,
        fours: -1,
        fives: -1,
        sixes: -1,
        onepair:-1,
        twopair:-1,
        tripple:-1,
        quadruple:-1,
        smallstrait:-1,
        largestrait:-1,
        fullhouse:-1,
        chance:-1,
        yatzy:-1
      };
    },

     me() {
      return this.game.players.find((p) => p.userName == this.game.userName);
    },
    myTurn() {
      let me = this.game.players.find((p) => p.userName == this.game.userName);
      if (me)
        console.log('myTurn', JSON.stringify(me));
      if (me && me.isHisTurn) return true;
      return false;
    },
    rollsLeft() {
      let me = this.game.players.find((p) => p.userName == this.game.userName);
      if (me) return me.rollsLeft;
      return 0;
    },
  },
};
</script>

<style>
#app {
    font-family: 'Segoe UI', Segoe, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    
    display: inline-block;
       background: #D2B4DE;
    color: white;
     top:0;
  left:0;
  right:0;
  bottom:0;
  position: absolute;
   
}
#wrapper {
 top:0;
  left:0;
  right:0;
  bottom:0;
  position: relative;
  min-height:100%;    
  font-size: 16px;
}



#app.dark .scoreboard .cell span.bet {
    opacity: .3;
}



#app.dark .die.held {
  border:solid white 3px;
}

#app .scoreboard {
    padding:15px;
    border-radius: 5px;
    display: block;
    position: absolute;
    bottom: 100px;
    top: 45px;
    left: 10px;
    margin: 0 auto;
    right: 10px;
    /* padding: 10px; */
    box-sizing: border-box;
    background: #A569BD;;
}

#app .dicewrapper {
    /* width: 100%; */
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    right: 0;
    height:80px;
}

#app .dicewrapper button {
  margin: 10px auto 10px auto;
  margin-left:20px;
  height: 40px;
  box-sizing: border-box;  
}
#app button.rollbutton {
      -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #82E0AA;
    border-radius: 5px;
    position: absolute;
    right: 20px;
    color: white;
    font-weight: bold;
    -webkit-appearance: none;
    border: none;
    outline: none;
    box-sizing: border-box;
}

#app button.rollbutton:disabled {
   opacity:0.3;
}

@media(min-width:430px) {
  #app button.rollbutton {
    width:100px;
    height:62px;
    margin-top:0;
    
    font-size:20px;
  }

}

#app .loginwrapper,
#app .logoutwrapper {
    padding: 5px 10px;
}


#app .loginwrapper {
 
    position: absolute;
    top: 50%;
    left: 50%;
    /* right: 0; */
    /* bottom: 0; */
    transform: translate(-50%,-50%);
}

#app input[type="text"],
#app button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border:solid #A569BD 1px;
  outline:none;
  font-size:16px;
  height:35px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

}

#app button {
  background-color:cornflowerblue;
  border:none;
  color:white;
  font-weight: bold;
  padding:0 16px;
  border-radius: 5px;
}
#app label {
  font-size:16px;
  line-height: 35px;
  font-weight: bold;;
}


</style>
