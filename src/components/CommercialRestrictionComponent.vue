<template>
<div>
  <b-form-checkbox v-model="restriction.commercialuse" name="commercialuse" switch>Kommerzielle Verwendung erlaubt</b-form-checkbox>
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