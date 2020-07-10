<template>
  <div class="control_wrapper">

    <div class="number">
      <div class="number__item">Количесвто игроков: </div>
      <div class="number__item">{{ usersCount }}</div>
    </div>


    <RoleItem v-for="(role, index) in roles"
              :key="role.name"
              :roleName="role.name"
              :roleNumber="role.number"
    />


    <b-button style="margin-top: 60px;">Распределить роли</b-button>

  </div>
</template>

<script>
import RoleItem from './RoleItem';
import { mapState } from 'vuex'

export default {
  name: "Control",
  components: {
    RoleItem
  },

  data() {
    return {
    }
  },

  mounted() {
    this.$store.commit('INIT')
  },

  computed: {
    roles() {
      return this.$store.state.roles
    },
    usersCount() {
      return this.$store.state.usersCount
    }
  }
}
</script>

<style scoped>

.number {
  font-size: 22px;
}

.number__item {
  display: inline-block;
}

.control_wrapper {
  width: 100%;
  background-color: #DEDEDE;
  border-radius: 17px;
  padding: 10px 15px;
}

</style>
