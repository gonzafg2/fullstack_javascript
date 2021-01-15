<template>
  <div class="hello container">
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from 'axios';

export default Vue.extend({
  name: "HelloWorld",
  data() {
    return {
      // items: [
      //   { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
      //   { age: 21, first_name: "Larsen", last_name: "Shaw" },
      //   { age: 89, first_name: "Geneva", last_name: "Wilson" },
      //   { age: 38, first_name: "Jami", last_name: "Carney" },
      // ],
      items: []
    };
  },
  created () {
    this.getData();
  },
  methods: {
    async getData(): Promise<void> {
      const url = "http://localhost:3001/testers";
      try {
        const db = await axios.get(url);
        const data = db.data;
        this.items = data;
        // console.log(data);
        
      } catch (error) {
        console.log(error);
      }
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
