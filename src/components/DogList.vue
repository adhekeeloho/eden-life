<template>
  <div>
    <div v-if="isloading">
       <div class="min-h-screen flex justify-center items-center bg-inherit">
            <div class="loader bg-blue-100 p-5 rounded-full flex space-x-3">
              <div
                class="w-5 h-5 bg-yellow-200 rounded-full animate-bounce"
              ></div>
              <div
                class="w-5 h-5 bg-blue-200 rounded-full animate-bounce"
              ></div>
              <div
                class="w-5 h-5 bg-pink-200 rounded-full animate-bounce"
              ></div>
            </div>
          </div>
    </div>
    <!-- List of Dogs from the api -->
    <div v-else-if="!isloading && Dogslists != null" >
    <section class="relative us py-20 overflow-hidden bg-white">
      <span data-aos="fade-left"
        class="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60"
      >
        <span 
          class="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-yellow-200"
        ></span>
      </span>

      <span class="absolute bottom-0 left-0"> </span>

      <div class="relative px-16 mx-auto max-w-7xl">
        <p data-aos="fade-right"
          class="font-medium tracking-wide text-yellow-500 text-xl uppercase underline decoration-blue-100 decoration-double decoration-4 underline-offset-8"
        >
          Zen Dogs
        </p>
        <h2 data-aos="fade-right"
          class="relative max-w-lg text-gray-700 mt-5 mb-10 text-2xl font-semibold leading-tight lg:text-3xl"
        >
          Want to adopt a Pet? <br />Check out our list of amazing dogs below.
        </h2>
        <div
          class="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="dogs in Dogslists"
            :key="dogs"
            class="flex flex-col items-center justify-center col-span-1"
            data-aos="fade-up"
                      data-aos-duration="3000" 
          >
            <div class="relative p-5 transition duration-500 hover:scale-125">
              <div
                class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-100"
              ></div>
              <img
                style="cursor: pointer"
                class="relative z-20 w-60 h-60 rounded-full"
                @click="$router.push({ name: 'about', params: { id: dogs } })"
                :src="dogs"
                loading="lazy"
              />
            </div>
            <div class="mt-3 space-y-2 text-center">
              <div class="space-y-1 text-lg font-medium leading-6">
                <h3 class="text-gray-700">Hi there,</h3>
                <p class="text-gray-700">Please adopt me.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

    <div v-else>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("fetchDogs");
    });

    const Dogslists = computed(() => {
      return store.state.Dogslists;
    });

    const isloading = computed(() => {
      return store.state.isloading;
    });
    

    return {
      Dogslists,
      isloading
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.us{
    font-family: 'Poppins', sans-serif;
}
</style>