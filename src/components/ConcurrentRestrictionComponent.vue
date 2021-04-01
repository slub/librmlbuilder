<template>
  <div>
    <div class="float-right pb-1 pt-1">
      <b-icon id="concurrent-help" aria-label="Hilfe" icon="question-circle"></b-icon>
      <b-popover placement="right" target="concurrent-help" title="Gleichzeitige Ausführung"
                 triggers="hover focus">
        Die Anzahl der gleichzeitigen Ausführungen wird beschränkt. Zum Beispiel darf die Anwendung/Datenbank nur 3 mal
        gleichzeitig laufen. Oder das Werk darf nur einmal ausgeliehen sein.
      </b-popover>
    </div>
    <label label-for="concurrent">Gleichzeitige Ausführungen:</label>
    <b-input id="concurrent" v-model.number="restriction.sessions" min="1" type="number"></b-input>
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