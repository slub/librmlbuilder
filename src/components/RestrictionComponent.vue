<template>
  <div class="border border-dark border-1px solid mt-1 mb-1 p-2 rounded">
    <h6>
      <b-icon v-b-tooltip.hover="'Einschränkung löschen'" class="pr-1" icon="x-circle" variant="danger"
              @click="deleteRestriction(resid)"></b-icon>
      {{ restrictionName }}
    </h6>
    <DateRestrictionComponent v-if="restriction.type=='date'" :key="rindex" :restriction="restriction"
                              :rindex="rindex"></DateRestrictionComponent>
    <AgeRestrictionComponent v-if="restriction.type=='age'" :key="rindex" :restriction="restriction"
                             :rindex="rindex"></AgeRestrictionComponent>
    <DurationRestrictionComponent v-if="restriction.type=='duration'" :key="rindex" :restriction="restriction"
                                  :rindex="rindex"></DurationRestrictionComponent>
    <CountRestrictionComponent v-if="restriction.type=='count'" :key="rindex" :restriction="restriction"
                               :rindex="rindex"></CountRestrictionComponent>
    <ConcurrentRestrictionComponent v-if="restriction.type=='concurrent'" :key="rindex" :restriction="restriction"
                                    :rindex="rindex"></ConcurrentRestrictionComponent>
    <CommercialRestrictionComponent v-if="restriction.type=='commercialuse'" :key="rindex" :restriction="restriction"
                                    :rindex="rindex"></CommercialRestrictionComponent>
    <AgreementRestrictionComponent v-if="restriction.type=='agreement'" :key="rindex" :restriction="restriction"
                                   :rindex="rindex"></AgreementRestrictionComponent>
    <GroupRestrictionComponent v-if="restriction.type=='group'" :key="rindex" :restriction="restriction"
                               :rindex="rindex"></GroupRestrictionComponent>
    <QualityRestrictionComponent v-if="restriction.type=='quality'" :key="rindex" :restriction="restriction"
                                 :rindex="rindex"></QualityRestrictionComponent>
    <WatermarkRestrictionComponent v-if="restriction.type=='watermark'" :key="rindex" :restriction="restriction"
                                   :rindex="rindex"></WatermarkRestrictionComponent>
    <PartsRestrictionComponent v-if="restriction.type=='parts'" :key="rindex" :restriction="restriction"
                               :rindex="rindex"></PartsRestrictionComponent>
    <LocationRestrictionComponent v-if="restriction.type=='location'" :key="rindex" :restriction="restriction"
                                  :rindex="rindex"></LocationRestrictionComponent>
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
    rindex: {
      type: Number
    },
    resid: {
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