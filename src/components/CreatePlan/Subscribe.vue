<template>
  <div
    class="pt-24 md:justify-center lg:ml-52 md:-ml-10vw md:w-80vw -ml-5vw  w-90vw  flex justify-start"
  >
    <SubscribeLeftMenu />
    <div class="flex-1 lg:pl-28">
      <SubscribeRightMenu />
    </div>
  </div>
</template>
<script>
import SubscribeLeftMenu from "./SubscribeLeftMenu";
import SubscribeRightMenu from "./SubscribeRight/SubscribeRightMenu";

export default {
  components: {
    SubscribeLeftMenu,
    SubscribeRightMenu,
  },
};
</script>
<style></style>
