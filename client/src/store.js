import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: '',
    books: ''
  },
  mutations: {
    getAllBooksMutation (state, payload) {
      state.books = payload
    }
  },
  actions: {
    getAllBooks ({commit}) {
      axios.get('http://localhost:3000/books/list')
        .then((response) => {
          let data = response.data.data
          console.log(data)
          commit('getAllBooksMutation', data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
