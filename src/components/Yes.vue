<template>
  <div>
    <input type="button" value="click" />
    <input type="button" value="+" @click="incre()"/>
    {{this.$store.state.count}}
  </div>
</template>

<script>
console.log(this.$store);
export default {
  data() {
    return {
      // value: this.$store.state.count
    }
  },
  methods: {
    incre() {
      console.log(this.$store);
      return this.$store.dispatch('increAction')
    }
  }
}
</script>

<style>

</style>
