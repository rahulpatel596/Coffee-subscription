<template>
  <div>
    <div class="">
      <button
        v-on:click="setIsActive(ind)"
        class="pb-10 flex w-full justify-between items-center"
      >
        <span class="text-2xl md:text-4xl text-greyish font-black">{{
          title
        }}</span>
        <img
          v-bind:class="{ transform: isActive, 'rotate-180': isActive }"
          src="../../../assets/assets/plan/desktop/icon-arrow.svg"
        />
      </button>
      <div class="h-full">
        <OptionCard v-if="isActive" :options="options" :ind="ind" />
      </div>
    </div>
  </div>
</template>
<script>
import OptionCard from "./OptionCard.vue";

export default {
  components: {
    OptionCard,
  },
  methods: {
    setIsActive(index) {
      this.$store.commit({
        type: "setIsActive",
        index: index,
      });
    },
  },
  props: ["title", "options", "isActive", "ind"],
};
</script>
<style></style>
