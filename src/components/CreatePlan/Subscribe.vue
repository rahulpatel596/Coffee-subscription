<template>
  <div class="pt-24 ml-52 w-80vw flex justify-start">
    <div><SubscribeLeftMenu /></div>
    <div class="flex-1 pl-28">
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
