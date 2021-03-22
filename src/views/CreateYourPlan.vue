<template>
  <div class="overflow-x-hidden">
    <Modal class="align-middle" />
    <ContentHeader />
    <PlanSteps />
    <Subscribe />
    <Footer />
  </div>
</template>
<script>
import ContentHeader from "../components/CreatePlan/ContentHeader.vue";
import PlanSteps from "../components/CreatePlan/PlanSteps";
import Subscribe from "../components/CreatePlan/Subscribe.vue";
import Footer from "../components/Footer";
import Modal from "../components/CreatePlan/Modal";
export default {
  components: {
    ContentHeader,
    PlanSteps,
    Subscribe,
    Modal,
    Footer,
  },
};
</script>
