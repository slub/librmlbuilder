<template>
  <div>
    <label label-for="todate">Datum bis zu dem diese Einschränkung gilt:</label>
    <b-form-datepicker id="todate" v-model="restriction.todate"></b-form-datepicker>
    <label label-for="fromdate">Datum ab dem diese Einschränkung gilt:</label>
    <b-form-datepicker id="fromdate" v-model="restriction.fromdate"></b-form-datepicker>
  </div>
</template>

<script>
export default {
  name: "DateRestrictionComponent",
  props: {
    restriction: {}
  }
}
</script>

<style scoped>

</style>