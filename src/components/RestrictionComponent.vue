<template>
  <div class="border border-primary border-1px solid m-2 p-2 rounded">
    <h6>
      <b-icon icon="x-circle-fill" @click="deleteRestriction(index)"></b-icon>
      {{ restrictionName }}
    </h6>
    <DateRestrictionComponent v-if="restriction.type=='date'" :restriction="restriction"></DateRestrictionComponent>
    <AgeRestrictionComponent v-if="restriction.type=='age'" :restriction="restriction"></AgeRestrictionComponent>
    <DurationRestrictionComponent v-if="restriction.type=='duration'"
                                  :restriction="restriction"></DurationRestrictionComponent>
    <CountRestrictionComponent v-if="restriction.type=='count'" :restriction="restriction"></CountRestrictionComponent>
    <ConcurrentRestrictionComponent v-if="restriction.type=='concurrent'"
                                    :restriction="restriction"></ConcurrentRestrictionComponent>
    <CommercialRestrictionComponent v-if="restriction.type=='commercialuse'"
                                    :restriction="restriction"></CommercialRestrictionComponent>
    <AgreementRestrictionComponent v-if="restriction.type=='agreement'"
                                    :restriction="restriction"></AgreementRestrictionComponent>
    <GroupRestrictionComponent v-if="restriction.type=='group'"
                                    :restriction="restriction"></GroupRestrictionComponent>
  </div>
</template>

<script>
import DateRestrictionComponent from "@/components/DateRestrictionComponent";
import AgeRestrictionComponent from "@/components/AgeRestrictionComponent";
import DurationRestrictionComponent from "@/components/DurationRestrictionComponent";
import CountRestrictionComponent from "@/components/CountRestrictionComponent";
import ConcurrentRestrictionComponent from "@/components/ConcurrentRestrictionComponent";
import CommercialRestrictionComponent from "@/components/CommercialRestrictionComponent";
import AgreementRestrictionComponent from "@/components/AgreementRestrictionComponent";
import GroupRestrictionComponent from "@/components/GroupRestrictionComponent";

export default {
  name: "RestrictionComponent",
  components: {
    DateRestrictionComponent,
    AgeRestrictionComponent,
    DurationRestrictionComponent,
    CountRestrictionComponent,
    ConcurrentRestrictionComponent,
    CommercialRestrictionComponent,
    AgreementRestrictionComponent,
    GroupRestrictionComponent
  },
  props: {
    restriction: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data() {
    return {}
  },
  methods: {
    deleteRestriction(index) {
      this.$delete(this.$parent.action.restrictions, index)
    }
  },
  computed: {
    restrictionName: function () {
      var ret = 'Fehler: Unbekannte Restriktion!';
      var type = this.restriction.type;
      var rtext = this.$parent.restrictionOptions.filter(obj => {
        return obj.value == type;
      });
      if (rtext.length > 0)
        ret = rtext[0].text;
      return ret;
    }
  }
}
</script>

<style scoped>

</style>