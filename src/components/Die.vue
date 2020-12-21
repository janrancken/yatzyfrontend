<template>    
    <svg @click="toggleHold" class="die" :class="dieClass" version="1.1" viewBox="0 0 40 40">
        <g fill-rule="evenodd">
          <rect width="40" height="40" rx="5" ry="5" class="bg"/>
          <circle cx="10" cy="10" r="3" class="dot dot-1-1"/>
          <circle cx="20" cy="10" r="3" class="dot dot-2-1"/>
          <circle cx="30" cy="10" r="3" class="dot dot-3-1"/>
          <circle cx="10" cy="20" r="3" class="dot dot-1-2"/>
          <circle cx="20" cy="20" r="3" class="dot dot-2-2"/>
          <circle cx="30" cy="20" r="3" class="dot dot-3-2"/>
          <circle cx="10" cy="30" r="3" class="dot dot-1-3"/>
          <circle cx="20" cy="30" r="3" class="dot dot-2-3"/>
          <circle cx="30" cy="30" r="3" class="dot dot-3-3"/>
        </g>
      </svg>    
</template>

<script>
export default {
  name: 'Die',
  props: {
    die: {type: Object,
      get() {
          
      },
      set(val) {
         this.$emit('setDie',val);
      }
    },
    canHold: {type: Boolean}
  },
  methods: {
    displayScore(player,idx) {
      switch(idx) {
        case 1:
          return player.score.ones == -1 ? ' ' : player.score.ones.toString();
        case 2:
          return player.score.twos == -1 ? ' ' : player.score.twos.toString();
        case 3:
          return player.score.threes == -1 ? ' ' : player.score.threes.toString();
       case 4:
          return player.score.fours == -1 ? ' ' : player.score.fours.toString();
       case 5:
          return player.score.fives == -1 ? ' ' : player.score.fives.toString();
       case 6:
          return player.score.sixes == -1 ? ' ' : player.score.sixes.toString();
      }
    },
    toggleHold() {
      if(this.canHold) {
         this.die.isHeld = !this.die.isHeld;
         this.$emit('diceholdchanged');
      }
    }

  },

  computed: {
    dieClass() {
      let ret = []
      ret.push("die-" + this.die.value);
      if(this.die.isHeld)
        ret.push("held");
      return ret;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.die {
  margin-top:10px;
  width:40px;
  height:40px;
  border:solid transparent 3px;
  border-radius:4px;
  box-sizing: border-box;
  float:left;
  margin-right: 5px;
  cursor:pointer;
}
@media(min-width:430px) {
  .die {
    width:64px;
    height:64px;
    margin-top:0;
  }
}
.die .dot {
  stroke:none;
  fill:#fff;
  opacity:0;
  transition: opacity ease-in-out 0.3s;
}
.die .bg {
  stroke:none;
  fill: #CD6155;
}
.die.die-1 .dot.dot-2-2,

.die.die-2 .dot.dot-1-1,
.die.die-2 .dot.dot-3-3,

.die.die-3 .dot.dot-1-1,
.die.die-3 .dot.dot-2-2,
.die.die-3 .dot.dot-3-3,

.die.die-4 .dot.dot-1-1,
.die.die-4 .dot.dot-1-3,
.die.die-4 .dot.dot-3-1,
.die.die-4 .dot.dot-3-3,

.die.die-5 .dot.dot-1-1,
.die.die-5 .dot.dot-1-3,
.die.die-5 .dot.dot-3-1,
.die.die-5 .dot.dot-3-3,
.die.die-5 .dot.dot-2-2,

.die.die-6 .dot.dot-1-1,
.die.die-6 .dot.dot-1-2,
.die.die-6 .dot.dot-1-3,
.die.die-6 .dot.dot-3-1,
.die.die-6 .dot.dot-3-2,
.die.die-6 .dot.dot-3-3 {
  opacity:1;
}

</style>
