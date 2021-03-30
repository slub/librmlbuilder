<template>
  <div class="border border-primary border-1px solid m-2 p-2 rounded">
    <h3>
      <b-icon class="pr-2" icon="x-circle" variant="danger" @click="deleteAction(index)"></b-icon>
      <b-icon v-b-modal="'copymodal-' + index" class="pr-2" icon="arrow-down-up"></b-icon>
      {{ actionName }}
      <div class="float-right small">
        <b-icon v-b-toggle='"action-" + index' icon="arrows-angle-contract"></b-icon>
      </div>
    </h3>
    <b-modal :id="'copymodal-' + index" cancel-title="Abbrechen" centered ok-title="Kopieren" title="Aktion kopieren"
             @hide="resetSelectedActions()" @ok="copySelectedActions()">
      <p size="small">Die Einschränkungen auf folgende Aktionen kopieren. Die Aktionen werden alle neu angelegt! Dabei
        verdoppeln sich evtl. bereits bestrehende Aktionen des gleichen Typs.</p>
      <b-form-checkbox-group v-model="selectedCopys" stacked>
        <b-form-checkbox v-for="(item, index) in actionOptions" :key="index" :value="item.value">{{
            item.text
          }}
        </b-form-checkbox>
      </b-form-checkbox-group>
    </b-modal>
    <b-collapse :id='"action-" + index' visible>
      <b-form-select v-model="action.type" :options="actionOptions"></b-form-select>
      <b-form-checkbox v-model="action.permission" size="lg" switch>Erlaubt</b-form-checkbox>
      <div v-if="action.permission" class="border-sm secondary m-2 p-2 rounded">
        <h4>Einschränkungen</h4>
        <div v-if="action.restrictions.length==0" class="bg-light rounded p-2 m-2">Keine Einschränkungen.</div>
        <RestrictionComponent v-for="(restriction, index) in action.restrictions" v-bind:id="'restriction-' + index"
                              :key="index"
                              :index="index" :restriction="restriction"></RestrictionComponent>
        <b-form-select v-model="selectedRestriction" :options="restrictionOptions"
                       @input="addRestriction(selectedRestriction)"></b-form-select>

      </div>
    </b-collapse>
  </div>
</template>

<script>
import {Action, Restriction} from "@/librml/librml";
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
        {value: 'meta', text: 'Metadaten anzeigen '},
        {value: 'read', text: 'Lesen/Anzeigen'},
        {value: 'run', text: 'Ausführen'},
        {value: 'lend', text: 'Leihen'},
        {value: 'download', text: 'Herunterladen'},
        {value: 'print', text: 'Drucken'},
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
        {value: 'quality', text: 'Qualität'},
        {value: 'watermark', text: 'Wasserzeichen'},
        {value: 'parts', text: 'Teile des Werkes'},
        {value: 'location', text: 'Ortsbeschränkung'},
      ],
      selectedRestriction: null,
      selectedCopys: [],
    }
  },
  methods: {
    addRestriction(res) {
      if (res)
        this.action.restrictions.push(new Restriction(res))
    },
    deleteAction(index) {
      this.$delete(this.$parent.librml.actions, index)
    },
    copySelectedActions() {
      let restrictions = JSON.stringify(this.action.restrictions)
      for (let action of this.selectedCopys) {
        let newAction = new Action(action);
        newAction.restrictions = JSON.parse(restrictions)
        newAction.permission = true
        this.$parent.librml.actions.push(newAction)
      }
    },
    resetSelectedActions() {
      this.selectedCopys = []
    }
  },
  computed: {
    actionName: function () {
      var ret = "Unspezifische Aktion / ungültig"
      var type = this.action.type
      var atext = this.actionOptions.filter(obj => {
        return obj.value == type;
      });
      if (atext.length > 0)
        ret = atext[0].text;
      return ret
    }
  }
}
</script>