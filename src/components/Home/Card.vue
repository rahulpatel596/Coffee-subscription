<template>
  <div>
    <div
      class="pt-16 hidden md:flex md:justify-evenly md:flex-col md:items-center md:justify-center lg:flex lg:justify-evenly lg:flex-col lg:items-center lg:justify-center xl:flex xl:justify-evenly xl:flex-col xl:items-center xl:justify-center 2xl:flex 2xl:justify-evenly 2xl:flex-col 2xl:items-center 2xl:justify-center"
    >
      <div class="">
        <img :src="myIcon" />
      </div>
      <div
        class=" w-64 justify-around text-center flex flex-col items-center justify-between justify-center"
      >
        <span class="md:p-4 md:text-2xl">Best quality</span>
        <span class="font-Barlow md:flex-1 text-base  opacity-80"
          >Discover an endless variety of the world’s best artisan coffee from
          each of our roasters.</span
        >
      </div>
    </div>
    <div
      class="md:hidden lg:hidden xl:hidden 2xl:hidden flex h-32 items-center justify-around"
    >
      <div class="h-16 w-16 pl-2">
        <img :src="myIcon" />
      </div>
      <div class="text-left flex flex-col w-3/5">
        <span class="font-black text-xl md:p-4 md:text-2xl">Best quality</span>
        <span class="font-Barlow md:flex-1 text-base  opacity-80"
          >Discover an endless variety of the world’s best artisan coffee from
          each of our roasters.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {},
  props: ["myIcon"],
};
</script>

<style></style>
