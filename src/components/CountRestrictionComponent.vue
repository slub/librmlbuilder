<template>
  <div>
    <label label-for="count">Anzahl:</label>
    <b-input id="count" v-model.number="restriction.count" min="1" type="number"></b-input>
  </div>
</template>

<script>
export default {
  name: "CountRestrictionComponent",
  props: {
    restriction: {}
  }
}
</script>

<style scoped>

</style>