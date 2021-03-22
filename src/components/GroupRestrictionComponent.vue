<template>
  <b-form-group id="group-group" label="Nutzergruppen" label-for="group">
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