<template>
  <div>
    <div class="w-90vw mt-8 -ml-5vw rounded-xl">
      <div
        class="w-70vw lg:ml-16 -ml-15vw lg:w-3/5 text-white lg:text-left md:flex  mt-16 md:mt-28 flex items-center justify-center justify-between lg:flex xl:flex 2xl:flex flex-col  absolute"
      >
        <span
          class="leading-10 lg:leading-12 text-4xl lg:text-7xl z-40 font-black md:self-start md:text-left"
        >
          Great coffee made simple.
        </span>
        <span
          class="content-subline self-start text-center w-4/5 pt-4 font-Barlow leading-7 lg:leading-relaxed md:self-start md:text-left"
        >
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </span>
        <a
          type="button"
          class="md:h-16  bg-blueish md:w-72 h-10 w-44 rounded-md mt-10 flex items-center justify-center md:self-start"
          href="/#/createYourPlan"
        >
          Create your plan
        </a>
      </div>
      <div class="flex justify-center items-center">
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
  </div>
</template>

<script>
export default {
  name: "ContentHeader",
  components: {},
};
</script>

<style></style>
