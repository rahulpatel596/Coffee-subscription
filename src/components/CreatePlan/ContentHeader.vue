<template>
  <div>
    <div
      class="lg:w-90vw h-screen md:h-5/6 -ml-5vw rounded-xl lg:items-center relative lg:justify-start flex"
    >
      <div
        class="absolute  flex flex-col self-center md:w-3/4 lg:w-2/5 lg:hero-content lg:justify-between"
      >
        <span
          class="font-Fraunces pb-6 text-center md:text-left md:pl-10 text-5xl lg:pb-6 lg:leading-13 text-white font-black lg:text-5xl"
          >Create a plan</span
        >
        <span
          class="font-Barlow opacity-80 text-center md:text-left w-5/6 self-center leading-6 text-white text-base lg:leading-9 text-lightGray"
          >Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.</span
        >
      </div>
      <img
        class="rounded-xl w-90vw block md:hidden"
        src="../../assets/assets/plan/mobile/image-hero-blackcup.jpg"
      />
      <img
        class="rounded-xl w-90vw hidden sm:block lg:hidden"
        src="../../assets/assets/plan/tablet/image-hero-blackcup.jpg"
      />
      <img
        class="rounded-xl w-90vw hidden lg:block"
        src="../../assets/assets/plan/desktop/image-hero-blackcup.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.text-Fraunces {
  font-family: Fraunces 9pt;
}
.hero-content {
  width: 445px;
}
</style>
