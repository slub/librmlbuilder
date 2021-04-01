<template>
  <div>
    <div class="float-right pb-1 pt-1">
      <b-icon id="watermark-help" aria-label="Hilfe" icon="question-circle"></b-icon>
      <b-popover placement="right" target="watermark-help" title="Kennzeichnung der Ressource"
                 triggers="hover focus">
        Die Aktion darf auf der Ressource ausgeführt werden, dabei muss die Ressource aber mit einer Kennzeichnung
        versehen werden. Als Beispiel ein Wasserzeichen über einem Bild. Die Angabe wird vom Präsentationssystem
        verarbeitet und kann einen Text oder eine URL enthalten.
      </b-popover>
    </div>
    <label label-for="watermark">Wasserzeichen:</label>
    <b-input v-model.trim="restriction.watermarkvalue" placeholder="URL oder Text" type="text"></b-input>
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