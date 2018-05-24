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
    },
    deleteBookMutation (state, payload) {
      state.books.splice(payload.index, 1)
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
    },
    deleteBook ({commit}, payload) {
      axios.delete(`http://localhost:3000/books/hapus/${payload.id}`)
        .then((response) => {
          commit('deleteBookMutation', payload)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
