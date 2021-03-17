<template>
  <div>
    <h4>Metadaten anzeigen</h4>
    <b-form-checkbox value="permission" v-model="dispalymeta.permission" size="lg">Erlaubt</b-form-checkbox>
    <div v-if="dispalymeta.permission" class="alert">Hier kommt eine Komponente hin!</div>
  </div>
</template>
<script>
export default {
  name: 'MetaActionComponent',
  props: {
    dispalymeta: {}
  }
}
</script>