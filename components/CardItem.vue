<template>
  <div class="card" :class="classFromName(name) ">
    <div class="name">
      <div>Игрок {{user_num}}</div>
      <div>{{name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    name: String,
    user_num: Number
  },

  methods: {
    classFromName(nameCl) {
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

</style>
