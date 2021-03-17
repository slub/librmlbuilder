<template>
  <div>
    <h4>Herunter laden</h4>
    <b-form-checkbox value="permission" v-model="download.permission" size="lg">Erlaubt</b-form-checkbox>
    <b-alert v-if="download.permission" show>Hier kommt eine Komponente hin!</b-alert>
  </div>
</template>
<script>
export default {
  name: 'DownloadActionComponent',
  props: {
    download: {}
  }
}
</script>