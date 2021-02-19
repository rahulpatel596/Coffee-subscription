<template>
  <div class="relative">
    <ContentHeader />
    <PlanSteps />
    <Subscribe />
  </div>
</template>
<script>
import ContentHeader from "../components/CreatePlan/ContentHeader.vue";
import PlanSteps from "../components/CreatePlan/PlanSteps";
import Subscribe from "../components/CreatePlan/Subscribe.vue";

export default {
  components: {
    ContentHeader,
    PlanSteps,
    Subscribe,
  },
};
</script>
