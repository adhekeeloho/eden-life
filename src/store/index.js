import { createStore } from 'vuex'

export default createStore({
  state: {
    movies: [
      {
        id: 1,
        title: "red",
        completed: false,
        description: "This is an about page",
      },
      {
        id: 2,
        title: "blue",
        completed: false,
        description: "This is not what you think",
      },
    ],

  },
  getters: {
  },
  mutations: {
    
  },
  actions: {
  
  },
  modules: {},
});
