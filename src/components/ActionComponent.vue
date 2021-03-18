<template>
  <div class="shadow-sm m-2 p-3 mb-5 bg-white rounded">
    <h3>{{ action.type }}</h3>
    <b-form-select v-model="action.type" :options="actionOptions"></b-form-select>
    <b-form-checkbox v-model="action.permission" size="lg">Erlaubt</b-form-checkbox>
    <div class="border-sm secondary m-2 p-2 rounded" v-if="action.permission">
      <h4>Einschränkungen</h4>
      <div v-if="action.restrictions.length==0" class="bg-light rounded p-2 m-2">Keine Einschränkungen.</div>
      <RestrictionComponent v-for="restriction in action.restrictions" :restriction=restriction :key="restriction.type"></RestrictionComponent>
      <b-button type="button" @click="addRestriction()">Einschränkug hinzufügen</b-button>
    </div>
  </div>
</template>

<script>
import {Restriction} from "@/librml/librml";
import RestrictionComponent from "@/components/RestrictionComponent";

export default {
  name: 'ActionComponent',
  components: {RestrictionComponent},
  props: {
    action: {}
  },
  data () {
    return {
      actionOptions: [
        {value: 'meta', text: 'Metadaten anzeigen '},
        {value: 'read', text: 'Lesen/Anzeigen'},
        {value: 'run', text: 'Ausführen'},
        {value: 'lend', text: 'Leihen'},
        {value: 'download', text: 'Herunterladen'},
        {value: 'reproduce', text: 'Reproduzieren'},
        {value: 'modify', text: 'Ändern'},
        {value: 'reuse', text: 'Wiederverwenden'},
        {value: 'distribute', text: 'Verteilen'},
        {value: 'publish', text: 'Veröffentlichen'},
        {value: 'archive', text: 'Archivieren'},
        {value: 'index', text: 'In den Katalog aufnehmen'},
        {value: 'move', text: 'In Datenbanken bewegen'},
      ]
    }
  },
  methods: {
    addRestriction() {
      this.action.restrictions.push(new Restriction())
    }
  }
}
</script>