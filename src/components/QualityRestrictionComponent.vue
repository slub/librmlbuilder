<template>
  <div>
    <div class="float-right pb-1 pt-1">
      <b-icon id="quality-help" aria-label="Hilfe" icon="question-circle"></b-icon>
      <b-popover placement="right" target="quality-help" title="Beschränkung der Qualität"
                 triggers="hover focus">
        Die Ressource wird mit einer maximalen Qualität zur Nutzung bereit gestellt. Dies kann als Beispiel eine
        Limitierung der Auflösung eines Bildes oder die Qualität der Codierung bei Musikstücken sein.
      </b-popover>
    </div>
    <b-input-group append="dpi" class="pb-1" prepend="Auflösung">
      <b-input v-model.number="restriction.maxresolution" type="number"></b-input>
    </b-input-group>
    <b-input-group append="bit/s" prepend="Bitrate">
      <b-input v-model.number="restriction.maxbitrate" type="number"></b-input>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "QualityRestrictionComponent",
  props: {
    restriction: {}
  }
}
</script>

<style scoped>

</style>