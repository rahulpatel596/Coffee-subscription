<template>
  <div>
    <span>Our headquarters</span>
    <Location
      v-for="(index, location) in locations"
      v-bind:key="index"
      v-bind:locationImage="location.locationImage"
      v-bind:name="location.locationName"
      v-bind:street="location.street"
      v-bind:city="location.city"
      v-bind:state="location.state"
      v-bind:contact="location.contact"
    />
  </div>
</template>

<script>
import Location from "./Location.vue";
import locationImage1 from "../../assets/assets/about/desktop/illustration-uk.svg";
import locationImage2 from "../../assets/assets/about/desktop/illustration-canada.svg";
import locationImage3 from "../../assets/assets/about/desktop/illustration-australia.svg";

export default {
  components: {
    Location,
  },
  data() {
    return {
      locations: [
        {
          locationImage: locationImage1,
          locationName: "United Kingdom",
          street: "68 Asfordby Rd",
          city: "Alcaston",
          state: "SY6 1YA",
          contact: "+44 1241 918425",
        },
        {
          locationImage: locationImage2,
          locationName: "Canada",
          street: "1528  Eglinton Avenue",
          city: "Toronto",
          state: "Ontario M4P 1A6",
          contact: "+1 416 485 2997",
        },
        {
          locationImage: locationImage3,
          locationName: "Australia",
          street: "36 Swanston Street",
          city: "Kewell",
          state: "Victoria",
          contact: "+61 4 9928 3629",
        },
      ],
    };
  },
};
</script>
<style></style>
