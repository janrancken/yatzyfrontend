(function(e){function r(r){for(var t,n,a=r[0],i=r[1],l=r[2],d=0,m=[];d<a.length;d++)n=a[d],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&m.push(c[n][0]),c[n]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);u&&u(r);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,r=0;r<o.length;r++){for(var s=o[r],t=!0,a=1;a<s.length;a++){var i=s[a];0!==c[i]&&(t=!1)}t&&(o.splice(r--,1),e=n(n.s=s[0]))}return e}var t={},c={app:0},o=[];function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,r,s){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)n.d(s,t,function(r){return e[r]}.bind(null,t));return s},n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=r,a=a.slice();for(var l=0;l<a.length;l++)r(a[l]);var u=i;o.push([0,"chunk-vendors"]),s()})({0:function(e,r,s){e.exports=s("56d7")},"034f":function(e,r,s){"use strict";s("85ec")},"4a31":function(e,r,s){},"56d7":function(e,r,s){"use strict";s.r(r);s("e260"),s("e6cf"),s("cca6"),s("a79d");var t=s("2b0e"),c=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"dark",attrs:{id:"app"}},[e.connected?e._e():s("div",{staticClass:"loginwrapper"},[s("button",{on:{click:e.connect}},[e._v("Anslut")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.game.userName,expression:"game.userName"}],attrs:{type:"text"},domProps:{value:e.game.userName},on:{input:function(r){r.target.composing||e.$set(e.game,"userName",r.target.value)}}})]),s("score-board",{attrs:{game:e.game},on:{markScore:function(r){return e.markScore(r)}}}),s("div",{staticClass:"dicewrapper"},[s("dice",{attrs:{dice:e.game.dice,canHold:e.rollsLeft<3&&e.rollsLeft>0},on:{diceholdchanged:e.notifyDiceHoldChanged}}),e.connected&&e.gameStarted&&e.myTurn&&e.rollsLeft>0?s("button",{staticClass:"rollbutton",on:{click:e.roll}},[e._v("Roll("+e._s(e.rollsLeft)+")")]):e._e()],1),s("div",{staticClass:"logoutwrapper"},[e.connected&&!e.gameStarted?s("button",{on:{click:e.startGame}},[e._v("Start Game")]):e.connected?s("button",{on:{click:e.leaveGame}},[e._v("End Game")]):e._e()])],1)},o=[],n=(s("7db0"),s("c740"),s("4160"),s("a434"),s("159b"),function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"scoreboard"},[s("div",{staticClass:"minor-scale"},[e._m(0),e._l(e.game.players,(function(r){return s("div",{key:r.userName,staticClass:"column"},[s("div",{staticClass:"cell",domProps:{innerHTML:e._s(r.userName)}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,1))},on:{click:function(s){return e.markScore(r,"ones")}}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,2))},on:{click:function(s){return e.markScore(r,"twos")}}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,3))},on:{click:function(s){return e.markScore(r,"threes")}}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,4))},on:{click:function(s){return e.markScore(r,"fours")}}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,5))},on:{click:function(s){return e.markScore(r,"fives")}}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,6))},on:{click:function(s){return e.markScore(r,"sixes")}}}),s("div",{staticClass:"cell separator",domProps:{innerHTML:e._s(e.getMinorSum(r))}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.getBonus(r)||"&nbsp;")}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,7))},on:{click:function(s){return e.markScore(r,"onepair")}}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,8))},on:{click:function(s){return e.markScore(r,"twopair")}}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,9))},on:{click:function(s){return e.markScore(r,"tripple")}}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,10))},on:{click:function(s){return e.markScore(r,"quadruple")}}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,11))},on:{click:function(s){return e.markScore(r,"smallstrait")}}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,12))},on:{click:function(s){return e.markScore(r,"largestrait")}}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,13))},on:{click:function(s){return e.markScore(r,"fullhouse")}}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,14))},on:{click:function(s){return e.markScore(r,"chance")}}}),s("div",{staticClass:"cell",domProps:{innerHTML:e._s(e.displayScore(r,15))},on:{click:function(s){return e.markScore(r,"yatzy")}}}),s("div",{staticClass:"cell separator",domProps:{innerHTML:e._s(e.getFullSum(r))}})])}))],2)])}),a=[function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"column head"},[s("div",{staticClass:"cell"},[e._v("-")]),s("div",{staticClass:"cell"},[e._v("Ettor")]),s("div",{staticClass:"cell"},[e._v("Tvåor")]),s("div",{staticClass:"cell"},[e._v("Treor")]),s("div",{staticClass:"cell"},[e._v("Fyror")]),s("div",{staticClass:"cell"},[e._v("Femmor")]),s("div",{staticClass:"cell"},[e._v("Sexor")]),s("div",{staticClass:"cell separator"},[e._v("Summa")]),s("div",{staticClass:"cell"},[e._v("Bonus")]),s("div",{staticClass:"cell"},[e._v("1 par")]),s("div",{staticClass:"cell"},[e._v("2 par")]),s("div",{staticClass:"cell"},[e._v("Tretal")]),s("div",{staticClass:"cell"},[e._v("Fyrtal")]),s("div",{staticClass:"cell"},[e._v("L. stege")]),s("div",{staticClass:"cell"},[e._v("S. stege")]),s("div",{staticClass:"cell"},[e._v("Kåk")]),s("div",{staticClass:"cell"},[e._v("Chans")]),s("div",{staticClass:"cell"},[e._v("YATZY")]),s("div",{staticClass:"cell separator"},[e._v("Summa")])])}],i=(s("d3b7"),s("25f0"),{name:"ScoreBoard",props:{game:Object},methods:{displayScore:function(e,r){switch(r){case 1:return-1==e.score.ones?" ":e.score.ones.toString();case 2:return-1==e.score.twos?" ":e.score.twos.toString();case 3:return-1==e.score.threes?" ":e.score.threes.toString();case 4:return-1==e.score.fours?" ":e.score.fours.toString();case 5:return-1==e.score.fives?" ":e.score.fives.toString();case 6:return-1==e.score.sixes?" ":e.score.sixes.toString();case 7:return-1==e.score.onepair?" ":e.score.onepair.toString();case 8:return-1==e.score.twopair?" ":e.score.twopair.toString();case 9:return-1==e.score.tripple?" ":e.score.tripple.toString();case 10:return-1==e.score.quadruple?" ":e.score.quadruple.toString();case 11:return-1==e.score.smallstrait?" ":e.score.smallstrait.toString();case 12:return-1==e.score.largestrait?" ":e.score.largestrait.toString();case 13:return-1==e.score.fullhouse?" ":e.score.fullhouse.toString();case 14:return-1==e.score.chance?" ":e.score.chance.toString();case 15:return-1==e.score.yatzy?" ":e.score.yatzy.toString()}},getBonus:function(e){var r=e.score.ones+e.score.twos+e.score.threes+e.score.fours+e.score.fives+e.score.sixes;return r>=63?50:0},getMinorSum:function(e){return(-1==e.score.ones?0:e.score.ones)+(-1==e.score.twos?0:e.score.twos)+(-1==e.score.threes?0:e.score.threes)+(-1==e.score.fours?0:e.score.fours)+(-1==e.score.fives?0:e.score.fives)+(-1==e.score.sixes?0:e.score.sixes)},getMajorSum:function(e){return(-1==e.score.onepair?0:e.score.onepair)+(-1==e.score.twopair?0:e.score.twopair)+(-1==e.score.tripple?0:e.score.tripple)+(-1==e.score.quadruple?0:e.score.quadruple)+(-1==e.score.smallstrait?0:e.score.smallstrait)+(-1==e.score.largestrait?0:e.score.largestrait)+(-1==e.score.fullhouse?0:e.score.fullhouse)+(-1==e.score.chance?0:e.score.chance)+(-1==e.score.yatzy?0:e.score.yatzy)},getFullSum:function(e){return this.getMinorSum(e)+this.getBonus(e)+this.getMajorSum(e)},markScore:function(e,r){e.rollsLeft<3&&this.$emit("markScore",{markAs:r})}}}),l=i,u=(s("e8b5c"),s("2877")),d=Object(u["a"])(l,n,a,!1,null,"6aa0dec8",null),m=d.exports,f=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"dice"},e._l(e.dice,(function(r,t){return s("die",{key:"dice"+t,attrs:{die:e.dice[t],canHold:e.canHold},on:{diceholdchanged:function(r){return e.$emit("diceholdchanged")}}})})),1)},p=[],g=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("svg",{staticClass:"die",class:e.dieClass,attrs:{version:"1.1",viewBox:"0 0 40 40"},on:{click:e.toggleHold}},[s("g",{attrs:{"fill-rule":"evenodd"}},[s("rect",{staticClass:"bg",attrs:{width:"40",height:"40",rx:"5",ry:"5"}}),s("circle",{staticClass:"dot dot-1-1",attrs:{cx:"10",cy:"10",r:"3"}}),s("circle",{staticClass:"dot dot-2-1",attrs:{cx:"20",cy:"10",r:"3"}}),s("circle",{staticClass:"dot dot-3-1",attrs:{cx:"30",cy:"10",r:"3"}}),s("circle",{staticClass:"dot dot-1-2",attrs:{cx:"10",cy:"20",r:"3"}}),s("circle",{staticClass:"dot dot-2-2",attrs:{cx:"20",cy:"20",r:"3"}}),s("circle",{staticClass:"dot dot-3-2",attrs:{cx:"30",cy:"20",r:"3"}}),s("circle",{staticClass:"dot dot-1-3",attrs:{cx:"10",cy:"30",r:"3"}}),s("circle",{staticClass:"dot dot-2-3",attrs:{cx:"20",cy:"30",r:"3"}}),s("circle",{staticClass:"dot dot-3-3",attrs:{cx:"30",cy:"30",r:"3"}})])])},v=[],h={name:"Die",props:{die:{type:Object,get:function(){},set:function(e){this.$emit("setDie",e)}},canHold:{type:Boolean}},methods:{displayScore:function(e,r){switch(r){case 1:return-1==e.score.ones?" ":e.score.ones.toString();case 2:return-1==e.score.twos?" ":e.score.twos.toString();case 3:return-1==e.score.threes?" ":e.score.threes.toString();case 4:return-1==e.score.fours?" ":e.score.fours.toString();case 5:return-1==e.score.fives?" ":e.score.fives.toString();case 6:return-1==e.score.sixes?" ":e.score.sixes.toString()}},toggleHold:function(){this.canHold&&(this.die.isHeld=!this.die.isHeld,this.$emit("diceholdchanged"))}},computed:{dieClass:function(){var e=[];return e.push("die-"+this.die.value),this.die.isHeld&&e.push("held"),e}}},S=h,y=(s("924b"),Object(u["a"])(S,g,v,!1,null,"1dbb6ba5",null)),C=y.exports,k={components:{Die:C},name:"Dice",props:{canHold:{type:Boolean},dice:{type:Array,get:function(){},set:function(e){this.$emit("setDice",e)}}},methods:{displayScore:function(e,r){switch(r){case 1:return-1==e.score.ones?" ":e.score.ones.toString();case 2:return-1==e.score.twos?" ":e.score.twos.toString();case 3:return-1==e.score.threes?" ":e.score.threes.toString();case 4:return-1==e.score.fours?" ":e.score.fours.toString();case 5:return-1==e.score.fives?" ":e.score.fives.toString();case 6:return-1==e.score.sixes?" ":e.score.sixes.toString()}}}},_=k,b=(s("d228"),Object(u["a"])(_,f,p,!1,null,"ac72f6d8",null)),H=b.exports,w={name:"App",components:{ScoreBoard:m,Dice:H},data:function(){return{connected:!1,gameStarted:!1,game:{userName:"",players:[],dice:[{value:-1,isHeld:!1},{value:-1,isHeld:!1},{value:-1,isHeld:!1},{value:-1,isHeld:!1},{value:-1,isHeld:!1}]},socket:null,wsUri:"wss://rancken.dyndns.org/websocket/websession"}},mounted:function(){},methods:{connect:function(){this.socket=this.createSocket()},markScore:function(e){this.myTurn&&(console.log("markScore"),console.log(e),this.sendCommand(JSON.stringify({command:"score",args:this.game.userName+";"+e.markAs})))},createSocket:function(){var e=this,r=new WebSocket(this.wsUri);return r.onopen=function(){e.sendCommand(JSON.stringify({command:"hello",args:e.game.userName})),e.connected=!0},r.onclose=function(){e.connected=!1},r.onmessage=function(r){var s=JSON.parse(r.data),t=0,c=null,o=null;switch(s.event){case"UserJoined":e.game.players.push({userName:s.player,isHisTurn:!1,score:e.emptyScore,rollsLeft:3});break;case"UserLeft":t=e.game.players.findIndex((function(e){return e.userName==s.player})),console.log(s.player+" left. His index is "+t),t>=0&&(e.game.players[t].userName===e.game.userName&&(e.socket.close(),e.connected=!1,e.gameStarted=!1),console.log("splicing at index "+t),e.game.players.splice(t,1));break;case"UserNameChanged":e.game.userName=s.player,c=e.game.players.find((function(e){return e.userName==s.player})),c&&(c.userName=s.player);break;case"UserChangedDiceHold":if(o=s.eventArg,5===o.length)for(var n=0;n<5;n++)e.game.dice[n].isHeld=1===o[n];break;case"TurnChanged":e.gameStarted=!0,e.game.players.forEach((function(e){e.isHisTurn=!1})),c=e.game.players.find((function(e){return e.userName==s.player})),c&&(c.isHisTurn=!0,c.rollsLeft=3);break;case"UserRolled":c=e.game.players.find((function(e){return e.userName==s.player})),e.game.dice[0].value=s.eventArg.d1.value,e.game.dice[1].value=s.eventArg.d2.value,e.game.dice[2].value=s.eventArg.d3.value,e.game.dice[3].value=s.eventArg.d4.value,e.game.dice[4].value=s.eventArg.d5.value,c.rollsLeft=s.eventArg.rollsLeft;break;case"UserScored":c=e.game.players.find((function(e){return e.userName==s.player})),c&&(c.score=s.eventArg),e.game.dice.forEach((function(e){e.isHeld=!1}));break}},r.onerror=function(e){console.log("ERROR: "+e.data)},r},roll:function(){this.startShuffle(0,7)},notifyDiceHoldChanged:function(){console.log("---- dice hold changed ----");for(var e=[],r=0;r<5;r++)e.push(this.game.dice[r].isHeld?1:0);this.sendCommand(JSON.stringify({command:"changeDiceHold",args:this.game.userName+";"+JSON.stringify(e)}))},startShuffle:function(e,r){var s=this,t="";t+=this.game.dice[0].isHeld?"1,":"0,",t+=this.game.dice[1].isHeld?"1,":"0,",t+=this.game.dice[2].isHeld?"1,":"0,",t+=this.game.dice[3].isHeld?"1,":"0,",t+=this.game.dice[4].isHeld?"1,":"0,",e===r?this.sendCommand(JSON.stringify({command:"roll",args:this.game.userName+";"+t})):(this.game.dice.forEach((function(e){e.isHeld||(e.value=Math.round(5*Math.random())+1)})),window.setTimeout((function(){return s.startShuffle(e+1,r)}),200))},startGame:function(){this.sendCommand(JSON.stringify({command:"startgame",args:this.game.userName})),this.gameStarted=!0},leaveGame:function(){this.sendCommand(JSON.stringify({command:"goodbye",args:this.game.userName})),this.gameStarted=!0},sendCommand:function(e){1===this.socket.readyState||(console.log("SOCKET IS CLOSED. RECONNECTING"),this.socket=this.createSocket()),this.socket.send(e)}},computed:{emptyScore:function(){return{ones:-1,twos:-1,threes:-1,fours:-1,fives:-1,sixes:-1,onepair:-1,twopair:-1,tripple:-1,quadruple:-1,smallstrait:-1,largestrait:-1,fullhouse:-1,chance:-1,yatzy:-1}},me:function(){var e=this;return this.game.players.find((function(r){return r.userName==e.game.userName}))},myTurn:function(){var e=this,r=this.game.players.find((function(r){return r.userName==e.game.userName}));return!(!r||!r.isHisTurn)},rollsLeft:function(){var e=this,r=this.game.players.find((function(r){return r.userName==e.game.userName}));return r?r.rollsLeft:0}}},N=w,x=(s("034f"),Object(u["a"])(N,c,o,!1,null,null,null)),T=x.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(T)}}).$mount("#app")},"85ec":function(e,r,s){},"882b":function(e,r,s){},"924b":function(e,r,s){"use strict";s("9947")},9947:function(e,r,s){},d228:function(e,r,s){"use strict";s("882b")},e8b5c:function(e,r,s){"use strict";s("4a31")}});
//# sourceMappingURL=app.e6f9497d.js.map