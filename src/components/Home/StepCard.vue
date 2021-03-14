<template>
  <div
    class=" lg:stepCard-cont flex flex-col text-center lg:text-left lg:text-left xl:text-left"
  >
    <span class="text-7xl text-darkCream stepnumber">{{ stepNumber }}</span>
    <span
      class="leading-2  lg:flex lg:items-center  lg:leading-16 lg:leading-16 font-black text-175 lg:text-4 lg:text-4 xl:text-4 2xl:text-4"
      ><span>{{ stepTitle }}</span></span
    >
    <span
      class="text-xs leading-5  font-Barlow w-2/3 md:w-full self-center lg:text-base lg:text-base xl:text-base 2xl:text-base"
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
