export const state = () => ({
  usersCount: 0,
  roles: [
    {
      name: 'Мирные',
      number: 5
    },
    {
      name: 'Мафия',
      number: 2
    }
  ]
})

export const getters = {
  usersCount: (state) => {
    if(state.usersCount !== 0) {
      return
    } else {
      return state.usersCount
    }
  }
}

export const mutations = {
  INIT(state) {
    const initCount = state.roles
      .reduce((acc, role) => acc.number + role.number)
    console.log(initCount)
    state.usersCount = initCount
  },

  PLUS_USERSCOUNT(state, number) {
    state.usersCount = state.usersCount + number
  },
  MINUS_USERSCOUNT(state, number) {
    state.usersCount = state.usersCount - number
  },

  UPDATE_ROLE_NUMBER(state, payload) {
    state.roles.find(role => role.name === payload.name).number += payload.num
  }
}
