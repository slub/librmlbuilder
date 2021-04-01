<template>
  <div>
    <div class="float-right pb-1 pt-1">
      <b-icon id="agreement-help" aria-label="Hilfe" icon="question-circle"></b-icon>
      <b-popover placement="right" target="agreement-help" title="Zustimmung zu einem Vertrag oder Nutzungsbedingungen"
                 triggers="hover focus">
        Die Benutzung des Werkes setzt die Zustimmung zu speziellen Nutzungsbedingungen oder zu einen Vertrag voraus.
        Dies können zum Beispiel ein Geheimhaltungsabkommen oder Geschäftsbedingungen sein.
      </b-popover>
    </div>
    <b-form-checkbox v-model="restriction.required" name="agreement" switch>Spezielles Agreement erforderlich
    </b-form-checkbox>
  </div>
</template>

<script>
export default {
  name: "AgreementRestrictionComponent",
  props: {
    restriction: {}
  }
}
</script>

<style scoped>

</style>