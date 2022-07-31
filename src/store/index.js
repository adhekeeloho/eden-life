import { createStore } from 'vuex'
import  axios  from 'axios';

export default createStore({
  state: {
      Dogslists: [],
  },
  getters: {
  },
  mutations: {
     SET_DOGS(state, Dogslists) {
      state.Dogslists= Dogslists
  }
  },
  actions: {
     async fetchDogs({ commit }) {
      try {
        const data = await axios.get('https://dog.ceo/api/breed/hound/images')
          commit('SET_DOGS', data.data.message)
          console.log(data)
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }
  },
  modules: {},
});
