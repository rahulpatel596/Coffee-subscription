<template>
  <div
    class="flex flex-col rounded-lg md:h-80vh md:p-10 w-90vw md:ml-0 md:w-screen -mt-5vw -ml-5vw justify-evenly bg-darkGreenish "
  >
    <div class="pt-10 md:pb-10 lg:pl-32 md:block">
      <img
        class="pathIcon hidden lg:block"
        src="../../assets/assets/home/desktop/svgpath.svg"
      />
      <img
        class="md:block hidden lg:hidden"
        src="../../assets/assets/plan/tablet/stepSVG.svg"
      />
    </div>

    <div
      class="flex md:self-left  lg:justify-evenly self-center h-full   flex-col md:flex-row"
    >
      <StepCard
        v-bind:stepDescription="stepDescription1"
        v-bind:stepNumber="stepNumber1"
        v-bind:stepTitle="stepTitle1"
      />
      <StepCard
        v-bind:stepDescription="stepDescription2"
        v-bind:stepNumber="stepNumber2"
        v-bind:stepTitle="stepTitle2"
      />
      <StepCard
        v-bind:stepDescription="stepDescription3"
        v-bind:stepNumber="stepNumber3"
        v-bind:stepTitle="stepTitle3"
      />
    </div>
  </div>
</template>

<script>
import StepCard from "./StepCard.vue";

export default {
  name: "PlanSteps",
  components: {
    StepCard,
  },
  data() {
    return {
      stepNumber1: "01",
      stepNumber2: "02",
      stepNumber3: "03",
      stepTitle1: "Pick your coffee",
      stepTitle2: "Choose the frequency",
      stepTitle3: "Receive and enjoy!",
      stepDescription1:
        "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees.",
      stepDescription2:
        "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
      stepDescription3:
        "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    };
  },
};
</script>

<style>
.pathIcon {
  width: 791px;
}
.stepCard {
  height: 355px;
}
</style>
