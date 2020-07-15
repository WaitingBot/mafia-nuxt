<template>
  <div class="card-list">
    <CardItem v-for="(card, index) in deck"
              :key="index"
              :name="card.name"
              :user_num="card.user_num"
              :activated="card.activated"
    />

  </div>
</template>

<script>
import CardItem from './CardItem';

function shuffle(array){
  let j, temp;
  const arr = [...array]
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
      const allCards = this.$store.state.roles
      let newDeck = []
      let number = 1
      allCards.forEach(role => {
        for (let i = 0; i < role.number; i++) {
          newDeck.push({
            name: role.name,
            user_num: number,
            activated: true
          })

          number += 1
        }
      })
      this.deck = [...newDeck]
    },

    shuffleDeck() {
      let copy = JSON.parse(JSON.stringify(this.deck))

      const allRoles = shuffle(copy)

      this.deck.map((x, index) => {
        x.user_num = index + 1
        x.name = allRoles[index].name
        x.activated = true
        return x
      })

      this.deck = this.deck.slice()
    },

    updateDeck(changes) {
      if(changes.num > 0) {
        changes.user_num = this.deck.length + 1
        changes.activated = false
        this.deck.push(changes)
      } else {
        const index = this.deck.map(card => {return card.name}).indexOf(changes.name);
        this.deck.splice(index, 1);
      }
    }

  },

  mounted() {
    this.generateDeck()
    this.shuffleDeck()

    this.$root.$on('shuffleDeck', () => {
      this.shuffleDeck()
    })

    this.$root.$on('updateDeckCard', (changes) => {
      this.updateDeck(changes)
    })


  },


}
</script>

<style scoped>

</style>
