<template>
  <div class="border border-dark solid mt-1 mb-1 p-2 rounded">
    <h3>
      <b-icon v-b-tooltip.hover="'Nutzungsrecht löschen'" class="pr-2" icon="x-circle" variant="danger"
              @click="deleteAction(index)"></b-icon>
      <b-icon v-b-modal="'copymodal-' + index" v-b-tooltip.hover="'Nutzungsrechte kopieren'" class="pr-2"
              icon="stickies"></b-icon>
      {{ actionName }}
      <div class="float-right small">
        <b-icon v-b-toggle='"action-" + index' v-b-tooltip.hover="'Nutzungsrecht verkleinern oder vergrößern'"
                v-b-tooltip.hover.html icon="chevron-bar-contract"></b-icon>
      </div>
    </h3>
    <b-modal :id="'copymodal-' + index" cancel-title="Abbrechen" centered ok-title="Kopieren"
             title="Nutzungsrecht kopieren"
             @hide="resetSelectedActions()" @ok="copySelectedActions()">
      <p size="small">Die Einschränkungen auf folgende Nutzungsrechte kopieren. Die Nutzungsrechte werden alle neu
        angelegt. Dabei
        verdoppeln sich evtl. bereits bestehende Nutzungsrechte des gleichen Typs.</p>
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
      <div v-if="action.permission" class="border-sm secondary p-2 rounded">
        <h4>Einschränkungen</h4>
        <div v-if="action.restrictions && action.restrictions.length==0" class="bg-light rounded p-2 m-2">Keine
          Einschränkungen.
        </div>
        <RestrictionComponent v-for="(restriction, rindex) in action.restrictions"
                              :id="'restriction-' + index + '-' + rindex"
                              :key="100* index + rindex" :restriction="restriction"
                              :rindex="100* index + rindex" :resid="rindex"></RestrictionComponent>
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
      selectedRestriction: null,
      selectedCopys: [],
    }
  },
  methods: {
    addRestriction(res) {
      if (res && res !== '') {
        this.action.restrictions.push(new Restriction(res))
      }
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
      let ret = "Nutzungsrecht auswählen"
      let type = this.action.type
      let atext = this.$store.getters.getAction(type)
      if (atext)
        ret = atext.text
      return ret
    },
    actionOptions: function () {
      return this.$store.getters.getActions
    },
    restrictionOptions: function () {
      return this.$store.getters.getRestrictions
    }
  },
  mounted() {
    if (!this.action.restrictions)
      this.action.restrictions = []
  }
}
</script>