<template>
  <div>
    <div class="float-right pb-1 pt-1">
      <b-icon id="location-help" aria-label="Hilfe" icon="question-circle"></b-icon>
      <b-popover placement="right" target="location-help" title="Geografische oder Institutionelle Beschränkung"
                 triggers="hover focus">
        Die Nutzung der Ressource auf eine benannte geografische Region einschränken. Dabei kann sowohl innenhalb als
        auch außerhalb definiert werden. Das könnte zum Beispiel "Deutschland" sein. Die identifizierung wird durch das
        Präsentationssystem ausgewertet.<br>
        Ebenso kann die Nutzung auf Netzwerke oder Maschinen begrenzt werden. Subnetze identifizieren zum Beispiel eine
        Instutition oder eine MAC-Adresse eine genau spezifizierte Maschine auf der die Ressource genutzt werden kann.
      </b-popover>
    </div>
    <label label-for="inside">Innerhalb einer Region:</label>
    <b-input id="inside" v-model.trim="restriction.inside" type="text"></b-input>
    <label label-for="outside">Außerhalb einer Region:</label>
    <b-input id="outside" v-model.trim="restriction.outside" type="text"></b-input>
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
      inside: '',
      outside: '',
      networks: [],
      machines: [],
    }
  },
  methods: {
    addNetwork() {
      this.networks.push({value: ''})
    },
    addMachine() {
      this.machines.push({value: ''})
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