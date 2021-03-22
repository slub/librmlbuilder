<template>
<div>
  <b-form-checkbox v-model="restriction.required" name="agreement" switch>Spezielles Agreement erforderlich</b-form-checkbox>
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