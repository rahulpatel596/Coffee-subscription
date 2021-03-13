<template>
  <div class="menu flex flex-col hidden lg:flex">
    <ul class="w-full flex flex-col justify-evenly">
      <li class="" v-for="(menuItem, index) in menu" v-bind:key="index">
        <button
          v-on:click="setCurrent(index)"
          class="focus:outline-none flex space-x-10 font-black pl-2 pb-2 pt-2"
        >
          <span
            v-bind:class="[
              index === currentIndex ? 'text-sweetGreen' : 'opacity-40',
            ]"
            >{{ menuItem.number }}</span
          ><span
            v-bind:class="[
              index === currentIndex ? 'text-black-700' : 'opacity-40',
            ]"
            >{{ menuItem.name }}</span
          >
        </button>
        <hr />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    setCurrent(index) {
      this.$store.commit({
        type: "setCurrentIndex",
        index: index,
      });
    },
  },

  computed: {
    menu() {
      return this.$store.getters.getMenuLeft;
    },
    currentIndex() {
      return this.$store.getters.getCurrentIndex;
    },
  },
};
</script>
<style>
.menu {
  height: 456px;
  font-size: 1.775rem;
  width: 17.9rem;
}
</style>
