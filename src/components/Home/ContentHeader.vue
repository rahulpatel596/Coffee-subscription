<template>
  <div
    class="image-container lg:block flex justify-center items-center h-full w-screen relative md:justify-start"
  >
    <div
      class="text-center lg:text-left  h-72 flex flex-col justify-between items-center lg:justify-between w-4/5 lg:pl-16 lg:w-32-8 lg:h-22-9 lg:-mt-8-37 lg:-ml-9-31 md:w-2/4 text-white absolute md:justify-between md:items-start md:ml-16"
    >
      <span
        class="content-headline leading-10 lg:leading-12 text-4xl lg:text-7xl z-50 font-black md:self-start md:text-left"
      >
        Great coffee made simple.
      </span>
      <span
        class="content-subline w-3/4  font-Barlow leading-7 lg:leading-relaxed md:self-start md:text-left"
      >
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </span>
      <button
        type="button"
        class="h-16 bg-blueish w-72 rounded-md lg:-ml-44 md:self-start"
      >
        Create your plan
      </button>
    </div>
    <div
      class="lg:w-90vw h-full  lg:-ml-5vw flex rounded-md items-center justify-center"
    >
      <img
        class="rounded-md h-full block md:hidden lg:hidden xl:hidden 2xl:hidden w-4/5"
        src="../../assets/assets/home/mobile/image-hero-coffeepress.jpg"
      />
      <img
        class="hidden md:hidden lg:block lg:block xl:block"
        src="../../assets/assets/home/desktop/image-hero-coffeepress.jpg"
      />
      <img
        class="hidden md:block lg:hidden xl:hidden 2xl:hidden"
        src="../../assets/assets/home/tablet/image-hero-coffeepress.jpg"
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
