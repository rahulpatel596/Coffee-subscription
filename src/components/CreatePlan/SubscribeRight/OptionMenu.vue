<template>
  <div>
    <div class="">
      <button v-on:click="setIsActive(ind)" class="">
        <span class="text-4xl text-greyish font-black">{{ title }}</span>
      </button>
      <div class="">
        <OptionCard v-if="isActive" :options="options" />
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
