<template>
  <div class="card" :class="classFromName(name, activated)">
    <div class="name">
      <div>Игрок {{user_num}}</div>
      <div>{{activated ? name : 'Нет роли'}} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    name: String,
    user_num: Number,
    activated: Boolean
  },

  methods: {
    classFromName(nameCl, activation) {
      if (!activation) {
        return 'unactivated'
      }

      if (nameCl === 'Мафия') return 'mafia'
      return ''
    }
  }
}
</script>

<style scoped>

.card {
  width: 125px;
  height: 175px;
  background-color: #BFBFBF;
  border-radius: 15px;
  display: inline-block;
  margin: 10px 10px;
}

.name {
  text-align: center;
  vertical-align: middle;
}


.mafia {
  background-color: darkred;
  color: #ffffff;
}

.unactivated {
  background-color: #F2F2F2;
}

</style>
