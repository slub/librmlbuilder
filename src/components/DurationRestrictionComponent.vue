<template>
  <div>
    <label label-for="duration">Sekunden:</label>
    <b-input id="duration" v-model.number="restriction.duration" min="1" type="number"></b-input>
  </div>
</template>

<script>
export default {
  name: "DurationRestrictionComponent",
  props: {
    restriction: {}
  }
}
</script>

<style scoped>

</style>