<template>
  <div class="border border-dark border-1px solid mt-1 mb-1 p-2 rounded">
    <h6>
      <b-icon class="pr-1" icon="x-circle" variant="danger" @click="deleteRestriction(index)"></b-icon>
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
    <QualityRestrictionComponent v-if="restriction.type=='quality'"
                                 :restriction="restriction"></QualityRestrictionComponent>
    <WatermarkRestrictionComponent v-if="restriction.type=='watermark'"
                                   :restriction="restriction"></WatermarkRestrictionComponent>
    <PartsRestrictionComponent v-if="restriction.type=='parts'"
                               :restriction="restriction"></PartsRestrictionComponent>
    <LocationRestrictionComponent v-if="restriction.type=='location'"
                                  :restriction="restriction"></LocationRestrictionComponent>
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
import QualityRestrictionComponent from "@/components/QualityRestrictionComponent";
import WatermarkRestrictionComponent from "@/components/WatermarkRestrictionComponent";
import PartsRestrictionComponent from "@/components/PartsRestrictionComponent";
import LocationRestrictionComponent from "@/components/LocationRestrictionComponent";

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
    GroupRestrictionComponent,
    QualityRestrictionComponent,
    WatermarkRestrictionComponent,
    PartsRestrictionComponent,
    LocationRestrictionComponent
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
      this.$delete(this.$parent.$parent.action.restrictions, index)
    }
  },
  computed: {
    restrictionName: function () {
      let ret = 'Fehler: Unbekannte Restriktion!';
      let type = this.restriction.type;
      let rest = this.$store.getters.getRestriction(type);
      if (rest)
        ret = rest.text;
      return ret;
    }
  }
}
</script>

<style scoped>

</style>