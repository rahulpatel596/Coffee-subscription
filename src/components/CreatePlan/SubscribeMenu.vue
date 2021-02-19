<template>
  <div class="h-screen w-80vw -ml-10vw">
    <div class="menu flex flex-col">
      <span class="flex " v-for="(menuItem, index) in menu" v-bind:key="index">
        <span>{{ menuItem.number }}</span>
        <span>{{ menuItem.name }}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          number: "01",
          name: "Preferences",
        },
        {
          number: "02",
          name: "Bean Type",
        },
        {
          number: "03",
          name: "Quantity",
        },
        {
          number: "04",
          name: "Grind Option",
        },
        {
          number: "05",
          name: "Deliveries",
        },
      ],
    };
  },
};
</script>
<style>
.menu {
  height: 22.25rem;
}
</style>
