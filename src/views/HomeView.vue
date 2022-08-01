<template>
  <div class="home">
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

</style>
