<template>
  <div>
    <label label-for="minage">Mindestalter</label>
    <b-form-input id="minage" v-model="restriction.minage" type="number"></b-form-input>
    <label label-for="maxage">Höchstalter</label>
    <b-form-input id="maxage" v-model="restriction.maxage" type="number"></b-form-input>
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