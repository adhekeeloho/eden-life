<script setup>

import { useRoute } from "vue-router";
import Header from "@/components/Header.vue";

const route = useRoute();

const props = route.params.id;
console.log(props);
</script>

<template>
  <div class="us">
    <Header/>
    <!-- Dogs Details page -->
    <div class="flex justify-end mb-3" ><a class="bg-pink-500 flex items-center mr-10 px-3 py-3 leading-none rounded-lg text-xs font-medium uppercase text-white" style="cursor: pointer;" @click="$router.push({name: 'home'})" >Back</a></div>
    <div class="mx-10 mb-5" data-aos="zoom-in-up">
      <p class="font-medium tracking-wide text-center text-yellow-500 text-xl uppercase underline decoration-blue-100 decoration-double decoration-4 underline-offset-8 mb-5"
      >
        Zen Dogs
      </p>
      <h1
        class="mb-1 text-2xl text-center font-extrabold leading-none text-gray-700 lg:text-3xl xl:text-3xl sm:mb-3"
      >
        <a href="#_">Adopt this dog.</a>
      </h1>
      <p class="text-lg text-center font-medium text-gray-500 sm:text-2xl block">
        Did you know that dogs make 80% of humans on planet earth happy
        throughout their life time? Adopt me today and find out.
      </p>
    </div>
  
<section class="bg-white" data-aos="zoom-in-up">
    <div class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">

        <div class="flex flex-col items-center sm:px-5 md:flex-row">
            <div class="w-full md:w-1/2">
                <div class="block">
                    <img class="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" :src="props" loading="lazy">
                </div>
            </div>
            <div class="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                    <div class="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white ">
                        <svg class="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span>Adopt</span>
                    </div>
                    <h1 class="text-3xl font-bold text-gray-700 leading-none lg:text-4xl xl:text-4xl"><a href="#_">Amazing Dogs. Awesome Pets.</a></h1>
                     <h2 class="mb-2 text-xl font-bold">
              <a href="#_" class="text-blue-300 ">Zen Dogs Rock</a>
            </h2>
            <p class="mb-2 text-lg text-gray-700 font-normal opacity-100 ">
              Learn about the amazing dogs we have.
            </p>
                </div>
            </div>
        </div>

    </div>
</section>

  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.us{
    font-family: 'Poppins', sans-serif;
}
</style>