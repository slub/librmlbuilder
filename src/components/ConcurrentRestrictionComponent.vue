<template>
  <div>
    <label label-for="concurrent">Gleichzeitige Ausführungen:</label>
    <b-input id="concurrent" v-model.number="restriction.concurrent" type="number" min="1"></b-input>
  </div>
</template>

<script>
export default {
  name: "ConcurrentRestrictionComponent",
  props: {
    restriction: {}
  }
}
</script>

<style scoped>

</style>