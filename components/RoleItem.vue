<template>
  <div class="wrapper">

    <div class="role_name">{{ roleName }}</div>

    <div class="role_number">
      <b-icon class="num-btn" icon="dash-circle" @click="minusNumber"></b-icon>
      <span>{{ roleNumber }}</span>
      <b-icon class="num-btn" icon="plus-circle" @click="plusNumber"></b-icon>
    </div>


  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "RoleItem",

  props: {
    roleName: String,
    roleNumber: Number
  },


  methods: {

    minusNumber() {
      if(this.roleNumber > 0) {
        const changes = {
          name: this.roleName,
          num: -1
        }

        this.$root.$emit('updateDeckCard', changes)
        this.$store.commit('UPDATE_ROLE_NUMBER', changes)
        }
      },


    plusNumber() {
      const changes = {
        name: this.roleName,
        num: 1
      }

      this.$root.$emit('updateDeckCard', changes)
      this.$store.commit('UPDATE_ROLE_NUMBER', changes)
    }

    },


}
</script>

<style scoped>

.num-btn {
  cursor: pointer;
}

.role_name, .role_number {
  display: inline-block;
  font-size: 22px;
}

.role_name {
  margin-right: 40px;
}

.wrapper {
  margin: 0 10px;
}

</style>
