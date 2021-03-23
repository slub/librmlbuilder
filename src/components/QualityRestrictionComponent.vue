<template>
  <div>
    <b-input-group append="dpi" prepend="Auflösung" class="pb-1">
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