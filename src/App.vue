<template>
  <div>

    <Memo />

    <input type="button" value="-" v-on:click="minus" />    
    {{count}}
    <input type="button" value="+" v-on:click="plus" />
    <input type="button" value="モーダルOpen" v-on:click="toogleModal" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Memo from './components/Memo.vue'
//import { mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Memo,
  },

  /*
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  */

  computed: mapState(['count']),

  /*
  computed: {
    ...mapState([ 'count' ]),
    ...mapState({ countNumber: 'count' })
  },
  */

  methods: {
    minus() {
      this.$store.commit('minus')
    },
    plus() {
      this.$store.commit('plus')
    },
    toogleModal() {
      this.setMemoId()
      this.$store.commit('toogleShowModal')
    },
    setMemoId() {
      this.$store.commit('setMemoId')
    }
  }

  //methods: mapMutations([ 'plus', 'minus' ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
