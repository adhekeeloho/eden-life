<template>
  <div class="home it">
    <Header/>
    <Search/>
      <DogList/>
  </div>
</template>

<script setup>
import Search from "../components/Search.vue";
import DogList from "@/components/DogList.vue";
import Header from "../components/Header.vue";

</script>

<style scoped>
.it{
  background-image: url(https://patternico.com/#ND5SOrnO49twN2MM);
  background-size: cover;
}
</style>
