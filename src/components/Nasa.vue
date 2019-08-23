<template>
  <div class="search">
    <h1>API Component</h1>
    <h2>Type In Your Search Term</h2>
    <form v-on:submit.prevent="getImage(query)">
      <input type="text" placeholder="Search" v-model="query"/>
    </form>

    <div class="results" v-if="returnResults">
        <div v-for="returnResult in returnResults"  v-bind:key="returnResult">
            <img v-bind:src="returnResult.links[0].href"/>
        </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'search',
  data(){
    return{
      msg: 'Search',
      query: ''
    }
  },
  computed: {
    ...mapGetters([
      'returnResults'
    ]),
  },
  methods:{
      ...mapMutations([
      'SET_SEARCH'
    ]),
    getImage(query){
      this.SET_SEARCH(this.query)
    }
  }
}

</script>

<style scoped>
.results img {
    height: 300px;
    margin: 10px;
}

</style>
