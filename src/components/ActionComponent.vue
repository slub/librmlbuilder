<template>
  <div class="border border-primary border-1px solid m-2 p-2 rounded">
    <h3>
      <b-icon icon="x-circle-fill" @click="deleteAction(index)"></b-icon>
      {{ action.type }}
    </h3>
    <b-form-select v-model="action.type" :options="actionOptions"></b-form-select>
    <b-form-checkbox v-model="action.permission" size="lg">Erlaubt</b-form-checkbox>
    <div v-if="action.permission" class="border-sm secondary m-2 p-2 rounded">
      <h4>Einschränkungen</h4>
      <div v-if="action.restrictions.length==0" class="bg-light rounded p-2 m-2">Keine Einschränkungen.</div>
      <RestrictionComponent v-for="(restriction, index) in action.restrictions" v-bind:id="'restriction-' + index"
                            :key="index"
                            :index="index" :restriction="restriction"></RestrictionComponent>
      <b-form-select v-model="selectedRestriction" :options="restrictionOptions"
                     @input="addRestriction(selectedRestriction)"></b-form-select>
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
    action: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      actionOptions: [
        {value: null, text: 'Aktion auswählen'},
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
      ],
      restrictionOptions: [
        {value: null, text: 'Eine neue Einschränkung hinzufügen'},
        {value: 'date', text: 'Zeit'},
        {value: 'age', text: 'Alter'},
        {value: 'duration', text: 'Dauer'},
        {value: 'count', text: 'Anzahl'},
        {value: 'concurrent', text: 'Gleichzeitige Ausführung'},
        {value: 'commercialuse', text: 'Kommerzielle Verwendung'},
        {value: 'agreement', text: 'Spezielle Zustimmung'},
        {value: 'group', text: 'Nutzergruppe'},
      ],
      selectedRestriction: null,
    }
  },
  methods: {
    addRestriction(res) {
      if (res)
        this.action.restrictions.push(new Restriction(res))
    },
    deleteAction(index) {
      this.$delete(this.$parent.librml.actions, index)
    }
  }
}
</script>