<template>
  <div>
    <div class="float-right pb-1 pt-1">
      <b-icon id="count-help" aria-label="Hilfe" icon="question-circle"></b-icon>
      <b-popover placement="right" target="count-help" title="Anzahl der Aktionen"
                 triggers="hover focus">
        Die maximal zulässige Anzahl der Durchführung Aktion die auf der Ressource wird beschränkt.
      </b-popover>
    </div>
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