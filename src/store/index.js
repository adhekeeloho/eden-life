import { createStore } from 'vuex'
import  axios  from 'axios';

export default createStore({
  state: {
    Dogslists: [],
    BreadLists: [],
  },
  getters: {
    // SET_VALUE: function (state, payload) {
    //   Object.keys(payload).forEach((key) => {
    //     if (state.hasOwnProperty.call(key)) {
    //       state[key] = payload[key];
    //     }
    //   });
    // },

    searchResult: (state) => state.Dogslists,
  },
  mutations: {
    SET_DOGS(state, Dogslists) {
      state.Dogslists = Dogslists;
    },
    SEARCH_DOGS(state, BreadLists) {
      state.BreadLists = BreadLists;
    },
    returnResults: (state, Dogslists) => (state.Dogslists = Dogslists),
  },
  actions: {
    async fetchDogs({ commit }) {
      try {
        const data = await axios.get("https://dog.ceo/api/breed/hound/images");
        commit("SET_DOGS", data.data.message);
        console.log(data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async searchDogs({ commit }) {
      try {
        const data = await axios.get("https://dog.ceo/api/breed/hound/list");
        commit("SEARCH_DOGS", data.data.message);
        console.log(data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async getSearchResults({ commit }, query) {
      const res = await axios.get(
        `https://dog.ceo/api/breed/hound/images${query}`
      );
      // Execute the mutation which receive the data and pass to the state
      commit("returnResults", res.data.message);
    },
  },
  modules: {},
});
