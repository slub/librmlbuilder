<template>
  <div class="border border-primary rounded">
    <h4>Drucken</h4>
    <b-form-checkbox value="permission" v-model="print.permission" size="lg">Erlaubt</b-form-checkbox>
    <b-alert v-if="print.permission" show>Hier kommt eine Komponente hin!</b-alert>
  </div>
</template>
<script>
export default {
  name: 'PrintActionComponent',
  props: {
    print: {}
  }
}
</script>