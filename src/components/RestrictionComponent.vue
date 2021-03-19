<template>
  <div class="border border-primary border-1px solid m-2 p-2 rounded">
    <h6><b-icon icon="x-circle-fill" @click="deleteRestriction(index)"></b-icon> {{ restriction.type }}</h6>
    <b-select v-model="restriction.type" :options="restrictionOptions" v-on:change="resetRestriction()"></b-select>
    <DateRestrictionComponent v-if="restriction.type=='date'" :restriction="restriction"></DateRestrictionComponent>
    <AgeRestrictionComponent v-if="restriction.type=='age'" :restriction="restriction"></AgeRestrictionComponent>
  </div>
</template>

<script>
import DateRestrictionComponent from "@/components/DateRestrictionComponent";
import AgeRestrictionComponent from "@/components/AgeRestrictionComponent";
import {Restriction} from "@/librml/librml";

export default {
  name: "RestrictionComponent",
  components: {DateRestrictionComponent, AgeRestrictionComponent},
  props: {
    restriction: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      restrictionOptions: [
        {value: 'date', text: "Zeitbeschränkung"},
        {value: 'age', text: "Altersbeschränkung"},
      ]
    }
  },
  methods: {
    resetRestriction() {
      this.restriction = new Restriction();
    },
    deleteRestriction(index) {
      this.$delete(this.$parent.action.restrictions, index)
    }
  }
}
</script>

<style scoped>

</style>