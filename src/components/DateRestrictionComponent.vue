<template>
  <div>
    <div class="float-right pb-1 pt-1">
      <b-icon id="date-help" aria-label="Hilfe" icon="question-circle"></b-icon>
      <b-popover placement="right" target="date-help" title="Einschränkung auf einen Zeitpunkt (Embargo)"
                 triggers="hover focus">
        Die Nutzung der Ressource ist ab einem bestimmten Zeitpunkt zugelassen. Ebenso/oder ab einem bestimmten Zeitpunkt.
        [Erklärung wie 2x Lesen bis und ab sich ergänzen]
      </b-popover>
    </div>
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