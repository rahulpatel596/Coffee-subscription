<template>
  <div
    class="flex md:flex-row h-full flex-col w-full lg:w-5/6 md:h-15-6 pt-5 pb-5"
  >
    <div
      class="h-full w-full flex justify-between"
      v-bind:key="index"
      v-for="(option, index) in options"
    >
      <button
        v-on:click="setIsSelected(index, ind)"
        class="rounded-lg justify-center md:pt-0 h-32 md:h-full w-11/12  mb-6 flex flex-col md:justify-evenly lg:hover:bg-skin lg:hover:text-black"
        v-bind:class="[option.isSelected ? 'bg-sweetGreen' : 'bg-dull']"
      >
        <span
          class="text-2xl font-black text-left pl-6"
          v-bind:class="[option.isSelected ? 'text-white' : 'text-black']"
          >{{ option.optionName }}</span
        >
        <span
          class="text-left pl-6"
          v-bind:class="[option.isSelected ? 'text-white' : 'text-black']"
          >{{ option.optionDesc }}</span
        >
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["options", "ind"],
  methods: {
    setIsSelected(optionIndex, menuIndex) {
      this.$store.commit({
        type: "setIsSelected",
        optionIndex: optionIndex,
        menuIndex: menuIndex,
      });
    },
  },
};
</script>
<style></style>
