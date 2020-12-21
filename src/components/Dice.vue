<template>
  <div class="dice">
    
    
    <die v-for="(d,index) in dice" :key="'dice' + index" :die="dice[index]" :canHold="canHold" @diceholdchanged="$emit('diceholdchanged')"/>
    
  </div>
  
</template>

<script>
import Die from './Die.vue';
export default {
  components: {
    Die    
  },
  name: 'Dice',
  props: {
    canHold: {type: Boolean},
    dice: {type: Array,
      get() {
          
      },
      set(val) {
         this.$emit('setDice',val);
      }
    }
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dice {
    display: block;
    margin: 0 auto;    
    text-align: center;
}

@media(max-width:420px) {
  .dice {
    margin: 0 30px;
  }
}
</style>
