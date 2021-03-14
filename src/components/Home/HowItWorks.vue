<template>
  <div
    class="w-4/5 ml-12 lg:ml-0 md:ml-52 md:w-2/4 mt-72 lg:h-60vh lg:items-center lg:flex lg:justify-center lg:w-screen"
  >
    <div
      class="pb-6 md:flex md:justify-center md:items-center justify-center lg:w-4/5 flex flex-col lg:h-4/5 lg:items-left lg:justify-between"
    >
      <span
        class="pb-6 text-2xl font-black text-center lg:text-left lg:self-start xl:text-left"
        >How it works</span
      >
      <img
        class="pathIcon pb-6 hidden lg:block lg:self-start  xl:block"
        src="../../assets/assets/home/desktop/svgpath.svg"
      />
      <div class="items-center">
        <div
          class="stepCard-box flex flex-col lg:flex-row  xl:flex-row justify-between"
        >
          <StepCard
            class="pb-10 lg:pb-0  xl:pb-0"
            v-bind:stepDescription="stepDescription1"
            v-bind:stepNumber="stepNumber1"
            v-bind:stepTitle="stepTitle1"
          />
          <StepCard
            class="pb-10 lg:pb-0  xl:pb-0"
            v-bind:stepDescription="stepDescription2"
            v-bind:stepNumber="stepNumber2"
            v-bind:stepTitle="stepTitle2"
          />
          <StepCard
            class="pb-10 lg:pb-0 xl:pb-0"
            v-bind:stepDescription="stepDescription3"
            v-bind:stepNumber="stepNumber3"
            v-bind:stepTitle="stepTitle3"
          />
        </div>
      </div>

      <button
        class=" cr-button md:mt-64 md:justify-center rounded-md text-white bg-sweetGreen h-16 self-center sm:leading-1 lg:self-start lg:h-40 lg:items-left lg:leading-10 bg-blueish  xl:ml-0 w-72 mt-10 lg:-mt-6 xl:-mt-6 2xl:-mt-6"
      >
        Create your plan
      </button>
    </div>
  </div>
</template>

<script>
import StepCard from "./StepCard.vue";
export default {
  name: "HowItWorks",
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
@media (min-width: 768px) {
  .pathIcon {
    width: 791px;
  }
  .stepCard-box {
    height: 400px;
  }
}
</style>
