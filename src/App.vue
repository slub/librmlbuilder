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
              <b-nav-item target="_blank" class="nav-link" href="https://slub.github.io/librml/">
                Über LibRML
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
          <b-navbar-nav class="ml-auto">
            <b-button>Neues LibRML starten!</b-button>
          </b-navbar-nav>
        </b-navbar>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <b-form @submit="baseSubmit">
          <h3>Angaben zum Objekt</h3>
          <b-form-group id="id-group" label="ID" label-for="id-input" description="Die eindeutige ID des Objektes">
            <b-form-input id="id-input" v-model="librml.id" placeholder="1234567890-abd" required></b-form-input>
          </b-form-group>
          <b-form-group id="otherid-group" label="Andere IDs" label-for="other-id-input"
                        description="Andere IDs dieses Objektes, mit Komma trennen.">
            <b-form-input id="other-id-input" v-model="librml.otherid"
                          placeholder="123456789-aaa, 123456789-bbb"></b-form-input>
          </b-form-group>
          <b-form-group id="tenant-group" label="Verwalter" label-for="tenant-input"
                        description="Verwalter des Objektes, hier die ID der Institution, auf die die Nutzungsrechte angewandt werden können.">
            <b-form-input id="tenant-input" v-model="librml.tenant" placeholder="http://slub-dresden.de"
                          required></b-form-input>
          </b-form-group>
          <b-form-group id="guide-group" label="Nutzungshinweise" label-for="guide-input"
                        description="Nutzungshinweise. Eine URL zu allgemeinen Hinweisen zur Nutzung von Objekten.">
            <b-form-input id="tenant-input" v-model="librml.guide" placeholder="http://slub-dresden.de/usage"
                          required></b-form-input>
          </b-form-group>
          <b-form-group id="meta-rights" label="Richtlinien" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group id="meta-rights-group" v-model="librml.metarights"
                                   :aria-describedby="ariaDescribedby">
              <b-form-checkbox value="mention">Namensnennung</b-form-checkbox>
              <b-form-checkbox value="sharealike">Weitergabe unter gleichen Bedingungen</b-form-checkbox>
              <b-form-checkbox value="copyright">Urheberrechte</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <h3>Aktionen</h3>
          <div>
            <h4>Metadaten anzeigen</h4>
            <b-form-checkbox value="permission" v-model="dispalymeta.permission" size="lg">Erlaubt</b-form-checkbox>
            <div v-if="dispalymeta.permission" class="alert">Hier kommt eine Komponente hin!</div>
          </div>
          <div>
            <h4>Anzeigen</h4>
            <b-form-checkbox value="permission" v-model="read.permission" size="lg">Erlaubt</b-form-checkbox>
            <div v-if="read.permission" class="alert">Hier kommt eine Komponente hin!</div>
          </div>
          <div>
            <h4>Abspielen</h4>
            <b-form-checkbox value="permission" v-model="run.permission" size="lg">Erlaubt</b-form-checkbox>
            <b-alert v-if="run.permission" show>Hier kommt eine Komponente hin!</b-alert>
          </div>
          <b-button type="submit" variant="primary">Übernehmen</b-button>
        </b-form>
      </b-col>
      <b-col cols="6">
        <vue-json-pretty
            :path="'res'"
            :data=this.librml>
        </vue-json-pretty>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

export default {
  data() {
    return {
      librml: {
        id: '',
        otherid: '',
        tenant: '',
        guide: '',
        metarights: []
      },
      dispalymeta: {
        permission: false,
      },
      read: {
        permission: false,
      },
      run: {
        permission: false,
      }
    }
  },
  methods: {
    baseSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.librml))
    }
  },
  name: 'App',
  components: {VueJsonPretty}
}
</script>