<template>
  <div class="shadow p-3 mb-5 bg-white rounded">
    <h4>Anzeigen</h4>
    <b-form-checkbox value="permission" v-model="read.permission" size="lg">Erlaubt</b-form-checkbox>
    <div v-if="read.permission" class="alert">Hier kommt eine Komponente hin!</div>
  </div>
</template>
<script>
export default {
  name: 'ReadActionComponent',
  props: {
    read: {}
  }
}
</script>