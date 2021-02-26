<template>
  <div class="md:stepCard-cont flex flex-col align-left">
    <span class="text-7xl text-darkCream stepnumber">{{ stepNumber }}</span>
    <span
      class="leading-2 h-1/3 md:leading-16 lg:leading-16 font-black text-175 md:text-4 lg:text-4 xl:text-4 2xl:text-4"
      >{{ stepTitle }}</span
    >
    <span
      class="text-xs leading-5 h-1/3 pt-4 font-Barlow md:text-base lg:text-base xl:text-base 2xl:text-base"
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

<style>
.stepCard-cont {
  width: 300px;
}
.stepnumber {
  line-height: 72px;
  font-style: norma;
}
</style>
