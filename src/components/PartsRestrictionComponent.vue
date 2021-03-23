<template>
  <b-form-group label="Teile">
    <div v-for="(party, index) in parts" :key="index">
      <b-input-group class="mb-2">
        <b-form-input v-bind:id="'part-' + index" v-model="party.value" @blur="updateParts()"></b-form-input>
        <b-input-group-append is-text>
          <b-icon icon="x-circle-fill" @click="deletePart(index)"></b-icon>
        </b-input-group-append>
      </b-input-group>
    </div>
    <b-button class="m-1" @click="addPart()">Teilbereich hinzufügen</b-button>
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