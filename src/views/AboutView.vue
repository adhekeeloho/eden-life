<script setup>
import Header from "../components/Header.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = route.params.id;
console.log(props);
</script>

<template>
  <!-- Dogs Details page -->
  <section class="relative mx-auto w-full bg-white">
    <Header />
    <div class="absolute w-full h-32"></div>
    <div
      class="relative  py-10 sm:py-12 md:py-16 md:px-10 max-w-7xl"
    >
      <p
        class="font-medium tracking-wide text-yellow-500 text-xl uppercase underline decoration-blue-100 decoration-double decoration-4 underline-offset-8 mb-3"
      >
        Zen Dogs
      </p>
      <h1
        class="mb-1 text-2xl font-extrabold leading-none text-gray-700 lg:text-3xl xl:text-3xl sm:mb-3"
      >
        <a href="#_">Adopt this dog.</a>
      </h1>
      <p class="text-lg font-medium text-gray-500 sm:text-2xl block">
        Did you know that dogs make 80% of humans on planet earth happy
        throughout their life time? Adopt me today and find out.
      </p>
      <div class="grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
        <div
          class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col"
        >
          <div
            class="w-full transition duration-300 ease-in-out transform bg-center bg-sky-300 h-96 flex justify-center hover:scale-110"
          >
            <img
              class="h-72 w-64 mt-12 rounded-xl"
              :src="props"
              loading="lazy"
            />
          </div>
          <div
            class="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-sky-400 border-t-0 border-sky-400 sm:h-full xl:h-auto px-7"
          >
            <a
              href="#_"
              class="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-sky-300 bg-white"
              >Read More</a
            >
            <h2 class="mb-5 text-5xl font-bold">
              <a href="#_">Zen Dogs Rock</a>
            </h2>
            <p class="mb-2 text-lg font-normal opacity-100 text-yellow-50">
              Learn about the amazings dogs we have.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
