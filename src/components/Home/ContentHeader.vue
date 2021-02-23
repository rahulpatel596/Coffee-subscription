<template>
  <div
    class="image-container md:block flex justify-center items-center h-full w-screen relative"
  >
    <div
      class="text-center md:text-left h-72 flex flex-col justify-between items-center md:justify-between w-4/5 md:pl-16 md:w-32-8 md:h-22-9 md:-mt-8-37 md:-ml-9-31 text-white absolute"
    >
      <span
        class="content-headline leading-10 md:leading-12 text-4xl md:text-7xl z-50 font-black"
      >
        Great coffee made simple.
      </span>
      <span class="content-subline font-Barlow leading-7 md:leading-relaxed">
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </span>
      <button type="button" class="h-16 bg-blueish w-72 rounded-md">
        Create your plan
      </button>
    </div>
    <div
      class="md:w-90vw h-full  md:-ml-5vw flex rounded-md items-center justify-center"
    >
      <img
        class="rounded-md h-full block md:hidden lg:hidden xl:hidden 2xl:hidden w-4/5"
        src="../../assets/assets/home/mobile/image-hero-coffeepress.jpg"
      />
      <img
        class="hidden md:block lg:block xl:block"
        src="../../assets/assets/home/desktop/image-hero-coffeepress.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentHeader",
  components: {},
};
</script>

<style></style>
