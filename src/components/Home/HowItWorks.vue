<template>
  <div class="h-screen flex justify-center items-center w-screen">
    <div class="md:w-4/5 flex flex-col md:h-4/5 justify-between">
      <span class="md:text-2xl md:pl-14 font-black">How it works</span>
      <img
        class="pathIcon md:pl-14"
        src="../../assets/assets/home/desktop/svgpath.svg"
      />
      <div class="items-left">
        <div class="stepCard-box flex justify-around">
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

      <button class="cr-button rounded-md text-white bg-sweetGreen">
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
  .cr-button {
    width: 217px;
    height: 56px;
    margin-left: 2rem;
  }
}
</style>
