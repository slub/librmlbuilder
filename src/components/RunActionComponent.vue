<template>
  <div>
    <h4>Abspielen</h4>
    <b-form-checkbox value="permission" v-model="run.permission" size="lg">Erlaubt</b-form-checkbox>
    <b-alert v-if="run.permission" show>Hier kommt eine Komponente hin!</b-alert>
  </div>
</template>
<script>
export default {
  name: 'RunActionComponent',
  props: {
    run: {}
  }
}
</script>