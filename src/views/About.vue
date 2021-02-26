<template>
  <div class="about overflow-x-hidden">
    <ContentHeader />
    <OurCommitment />
    <Quality />
    <OurHeadquarters />
    <Footer />
  </div>
</template>

<script>
import ContentHeader from "../components/About/ContentHeader";
import OurCommitment from "../components/About/OurCommitment";
import Quality from "../components/About/Quality.vue";
import OurHeadquarters from "../components/About/OurHeadquarters.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    ContentHeader,
    OurCommitment,
    Quality,
    OurHeadquarters,
    Footer,
  },
};
</script>
