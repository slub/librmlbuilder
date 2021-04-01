<template>
  <div>
    <div class="float-right pb-1 pt-1">
      <b-icon id="commercial-help" aria-label="Hilfe" icon="question-circle"></b-icon>
      <b-popover placement="right" target="commercial-help" title="Kommerzielle Nutzung"
                 triggers="hover focus">
        Das Werk kann im Zusammenhang mit der erlaubten Nutzung auch kommerziell benutzt werden. Als Beispiel kann ein
        Bild im Zusammenhang mit einer kommerziellen Webseite oder Applikation genutzt werden.
      </b-popover>
    </div>
    <b-form-checkbox v-model="restriction.commercialuse" name="commercialuse" switch>Kommerzielle Verwendung erlaubt
    </b-form-checkbox>
  </div>
</template>

<script>
export default {
  name: "CommercialRestrictionComponent",
  props: {
    restriction: {}
  }
}
</script>

<style scoped>

</style>