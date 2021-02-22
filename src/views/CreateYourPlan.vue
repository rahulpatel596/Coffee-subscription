<template>
  <div>
    <ContentHeader />
    <PlanSteps />
    <Subscribe class="" />
    <Footer />
  </div>
</template>
<script>
import ContentHeader from "../components/CreatePlan/ContentHeader.vue";
import PlanSteps from "../components/CreatePlan/PlanSteps";
import Subscribe from "../components/CreatePlan/Subscribe.vue";
import Footer from "../components/Footer";
export default {
  components: {
    ContentHeader,
    PlanSteps,
    Subscribe,
    Footer,
  },
};
</script>
