<template>
    <div>
        <modal v-if="showModal" @close="showModal = false">
          <h3 slot="header">custom header</h3>
          <div slot="body">
            <p class="red">{{ getMemoById() }}</p>
          </div>
          <h3 slot="footer">
            custom footer
          </h3>
        </modal>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'memo',
  data () {
    return {
      firstName: 'Foo',
      lastName: 'Bar'
    }
  },
  computed: {
    ...mapState(['showModal', 'memoId']),
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    getMemoById() {
        // return this.$store.state.memoId
        return this.memoId
    }
  }
}
</script>
<style>
.red {
    color: red;
}
</style>
