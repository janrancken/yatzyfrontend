<template>
  <div class="scoreboard">
    <div class="minor-scale">
      <div class="column head">
          <div class="cell name">&nbsp;</div>        
          <div class="cell even">Ettor</div>
          <div class="cell">Tvåor</div>
          <div class="cell even">Treor</div>
          <div class="cell">Fyror</div>
          <div class="cell even">Femmor</div>
          <div class="cell">Sexor</div>
          <div class="cell even separator">Summa</div>
          <div class="cell">Bonus</div>
          <div class="cell even">Tretal</div>
          <div class="cell">Fyrtal</div>
          <div class="cell even">L. stege</div>
          <div class="cell">S. stege</div>
          <div class="cell even">Kåk</div>
          <div class="cell">Chans</div>
          <div class="cell even">YATZY</div>
           <div class="cell separator">Summa</div>

      </div>

      <div class="column" v-for="(player) in game.players" :key="player.userName" >
          <div class="cell name" v-html="player.userName"></div>
          <div class="cell even value" @click="markScore(player, 'ones')" v-html="displayScore(player,1)"></div>
          <div class="cell value" @click="markScore(player,'twos')" v-html="displayScore(player,2)"></div>
          <div class="cell even value" @click="markScore(player,'threes')" v-html="displayScore(player,3)"></div>
          <div class="cell value" @click="markScore(player,'fours')" v-html="displayScore(player,4)"></div>
          <div class="cell even value" @click="markScore(player,'fives')" v-html="displayScore(player,5)"></div>
          <div class="cell value" @click="markScore(player,'sixes')" v-html="displayScore(player,6)"></div>
          <div class="cell even value separator" v-html="getMinorSum(player)"></div>
          <div class="cell value" v-html="getBonus(player) || '&nbsp;'"></div>
          <div class="cell even value" @click="markScore(player,'tripple')" v-html="displayScore(player,7)"></div>
          <div class="cell value" @click="markScore(player,'quadruple')" v-html="displayScore(player,8)"></div>
          <div class="cell even value" @click="markScore(player,'smallstrait')" v-html="displayScore(player,9)"></div>
          <div class="cell value" @click="markScore(player,'largestrait')" v-html="displayScore(player,19)"></div>
          <div class="cell even value" @click="markScore(player,'fullhouse')" v-html="displayScore(player,11)"></div>
          <div class="cell value" @click="markScore(player,'chance')" v-html="displayScore(player,12)"></div>
          <div class="cell even value" @click="markScore(player,'yatzy')" v-html="displayScore(player,13)"></div>
          <div class="cell value separator" v-html="getFullSum(player)"></div>
          
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoreBoard',
  props: {
    game: Object    
  },
  methods: {
    displayScore(player,idx) {
      switch(idx) {
        case 1:
          if(player.rollsLeft < 3 && player.score.ones==-1) return "<span class=\"bet\">" + this.game.bestBets.ones.toString() + "</span>";
          return player.score.ones == -1 ? ' ' : player.score.ones.toString();
        case 2:
          if(player.rollsLeft < 3 && player.score.twos==-1) return "<span class=\"bet\">" + this.game.bestBets.twos.toString() + "</span>";
          return player.score.twos == -1 ? ' ' : player.score.twos.toString();
        case 3:
          if(player.rollsLeft < 3 && player.score.threes==-1) return "<span class=\"bet\">" + this.game.bestBets.threes.toString() + "</span>";
          return player.score.threes == -1 ? ' ' : player.score.threes.toString();
       case 4:
          if(player.rollsLeft < 3 && player.score.fours==-1) return "<span class=\"bet\">" + this.game.bestBets.fours.toString() + "</span>";
          return player.score.fours == -1 ? ' ' : player.score.fours.toString();
       case 5:
          if(player.rollsLeft < 3 && player.score.fives==-1) return "<span class=\"bet\">" + this.game.bestBets.fives.toString() + "</span>";
          return player.score.fives == -1 ? ' ' : player.score.fives.toString();
       case 6:
          if(player.rollsLeft < 3 && player.score.sixes==-1) return "<span class=\"bet\">" + this.game.bestBets.sixes.toString() + "</span>";
          return player.score.sixes == -1 ? ' ' : player.score.sixes.toString();
      case 7:
          if(player.rollsLeft < 3 && player.score.tripple==-1) return "<span class=\"bet\">" + this.game.bestBets.tripple.toString() + "</span>";
          return player.score.tripple == -1 ? ' ' : player.score.tripple.toString();
      case 8:
          if(player.rollsLeft < 3 && player.score.quadruple==-1) return "<span class=\"bet\">" + this.game.bestBets.quadruple.toString() + "</span>";
          return player.score.quadruple == -1 ? ' ' : player.score.quadruple.toString();
      case 9:
          if(player.rollsLeft < 3 && player.score.smallstrait==-1) return "<span class=\"bet\">" + this.game.bestBets.smallstrait.toString() + "</span>";
          return player.score.smallstrait == -1 ? ' ' : player.score.smallstrait.toString();
      case 10:
          if(player.rollsLeft < 3 && player.score.largestrait==-1) return "<span class=\"bet\">" + this.game.bestBets.largestrait.toString() + "</span>";
          return player.score.largestrait == -1 ? ' ' : player.score.largestrait.toString();
      case 11:
          if(player.rollsLeft < 3 && player.score.fullhouse==-1) return "<span class=\"bet\">" + this.game.bestBets.fullhouse.toString() + "</span>";
          return player.score.fullhouse == -1 ? ' ' : player.score.fullhouse.toString();
      case 12:
          if(player.rollsLeft < 3 && player.score.chance==-1) return "<span class=\"bet\">" + this.game.bestBets.chance.toString() + "</span>";
          return player.score.chance == -1 ? ' ' : player.score.chance.toString();
      case 13:
          if(player.rollsLeft < 3 && player.score.yatzy==-1) return "<span class=\"bet\">" + this.game.bestBets.yatzy.toString() + "</span>";
          return player.score.yatzy == -1 ? ' ' : player.score.yatzy.toString();
      }
    },

    getBonus(player) {
       let sum = 
         player.score.ones +
         player.score.twos +
         player.score.threes +
         player.score.fours +
         player.score.fives +
         player.score.sixes;
         if(sum >= 63)
           return 35;
         else
           return 0
    },

    getMinorSum(player) {
       return (player.score.ones == -1 ? 0 : player.score.ones) +
       (player.score.twos == -1 ? 0 : player.score.twos) +
       (player.score.threes == -1 ? 0 : player.score.threes) +
       (player.score.fours == -1 ? 0 : player.score.fours) +
       (player.score.fives == -1 ? 0 : player.score.fives) +
       (player.score.sixes == -1 ? 0 : player.score.sixes);
       
         
    },

    getMajorSum(player) {
       return (player.score.tripple == -1 ? 0 : player.score.tripple) +
       (player.score.quadruple == -1 ? 0 : player.score.quadruple) +
       (player.score.fullhouse == -1 ? 0 : player.score.fullhouse) +
       (player.score.smallstrait == -1 ? 0 : player.score.smallstrait) +
       (player.score.largestrait == -1 ? 0 : player.score.largestrait) +       
       (player.score.chance == -1 ? 0 : player.score.chance) +
       (player.score.yatzy == -1 ? 0 : player.score.yatzy);         
    },

    getFullSum(player) {
      return this.getMinorSum(player) + this.getBonus(player) + this.getMajorSum(player);
    },

    markScore(player,markAs) {      
      if(player.rollsLeft < 3)
        this.$emit('markScore', {markAs: markAs});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scoreboard {
  overflow: auto;
}
.column {
  float:left;
  width:50px;
  margin-right:5px;
}
.column.head {
  width:110px;
  font-weight: bold;
 
}
.column.head .cell,
.column .cell.name {
 background-color:transparent;
}
.cell:not(:last-of-type) {
 
 margin-bottom:5px;
}

.cell {
    width: 100%;    
    padding: 0 5px;
    box-sizing: border-box;
    height: 3.6vh;
    line-height: 3.6vh;
    background-color: #9559AD;
    border-radius: 7px;;
}

.cell.value {  
  text-align: center;
}

.cell.separator {
  border: solid #D2B4DE 2px;
  
}


.cell.value span.bet {
    opacity: 0.3;
}


</style>
