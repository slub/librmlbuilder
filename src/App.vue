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
          <b-navbar-nav class="ml-auto">
            <b-button>Neues LibRML starten!</b-button>
          </b-navbar-nav>
        </b-navbar>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <div class="shadow-sm m-2 p-3 mb-5 bg-white rounded">
          <b-form>
            <h3>Angaben zum Objekt</h3>
            <b-form-group id="id-group" description="Die eindeutige ID des Objektes" label="ID" label-for="id-input">
              <b-form-input id="id-input" v-model="librml.id" placeholder="1234567890-abd" required></b-form-input>
            </b-form-group>
            <b-form-group id="otherid-group" description="Andere IDs dieses Objektes, mit Komma trennen."
                          label="Andere IDs"
                          label-for="other-id-input">
              <b-form-input id="other-id-input" v-model="otherids" placeholder="123456789-aaa, 123456789-bbb"
                            @change="updateOtherIDs()"></b-form-input>
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
              <b-form-input id="tenant-input" v-model="librml.usageguide" placeholder="http://slub-dresden.de/usage"
                            required></b-form-input>
            </b-form-group>
            <b-form-checkbox v-model="librml.mention">Namensnennung</b-form-checkbox>
            <b-form-checkbox v-model="librml.sharealike">Weitergabe unter gleichen Bedingungen</b-form-checkbox>
            <b-form-checkbox v-model="librml.copyright">Urheberrechte</b-form-checkbox>
          </b-form>
        </div>
      </b-col>
      <b-col cols="6">
        <vue-json-pretty
            :data=this.librml
            :path="'res'">
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
      librml: this.$root.librml,
      otherids: '',
      metarights: [],
    }
  },
  methods: {
    updateOtherIDs() {
      this.librml.relatedids = this.otherids.split(',').map(item => item.trim());
    },
  },
  name: 'App',
  components: {
    VueJsonPretty
  }
}
</script>