import 'mutationobserver-shim'
import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/bootstrap-vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import App from './App.vue'
import {LibRML} from "@/librml/librml";

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false


const store = new Vuex.Store({
    state: {
        actions: [
            {value: '', text: 'Aktion auswählen', disabled: true},
            {value: 'displaymetadata', text: 'Anzeige der Metadaten im Katalog'},
            {value: 'read', text: 'Öffnen und Lesen der Ressource'},
            {value: 'run', text: 'Ausführen der Ressource'},
            {value: 'lend', text: 'Verleih der Ressource'},
            {value: 'download', text: 'Herunterladen einer Datei'},
            {value: 'print', text: 'Ausdrucken des Werkes'},
            {value: 'reproduce', text: 'Vervielfältigung der Ressource'},
            {value: 'modify', text: 'Bearbeitung, Übersetzung, Umarbeitung'},
            {value: 'reuse', text: 'Wiederverwendung des Werkes'},
            {value: 'distribute', text: 'nicht-öffentliches Verbreiten der Ressource'},
            {value: 'publish', text: 'öffentliches Verbreiten oder Vorführen der Ressource'},
            {value: 'archive', text: 'Speicherung der Ressource zum Zweck der Archivierung'},
            {value: 'index', text: 'Erzeugung und/oder das Einfügen von Metadaten in einen Index'},
            {value: 'move', text: 'Übertragung der Ressource zwischen Datenbanken'},
        ],
        restrictions: [
            {value: null, text: 'Einschränkung auswählen', disabled: true},
            {value: 'date', text: 'Zeitpunkt (Embargo)'},
            {value: 'age', text: 'Nutzer eines bestimmten Alters'},
            {value: 'duration', text: 'bestimmte Zeitdauer'},
            {value: 'count', text: 'bestimmte Anzahl an Ausführungen'},
            {value: 'concurrent', text: 'Gleichzeitige Ausführung'},
            {value: 'commercialuse', text: 'Kommerzielle Nutzung'},
            {value: 'agreement', text: 'Zustimmung zu Nutzungsbedingungen oder Verträgen'},
            {value: 'group', text: 'bestimmte Personen oder Personengruppen'},
            {value: 'quality', text: 'maximale Qualität'},
            {value: 'watermark', text: 'Kennzeichnung der Ressource'},
            {value: 'parts', text: 'Teile der Ressource'},
            {value: 'location', text: 'Geographisch/Institutionell'},
        ],
        librml: new LibRML()
    },
    getters: {
        getRestriction: (state) => (type) => {
            return state.restrictions.find(restriction => restriction.value == type)
        },
        getAction: (state) => (type) => {
            return state.actions.find(action => action.value == type)
        },
        getActions: state => {
            return state.actions
        },
        getRestrictions: state => {
            return state.restrictions
        },
        getLibRML: state => {
            return state.librml
        }
    },
    mutations: {
        setLibRML: (state, value) => state.librml = value
    },
    actions: {
        setLibRML(context, value) {
            context.commit('setLibRML', value)
        }
    }
})

var vm = new Vue({
    render: h => h(App),
    store: store
})

vm.$mount('#app')
