<template>
  <div>
    <label label-for="minage">Mindestalter</label>
    <b-form-input id="minage" v-model.number="restriction.minage" type="number" min="0"></b-form-input>
    <label label-for="maxage">Höchstalter</label>
    <b-form-input id="maxage" v-model.number="restriction.maxage" type="number"></b-form-input>
  </div>
</template>

<script>
export default {
  name: "AgeRestrictionComponent",
  props: {
    restriction: {}
  }
}
</script>

<style scoped>

</style>