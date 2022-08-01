import { createStore } from 'vuex'
import  axios  from 'axios';

export default createStore({
  state: {
    Dogslists: [],
    BreadLists: [],
    isloading:false
  },
  getters: {

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
        this.state.isloading = true;
        const data = await axios.get("https://dog.ceo/api/breed/hound/images");
        commit("SET_DOGS", data.data.message);
        console.log(data);
      } catch (error) {
        alert(error);
        console.log(error);
      } finally{
        this.state.isloading = false;
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
  },
  modules: {},
});
