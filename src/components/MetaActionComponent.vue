<template>
  <div class="shadow-sm p-3 m-2 mb-5 bg-white rounded">
    <h3>Metadaten anzeigen</h3>
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