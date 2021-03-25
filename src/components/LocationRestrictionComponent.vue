<template>
  <div>
    <b-form-group label="Innerhalb geografischer Region">
      <div v-for="(inside, index) in insides" :key="index">
        <b-input-group class="mb-2">
          <b-form-input v-bind:id="'inside-' + index" v-model="inside.value" @blur="updateInside()"></b-form-input>
          <b-input-group-append is-text>
            <b-icon icon="x-circle-fill" @click="deleteInside(index)"></b-icon>
          </b-input-group-append>
        </b-input-group>
      </div>
      <b-button class="m-1" @click="addInside()">Region hinzufügen</b-button>
    </b-form-group>
    <b-form-group label="Außerhalb geografischer Region">
      <div v-for="(outside, index) in outsides" :key="index">
        <b-input-group class="mb-2">
          <b-form-input v-bind:id="'outside-' + index" v-model="outside.value" @blur="updateOutside()"></b-form-input>
          <b-input-group-append is-text>
            <b-icon icon="x-circle-fill" @click="deleteOutside(index)"></b-icon>
          </b-input-group-append>
        </b-input-group>
      </div>
      <b-button class="m-1" @click="addOutside()">Region hinzufügen</b-button>
    </b-form-group>
    <b-form-group label="Zulässiges Netzwerk">
      <div v-for="(network, index) in networks" :key="index">
        <b-input-group class="mb-2">
          <b-form-input v-bind:id="'network-' + index" v-model="network.value" @blur="updateNetwork()"></b-form-input>
          <b-input-group-append is-text>
            <b-icon icon="x-circle-fill" @click="deleteNetwork(index)"></b-icon>
          </b-input-group-append>
        </b-input-group>
      </div>
      <b-button class="m-1" @click="addNetwork()">Netzwerk hinzufügen</b-button>
    </b-form-group>
    <b-form-group label="Zulässige Maschine (Mac Adresse)">
      <div v-for="(machine, index) in machines" :key="index">
        <b-input-group class="mb-2">
          <b-form-input v-bind:id="'machine-' + index" v-model="machine.value" @blur="updateMachine()"></b-form-input>
          <b-input-group-append is-text>
            <b-icon icon="x-circle-fill" @click="deleteMachine(index)"></b-icon>
          </b-input-group-append>
        </b-input-group>
      </div>
      <b-button class="m-1" @click="addMachine()">Adresse hinzufügen</b-button>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "LocationRestrictionComponent",
  props: {
    restriction: {}
  },
  data() {
    return {
      insides: [],
      outsides: [],
      networks: [],
      machines: [],
    }
  },
  methods: {
    addInside() {
      this.insides.push({value: ''})
    },
    addOutside() {
      this.outsides.push({value: ''})
    },
    addNetwork() {
      this.networks.push({value: ''})
    },
    addMachine() {
      this.machines.push({value: ''})
    },
    updateInside() {
      this.restriction.inside = []
      for (let inside of this.insides) {
        this.restriction.inside.push(inside.value)
      }
    },
    updateOutside() {
      this.restriction.outside = []
      for (let outside of this.outsides) {
        this.restriction.outside.push(outside.value)
      }
    },
    updateNetwork() {
      this.restriction.networks = []
      for (let network of this.networks) {
        this.restriction.networks.push(network.value)
      }
    },
    updateMachine() {
      this.restriction.machine = []
      for (let machine of this.machines) {
        this.restriction.machine.push(machine.value)
      }
    },
    deleteInside(index) {
      this.$delete(this.insides, index)
      this.updateInside()
    },
    deleteOutside(index) {
      this.$delete(this.outsides, index)
      this.updateOutside()
    },
    deleteMachine(index) {
      this.$delete(this.machines, index)
      this.updateMachine()
    },
    deleteNetwork(index) {
      this.$delete(this.networks, index)
      this.updateNetwork()
    },
  }
}

</script>

<style scoped>

</style>