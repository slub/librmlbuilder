<template>
  <b-form-group label="Benannte Teile der Ressource">
    <div class="float-right pb-1 pt-1">
      <b-icon id="parts-help" aria-label="Hilfe" icon="question-circle"></b-icon>
      <b-popover placement="right" target="parts-help" title="Benannte Teile der Ressource"
                 triggers="hover focus">
        Benannte Teile der Ressource auf die das Nutzungsrecht eingeschränkt werden kann. Beispiele dafür sind: Seiten einer Publikation.<br>
        Diese Teile des Werkes müssen vom Präsentationssystem identifierbar sein.
      </b-popover>
    </div>
    <div v-for="(part, index) in parts" :key="index">
      <b-input-group class="mb-2">
        <b-form-input v-bind:id="'part-' + index" v-model.trim="part.value" @blur="updateParts()"></b-form-input>
        <b-input-group-append is-text>
          <b-icon icon="x-circle-fill" @click="deletePart(index)"></b-icon>
        </b-input-group-append>
      </b-input-group>
    </div>
    <b-button class="m-1" @click="addPart()">Teil der Ressource hinzufügen</b-button>
  </b-form-group>
</template>

<script>
export default {
  name: "PartsRestrictionComponent",
  data() {
    return {
      parts: [],
    }
  },
  props: {
    restriction: {}
  },
  methods: {
    addPart() {
      this.parts.push({value: ''})
    },
    deletePart(index) {
      this.$delete(this.parts, index)
      this.updateParts()
    },
    updateParts() {
      this.restriction.parts = []
      for (let part of this.parts) {
        this.restriction.parts.push(part.value)
      }
    }
  }
}
</script>

<style scoped>

</style>