<template>
  <div class="border-primary border-1px solid m-2 p-2 rounded">
    <h6>{{ restriction.type }}</h6>
    <b-select v-model="restriction.type" :options="restrictionOptions"></b-select>
    <DateRestrictionComponent v-if="restriction.type=='date'" :restriction="restriction"></DateRestrictionComponent>
    <AgeRestrictionComponent v-if="restriction.type=='age'" :restriction="restriction"></AgeRestrictionComponent>
  </div>
</template>

<script>
import DateRestrictionComponent from "@/components/DateRestrictionComponent";
import AgeRestrictionComponent from "@/components/AgeRestrictionComponent";
export default {
  name: "RestrictionComponent",
  components: {DateRestrictionComponent, AgeRestrictionComponent},
  props: {
    restriction: {},
  },
  data() {
    return {
      restrictionOptions: [
        {value: 'date', text: "Zeitbeschränkung"},
        {value: 'age', text: "Altersbeschränkung"},
      ]
    }
  }
}
</script>

<style scoped>

</style>