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
              <b-nav-item v-b-modal.aboutinfo class="nav-link" href="#">
                Über LibRML-Builder
              </b-nav-item>
            </b-navbar-nav>
            <b-modal id="aboutinfo" button-size="sm" centered ok-only ok-title="Verstanden!"
                     title="Über LibRML-Builder">
              <p class="my-2">Dieser LibRML-Builder ist eine frühe Version einer Oberfläche um LibRML-Objekte zu
                erstellen
                und einen visuellen Eindruck von den Lizenzbedingungen und Nutzungsrechten zu bekommen.</p>
              <p class="my-2">Da sehr viel an dieser kleinen Anwendung gebaut wird, können Fehler auftreten
                und Funktionen nicht implementiert sein.</p>
              <p class="my-2">Ein bekannter Fehler betrifft Einschränkungen mit Arrays. Zum Beispiel Gruppen, Netzwerke
                etc. Wenn der Inhalt der Arrys verändert wird oder Elemente gelöscht oder hinzugefügt werden, sieht man
                das nicht sofort im JSON.</p>
              <p class="my-2">Es handelt sich hier um eine OpenSource Anwendung die bei GitHub verfügbar ist. Feedback
                und Fehler Berichte sind dort willkommen.</p>
              <ul>
                <li><a href="https://github.com/slub/librmlbuilder" target="_blank">Github Projekt</a></li>
                <li><a href="https://github.com/slub/librmlbuilder/issues" target="_blank">Github Feedback</a></li>
              </ul>
            </b-modal>
          </b-collapse>
          <b-navbar-nav class="ml-auto p-1">
            <b-dropdown id="loadlocal" :disabled="loadEnabled" text="LibRMLs laden">
              <b-dropdown-item v-for="(item, index) in this.persistedLibRMLs" :key="index" @click="loadLocal(index)">
                {{ item.name }}
              </b-dropdown-item>
            </b-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto p-1">
            <b-button @click="loadNew()">Neues LibRML starten!</b-button>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto p-1">
            <b-button v-b-modal.json-input>JSON Import/Export</b-button>
            <b-modal id="json-input" centered ok-only scrollable title="JSON Quelltext:" @hide="resetJSON"
                     @ok="parseJSON()" @show="updateJSON()">
              <p>Kopieren sie das gewünschte JSON hier heraus/hinein</p>
              <b-form-textarea id="json-input-field" v-model.lazy="librmlText" max-rows="20" rows="10" size="sm">
              </b-form-textarea>
            </b-modal>
          </b-navbar-nav>
        </b-navbar>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <div class="border border-dark border-1px solid p-2 mt-1 rounded">
          <b-form>
            <h3>LibRML</h3>
            <b-form-group>
              <label for="librmlid">Eindeutige ID des LibRML</label>
              <b-form-input id="librmlid" v-model.trim="librml.id" placeholder="1234567890-abd"
                            required></b-form-input>
              <b-button-group class="pt-1 float-right" size="sm">
                <b-button :disabled='deleteEnabled' variant="outline-primary" @click="deleteLocal()">Löschen
                </b-button>
                <b-button :disabled='saveEnabled' variant="outline-primary" @click="saveLocal()">Speichern</b-button>
              </b-button-group>
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
            <b-form-checkbox v-model="librml.copyright">Urheberrechte</b-form-checkbox>
            <b-form-checkbox v-model="librml.mention">Namensnennung</b-form-checkbox>
            <b-form-checkbox v-model="librml.sharealike">Weitergabe unter gleichen Bedingungen</b-form-checkbox>
            <b-form-checkbox v-model="librml.onlynoncommercialuse">Kommerzielle Nutzung ausgeschlossen</b-form-checkbox>
          </b-form>
          <ActionComponent v-for="(action, index) in librml.actions" :key="index" :action="action"
                           :index="index"></ActionComponent>
          <div class=" m-2 p-3">
            <b-button type="button" @click="addAction()">Nutzungsrecht hinzufügen</b-button>
          </div>
        </div>

      </b-col>
      <b-col cols="6">
        <vue-json-pretty :data="this.librml" showDoubleQuotes showLine></vue-json-pretty>
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
      librmlText: '',
      metarights: [],
      persistedLibRMLs: [],
      loadedIndex: -1
    }
  },
  computed: {
    librml: {
      get() {
        return this.$store.getters.getLibRML
      },
      set(value) {
        this.setLibRML(value)
      }
    },
    saveEnabled: function () {
      return this.librml.id == ''
    },
    deleteEnabled: function () {
      return this.loadedIndex == -1
    },
    loadEnabled: function () {
      return this.persistedLibRMLs.length == 0
    }
  },
  methods: {
    setLibRML(value) {
      this.$store.dispatch("setLibRML", value)
    },
    addAction() {
      this.librml.actions.push(new Action())
    },
    loadNew() {
      this.librml = new LibRML()
    },
    saveLocal() {
      this.persistedLibRMLs.push({name: this.librml.id, librml: this.librml})
      localStorage.setItem('persistedLibRMLs', JSON.stringify(this.persistedLibRMLs))
    },
    deleteLocal() {
      this.$delete(this.persistedLibRMLs, this.loadedIndex)
      localStorage.setItem('persistedLibRMLs', JSON.stringify(this.persistedLibRMLs))
      this.loadNew()
    },
    loadLocal(index) {
      this.librml = this.persistedLibRMLs[index].librml
      this.loadedIndex = index
    },
    updateJSON() {
      this.librmlText = JSON.stringify(this.librml, null, 2)
    },
    resetJSON() {
      this.librmlText = ''
    },
    parseJSON() {
      this.librml = JSON.parse(this.librmlText)
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
  }
}
</script>