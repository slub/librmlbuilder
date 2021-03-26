<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <b-navbar type="dark" variant="dark">
          <b-navbar-brand>
            <img alt="SLUB Logo" src="./assets/slublogo.png"/>
            LibRML Builder
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item class="nav-link" href="https://slub.github.io/librml/" target="_blank">
                Über LibRML
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
          <b-navbar-nav class="ml-auto p-1">
            <b-dropdown id="loadlocal" text="LibRMLs laden">
              <b-dropdown-item v-for="(item, index) in this.persistedLibRMLs" :key="index" @click="loadLocal(index)">
                {{ item.name }}
              </b-dropdown-item>
            </b-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto p-1">
            <b-button @click="loadNew()">Neues LibRML starten!</b-button>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto p-1">
            <b-button v-b-modal.json-input>JSON ein-/ausgeben</b-button>
            <b-modal id="json-input" centered ok-only scrollable title="JSON Quelltext:">
              <b-form-textarea id="json-input-field" v-model.lazy="librmlText" max-rows="20" rows="10" size="sm">
              </b-form-textarea>
            </b-modal>
          </b-navbar-nav>
        </b-navbar>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <div class="border border-primary border-1px solid m-2 p-2 rounded">
          <b-form>
            <h3>Angaben zum Objekt</h3>
            <b-form-group>
              <b-input-group id="id-group" description="Die eindeutige ID des Objektes" label="ID" label-for="id-input">
                <b-form-input id="id-input" v-model="librml.id" placeholder="1234567890-abd" required></b-form-input>
                <b-input-group-append is-text>
                  <b-icon icon="file-arrow-down-fill" @click="saveLocal()"></b-icon>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
            <b-form-group id="otherid-group" label="Andere IDs" label-for="oid">
              <div v-for="(oid, index) in this.otherids" :key="index">
                <b-input-group class="mb-2">
                  <b-form-input v-bind:id="'oid-' + index" v-model="oid.value" @change="updateOids()"></b-form-input>
                  <b-input-group-append is-text>
                    <b-icon icon="x-circle-fill" @click="deleteOID(index)"></b-icon>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <b-button class="m-1" @click="addOID()">Andere ID hinzufügen</b-button>
            </b-form-group>
            <b-form-group id="tenant-group"
                          description="Verwalter des Objektes, hier die ID der Institution, auf die die Nutzungsrechte angewandt werden können."
                          label="Verwalter"
                          label-for="tenant-input">
              <b-form-input id="tenant-input" v-model="librml.tenant" placeholder="http://slub-dresden.de"
                            required></b-form-input>
            </b-form-group>
            <b-form-group id="guide-group"
                          description="Nutzungshinweise. Eine URL zu allgemeinen Hinweisen zur Nutzung von Objekten."
                          label="Nutzungshinweise"
                          label-for="guide-input">
              <b-form-input id="guide-input" v-model="librml.usageguide" placeholder="http://slub-dresden.de/usage"
                            required></b-form-input>
            </b-form-group>
            <b-form-checkbox v-model="librml.mention">Namensnennung</b-form-checkbox>
            <b-form-checkbox v-model="librml.sharealike">Weitergabe unter gleichen Bedingungen</b-form-checkbox>
            <b-form-checkbox v-model="librml.copyright">Urheberrechte</b-form-checkbox>
          </b-form>
          <ActionComponent v-for="(action, index) in librml.actions" :key="index" :action="action"
                           :index="index"></ActionComponent>
          <div class=" m-2 p-3">
            <b-button type="button" @click="addAction()">Aktion hinzufügen</b-button>
          </div>
        </div>

      </b-col>
      <b-col cols="6">
        <vue-json-pretty :data=this.librml></vue-json-pretty>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import 'vue-json-pretty/lib/styles.css'
import {Action, LibRML} from "@/librml/librml";
import ActionComponent from "@/components/ActionComponent";
import VueJsonPretty from 'vue-json-pretty'

export default {
  data() {
    return {
      librml: new LibRML(),
      librmlText: '',
      otherids: [],
      metarights: [],
      persistedLibRMLs: [],
    }
  },
  methods: {
    updateOids() {
      this.librml.relatedids = []
      for (let oid of this.otherids) {
        this.librml.relatedids.push(oid.value)
      }
    },
    addAction() {
      this.librml.actions.push(new Action())
    },
    loadNew() {
      this.librml = new LibRML()
      this.updateRIDs()
    },
    addOID() {
      this.otherids.push({value: ''})
    },
    deleteOID(index) {
      this.$delete(this.otherids, index)
      this.updateOids()
    },
    updateRIDs() {
      this.otherids = []
      for (let rid of this.librml.relatedids) {
        this.otherids.push({value: rid});
      }
    },
    saveLocal() {
      this.persistedLibRMLs.push({name: this.librml.id, librml: this.librml})
      localStorage.setItem('persistedLibRMLs', JSON.stringify(this.persistedLibRMLs))
    },
    loadLocal(index) {
      this.librml = this.persistedLibRMLs[index].librml
      this.updateRIDs()
    }
  },
  name: 'App',
  components: {
    ActionComponent,
    VueJsonPretty
  },
  mounted() {
    if (localStorage.getItem('persistedLibRMLs')) {
      this.persistedLibRMLs = JSON.parse(localStorage.getItem('persistedLibRMLs'))
    }
    this.librmlText = JSON.stringify(this.librml, null, 2)
  },
  watch: {
    librmlText: function (newValue) {
      try {
        let newLibRML = JSON.parse(newValue);
        this.librml = newLibRML;
      } catch (err) {
        console.log("seems to be invalid json: " + err);
      }
    },
    librml: function (newValue) {
      this.librmlText = JSON.stringify(newValue, null, 2)
    }
  }
}
</script>