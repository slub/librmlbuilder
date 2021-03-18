<template>
  <div class="border-primary m-2 p-2 rounded">
    <h6>{{ restriction.type }}</h6>
    <b-select v-model="restriction.type" :options="restrictionOptions"></b-select>
  </div>
</template>

<script>
export default {
  name: "RestrictionComponent",
  props: {
    restriction: {},
  },
  data() {
    return {
      restrictionOptions: [
        {value: 'date', text: "Zeitbeschränkung"},
        {value: 'age', text: "Altersbeschränkung"},
      ]
    }
  }
}
</script>

<style scoped>

</style>