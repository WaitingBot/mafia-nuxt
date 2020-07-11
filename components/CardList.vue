<template>
  <div class="card-list">
    <CardItem v-for="(card, index) in deck"
              :key="index"
              :name="card.name"
              :user_num="card.user_num"
    />

  </div>
</template>

<script>
import CardItem from './CardItem';

function shuffle(arr){
  let j, temp;
  for(let i = arr.length - 1; i > 0; i--){
    j = Math.floor(Math.random()*(i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

export default {
  name: "CardList",
  components: {CardItem},

  data() {
    return {
      deck: []
    }
  },

  methods: {
    generateDeck() {
      const allCards = this.roles
      let newDeck = []
      let number = 1
      allCards.forEach(role => {
        for (let i = 0; i < role.number; i++) {
          newDeck.push({
            name: role.name,
            user_num: number
          })

          number += 1
        }
      })
      this.deck = newDeck
    },

    shuffleDeck() {
      let newDeck = shuffle(this.deck)
      console.log('worked')

      // if (newDeck.length === this.deck.length) {
      for (let i = 0; i< newDeck.length; i++) {
        newDeck[i].user_num = this.deck[i].user_num
      }
      // } else {
      //   let number = 1
      //   for (let i = 0; i< newDeck.length; i++) {
      //     newDeck[i].user_num = number
      //     number += 1
      //   }
      // }

      this.deck = newDeck
      console.log(this.deck)
    }

  },

  mounted() {
    this.generateDeck()
    this.shuffleDeck()
    this.$root.$on('shuffleDeck', () => {
      this.shuffleDeck()
    })
  },

  computed: {
    roles() {
      console.log('Change role number')
      return this.$store.state.roles
    }
  }


}
</script>

<style scoped>

</style>
