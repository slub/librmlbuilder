<template>
  <div>
    <div class="float-right pb-1 pt-1">
      <b-icon id="date-help" aria-label="Hilfe" icon="question-circle"></b-icon>
      <b-popover placement="right" target="date-help" title="Einschränkung auf einen Zeitpunkt (Embargo)"
                 triggers="hover focus">
        Die Nutzung der Ressource ist ab einem bestimmten Zeitpunkt zugelassen. Ebenso/oder ab einem bestimmten
        Zeitpunkt.
        [Erklärung wie 2x Lesen bis und ab sich ergänzen]
      </b-popover>
    </div>
    <label :label-for="'todate-'+rindex">Datum bis zu dem diese Einschränkung gilt:</label>
    <b-form-datepicker :id="'todate-'+rindex" v-model="restriction.todate" v-bind="labels['de'] || {}" :locale="de"
                       :start-weekday="1"></b-form-datepicker>
    <label :label-for="'fromdate-'+rindex">Datum ab dem diese Einschränkung gilt:</label>
    <b-form-datepicker :id="'fromdate-'+rindex" v-model="restriction.fromdate" v-bind="labels['de'] || {}" :locale="de"
                       :start-weekday="1"></b-form-datepicker>
  </div>
</template>

<script>
export default {
  name: "DateRestrictionComponent",
  props: {
    restriction: {},
    rindex: {},
  },
  data() {
    return {
      labels: {
        de: {
          labelPrevDecade: 'Vorheriges Jahrzehnt',
          labelPrevYear: 'Vorheriges Jahr',
          labelPrevMonth: 'Vorheriger Monat',
          labelCurrentMonth: 'Aktueller Monat',
          labelNextMonth: 'Nächster Monat',
          labelNextYear: 'Nächstes Jahr',
          labelNextDecade: 'Nächstes Jahrzehnt',
          labelToday: 'Heute',
          labelSelected: 'Ausgewähltes Datum',
          labelNoDateSelected: 'Kein Datum gewählt',
          labelCalendar: 'Kalender',
          labelNav: 'Kalendernavigation',
          labelHelp: 'Mit den Pfeiltasten durch den Kalender navigieren'
        },
      }
    }
  }
}
</script>

<style scoped>

</style>