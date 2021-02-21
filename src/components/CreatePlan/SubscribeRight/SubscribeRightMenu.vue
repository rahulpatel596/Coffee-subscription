<template>
  <div class="w-full h-screen">
    <div class="w-full h-full ">
      <div>
        <OptionMenu
          v-bind:key="index"
          v-for="(menuItem, index) in menu"
          v-bind:title="menuItem.title"
          v-bind:ind="index"
          v-bind:options="menuItem.options"
          v-bind:isActive="menuItem.isActive"
        />
      </div>
    </div>
  </div>
</template>
<script>
import OptionMenu from "./OptionMenu";
export default {
  data() {},
  computed: {
    menu() {
      return this.$store.getters.getMenuRight;
    },
  },
  components: {
    OptionMenu,
  },
};
</script>
<style></style>
