import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'vue-player App',
    links: [
      'https://www.youtube.com/channel/UCeJUVLHMdWHNklmkki7ApLg',
      'https://www.linkedin.com/in/jakegcunningham/',
      'https://jakegcunningham.wordpress.com/'
    ],

    search: '',
    results: ''
  },
  getters:{
    countLinks: state =>{
      return state.links.length
    },
    returnResults: state=>{
      return state.results
    }
  },
  mutations: {
    ADD_LINK: (state, link)=>{
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) =>{
      state.links.splice(link, 1)
    },
    REMOVE_ALL: (state) =>{
      state.links = []
    },
    SET_SEARCH:(state, query) =>{
      state.search = query
      axios.get('https://images-api.nasa.gov/search?q=' + state.search + '&media_type=image').then(response =>{
        state.results = response.data.collection.items
      })
    }
  },
  actions: {
    removeLink: (context, link) => {
      context.commit("REMOVE_LINK", link)
    },
    removeAll({commit}){
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }

  }
})
