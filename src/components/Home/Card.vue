<template>
  <div class="flex justify-evenly flex-col items-center justify-center">
    <div class="">
      <img :src="myIcon" />
    </div>
    <div
      class=" textBox justify-around text-center flex flex-col items-center justify-between justify-center"
    >
      <span class="p-4 text-2xl">Best quality</span>
      <span class="font-Barlow flex-1 text-base  opacity-80"
        >Discover an endless variety of the world’s best artisan coffee from
        each of our roasters.</span
      >
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

<style>
.textBox {
  width: 255px;
}
</style>
