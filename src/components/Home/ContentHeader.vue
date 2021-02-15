<template>
  <div class="image-container w-screen relative">
    <div
      class="image-content text-left flex flex-col justify-between w-32-8 h-22-9 -mt-8-37 -ml-9-31 text-white absolute"
    >
      <span class="content-headline leading-12 text-7xl z-50 font-black">
        Great coffee made simple.
      </span>
      <span class="content-subline font-Barlow leading-relaxed">
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </span>
      <button type="button" class="h-14 bg-blueish w-52 rounded-md">
        Create your plan
      </button>
    </div>
    <div class="w-90vw -ml-5vw flex rounded-md items-center justify-center">
      <img
        class="rounded-md w-full"
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
