<template>
  <b-form-group id="group-group" label="Nutzergruppen" label-for="group">
    <div class="float-right pb-1 pt-1">
      <b-icon id="group-help" aria-label="Hilfe" icon="question-circle"></b-icon>
      <b-popover placement="right" target="group-help" title="Personen oder Gruppen"
                 triggers="hover focus">
        Die Aktion wird auf identifierbare Personen oder Gruppen eingeschränkt. Dies können zum Beispiel Gruppen sein,
        die durch Shibboleth identifiert sind oder durch eine andere Methode dem Präsentationssystem bekannt sind.<br>
        Beispiele wären: registered, employee
      </b-popover>
    </div>
    <div v-for="(group, index) in groups" :key="index">
      <b-input-group class="mb-2">
        <b-form-input v-bind:id="'group-' + index" v-model="group.value" @blur="updateGroups()"></b-form-input>
        <b-input-group-append is-text>
          <b-icon icon="x-circle-fill" @click="deleteGroup(index)"></b-icon>
        </b-input-group-append>
      </b-input-group>
    </div>
    <b-button class="m-1" @click="addGroup()">Nutzergruppe hinzufügen</b-button>
  </b-form-group>
</template>

<script>
export default {
  name: "GroupRestrictionComponent",
  props: {
    restriction: {}
  },
  data() {
    return {
      groups: []
    }
  },
  methods: {
    addGroup() {
      this.groups.push({value: ''})
    },
    deleteGroup(index) {
      this.$delete(this.groups, index)
      this.updateGroups()
    },
    updateGroups() {
      this.restriction.groups = []
      for (let group of this.groups) {
        this.restriction.groups.push(group.value)
      }
    }
  }
}
</script>

<style scoped>

</style>