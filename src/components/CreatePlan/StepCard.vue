<template>
  <div class="stepCard-cont flex flex-col justify-between align-left">
    <span class="text-7xl text-darkCream leading-15">{{ stepNumber }}</span>
    <span class="stepTitle font-black text-white text-4 pt-6 leading-loose">{{
      stepTitle
    }}</span>
    <span
      class="text-xs text-darkCream font-Barlow text-base leading-relaxed pt-10"
      >{{ stepDescription }}</span
    >
  </div>
</template>

<script>
export default {
  name: "StepCard",
  components: {},
  props: ["stepNumber", "stepTitle", "stepDescription"],
};
</script>

<style></style>
