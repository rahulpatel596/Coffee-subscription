<template>
  <div>
    <div class="w-90vw mt-8 -ml-5vw rounded-xl">
      <div
        class=" w-2/3 lg:w-1/3 lg:text-left md:flex ml-14 mt-20 flex items-center justify-center lg:flex xl:flex 2xl:flex flex-col  absolute"
      >
        <span
          class="font-Fraunces leading-13 lg:text-left lg:self-start self-center text-white font-black text-3xl md:text-5xl lg:text-5xl xl:text-5xl pb-6"
          >About Us</span
        >
        <span
          class="font-Barlow lg:text-left text-center self-center text-white text-base leading-7 md:leading-9 lg:leading-9 xl:leading-9"
          >Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.</span
        >
      </div>
      <div class="flex justify-center items-center">
        <img
          loading="lazy"
          class="rounded-lg quality-img w-full h-full block md:hidden lg:hidden xl:hidden 2xl:hidden"
          src="../../assets/assets/about/mobile/image-hero-whitecup.jpg"
        />
        <img
          loading="lazy"
          class="rounded-lg quality-img w-full h-full md:block hidden lg:hidden xl:hidden 2xl:hidden"
          src="../../assets/assets/about/tablet/image-hero-whitecup.jpg"
        />
        <img
          loading="lazy"
          class="rounded-lg quality-img w-full lg:h-1/3 hidden md:hidden lg:block xl:block 2xl:block"
          src="../../assets/assets/about/desktop/image-hero-whitecup.jpg"
        />
      </div>
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
</style>
