import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/bootstrap-vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import App from './App.vue'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false


const store = new Vuex.Store({
    state: {
        actions: [
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
        restrictions: [
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
        ]
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
        }
    }
})

var vm = new Vue({
    render: h => h(App),
    store: store
})

vm.$mount('#app')
