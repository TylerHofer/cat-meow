<template>
  <div id="app">
    <h3>Hello World</h3>
    <div>
      Data: {{ example1 }}
    </div>
    <button @click="getLanguage">Get Language</button>
    <hr>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      example1: ''
    }
  },
  methods: {
    async getLanguage () {
      try {
        const res = await axios.post(
          'http://localhost:4000/graphql', {
            query: '{ language }'
          })
        this.example1 = res.data.data.language
      } catch (e) {
        console.log('err', e)
      }
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
