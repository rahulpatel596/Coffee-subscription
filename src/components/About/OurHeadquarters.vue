<template>
  <div
    class="w-80vw md:w-80vw h-full mt-20 items-center -ml-10vw flex flex-col pt-30 justify-evenly"
  >
    <span class="font-black leading-8 text-2xl text-greyish"
      >Our headquarters</span
    >
    <div
      class="flex justify-around md:justify-around md:w-full flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row"
    >
      <Location
        v-for="(location, index) in locations"
        v-bind:key="index"
        v-bind:locationImage="location.locationImage"
        v-bind:name="location.locationName"
        v-bind:street="location.street"
        v-bind:city="location.city"
        v-bind:state="location.state"
        v-bind:contact="location.contact"
      />
    </div>
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
