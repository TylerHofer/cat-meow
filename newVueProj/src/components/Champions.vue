<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Data
    <div v-for="champion in champions" :key="champion.id">
      <h3>Name: {{ champion.name }}</h3>
    <hr>
    <h4>Attack Damage: {{ champion.championName }}</h4>
    </div>
    <button @click="getChampions"> Get Champions </button>
    <button @click="getChampionByName"> Get Champion By Name </button>
    <hr>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Champions',
  data () {
    return {
      msg: 'Champs Elysee',
      champions: []
    }
  },
  methods: {
    async getChampions () {
      try {
        const res = await axios.post(
          'http://localhost:4000/graphql', {
            query: `{
              getChampions {
               name
               attackDamage
             }
           }`
          })
        this.champions = res.data.data
      } catch (e) {
        console.log('err', e)
      }
    },
    async getChampionByName () {
      const res = await axios.post('http://localhost:4000/graphql', {
        query: `
        query GetChampionByName($championName: String!) {
        getChampionByName(name: $championName) {
          name
          attackDamage
        }
      }`,
        variables: {
          championName: 'Ashe'
        }
      })
      this.champions = res.data.data.getChampionByName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
