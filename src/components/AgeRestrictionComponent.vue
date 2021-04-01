<template>
  <div>
    <div class="float-right pb-1 pt-1">
      <b-icon id="age-help" aria-label="Hilfe" icon="question-circle"></b-icon>
      <b-popover placement="right" target="age-help" title="Einschränkung auf Nutzer eines bestimmten Alters."
                 triggers="hover focus">
        Die Benutzung der Resseource kann auf Nutzer mit einem bestimmten Mindestalter oder einem Höchstalter
        eingeschränkt werden.
      </b-popover>
    </div>
    <label label-for="minage">Mindestalter</label>
    <b-form-input id="minage" v-model.number="restriction.minage" min="0" type="number"></b-form-input>
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