<template>
  <div class="about">
    <ContentHeader />
    <OurCommitment />
    <Quality />
    <OurHeadquarters />
  </div>
</template>

<script>
import ContentHeader from "../components/About/ContentHeader";
import OurCommitment from "../components/About/OurCommitment";
import Quality from "../components/About/Quality.vue";
import OurHeadquarters from "../components/About/OurHeadquarters.vue";

export default {
  components: {
    ContentHeader,
    OurCommitment,
    Quality,
    OurHeadquarters,
  },
};
</script>
