<template>
  <div>
    <div class="float-right pb-1 pt-1">
      <b-icon id="duration-help" aria-label="Hilfe" icon="question-circle"></b-icon>
      <b-popover placement="right" target="duration-help" title="Ausführungsdauer"
                 triggers="hover focus">
        Das Nutzungsrecht wird in der Dauer der Anwendung auf der Ressource beschränkt. Die Angabe erfolgt technisch in
        Sekunden.
      </b-popover>
    </div>
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