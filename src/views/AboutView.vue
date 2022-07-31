<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const props = route.params.id;
console.log(props);

</script>

<template>
    
<!-- Section 1 -->
<section class="py-20 bg-gray-50">
  <div class="container items-center max-w-6xl  px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div class="flex flex-wrap items-center -mx-3">
      <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div class="w-full lg:max-w-md">
          <h2 class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Dog Facts</h2>
          <p class="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">Dogs Are super Friendly and very loyal to their owners. Wanna Adopt.</p>

        </div>
      </div>
      <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img class="mx-auto sm:max-w-sm lg:max-w-full" :src="props"  alt="feature image"></div>
    </div>
  </div>
</section>

</template>
  

