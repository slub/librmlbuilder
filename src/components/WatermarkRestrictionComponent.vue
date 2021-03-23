<template>
<div>
  <label label-for="watermark">Wasserzeichen:</label>
  <b-input type="text" placeholder="URL oder Text" v-model.trim="restriction.watermarkvalue"></b-input>
</div>
</template>

<script>
export default {
  name: "WatermarkRestrictionComponent",
  props: {
    restriction: {}
  }
}
</script>

<style scoped>

</style>