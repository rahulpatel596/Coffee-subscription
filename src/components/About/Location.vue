<template>
  <div>
    <span class="">{{ name }}</span>
    <div>
      <span>{{ street }}</span>
      <span>{{ city }}</span>
      <span>{{ state }}</span>
      <span>{{ contact }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Location",
  components: {},
  props: ["locationImage", "name", "street", "city", "state", "contact"],
};
</script>
<style></style>
