<template>
  <div>
    <h4>Ausliehen</h4>
    <b-form-checkbox value="permission" v-model="lend.permission" size="lg">Erlaubt</b-form-checkbox>
    <b-alert v-if="lend.permission" show>Hier kommt eine Komponente hin!</b-alert>
  </div>
</template>
<script>
export default {
  name: 'LendActionComponent',
  props: {
    lend: {}
  }
}
</script>