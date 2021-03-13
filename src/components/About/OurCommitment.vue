<template>
  <div
    class="flex w-80vw -ml-10vw justify-center items-center   md:items-center flex-col md:flex-row lg:flex-row xl:flex-row md:justify-between pt-36"
  >
    <div class="flex items-center justify-center flex-col">
      <img
        class="rounded-lg block  items-center md:hidden"
        src="../../assets/assets/about/mobile/image-commitment.jpg"
      />
      <img
        class="rounded-lg items-center  hidden md:block lg:hidden"
        src="../../assets/assets/about/tablet/image-commitment.jpg"
      />
      <img
        class="rounded-lg  hidden lg:block"
        src="../../assets/assets/about/desktop/image-commitment.jpg"
      />
    </div>
    <div
      class="mt-10 md:mt-0 w-2/4 flex flex-col w-90vw md:w-2/4 md:ml-10 justify-center items-center"
    >
      <span
        class="font-Fraunces font-black text-3xl md:text-4xl lg:text-4xl xl:text-4xl items-center text-center md:text-left pb-3 md:leading-13 lg:leading-13 xl:leading-13"
        >Our commitment</span
      >
      <span
        class=" self-center mt-6 font-Barlow text-greyish md:leading-relaxed  items-center text-center md:text-left lg:leading-relaxed xl:leading-relaxed opacity-80"
        >We’re built on a simple mission and a commitment to doing good along
        the way. We want to make it easy for you to discover and brew the
        world’s best coffee at home. It all starts at the source. To locate the
        specific lots we want to purchase, we travel nearly 60 days a year
        trying to understand the challenges and opportunities in each of these
        places. We collaborate with exceptional coffee growers and empower a
        global community of farmers through with well above fair-trade
        benchmarks. We also offer training, support farm community initiatives,
        and invest in coffee plant science. Curating only the finest blends, we
        roast each lot to highlight tasting profiles distinctive to their native
        growing region.</span
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style>
.test {
  width: 80vw;
}
</style>
