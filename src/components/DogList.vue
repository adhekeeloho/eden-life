<template>

<div>
</div>
<div>
   
<!-- Section 1 -->
<section class="py-20 bg-white">
    <div class="container max-w-6xl mx-auto" >
        <h2 class="text-4xl font-bold tracking-tight text-center">Dog List</h2>
        <p class="mt-2 text-lg text-center text-gray-600">Check out our list of awesome dogs below.</p>
        <div  class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

            <div v-for="dogs in Dogslists" :key="dogs" class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
                <div class="p-3 text-white">
                   <img @click="$router.push({ name: 'about', params: { id: dogs } })" class="h-60 w-64 rounded-lg" :src="dogs" loading="lazy">
                </div>
            </div>


        </div>
    </div>
</section>

</div>

</template>

<script>
import { useStore } from"vuex";
import { computed, ref, onMounted } from "vue";

export default {
   setup(){
const store = useStore();

onMounted(() => {
  store.dispatch("fetchDogs");
})

const Dogslists = computed(() => {
  return store.state.Dogslists
})

return {
   Dogslists,
}
   }
}

</script>

<style scoped>
.let{
   height: 200px;
   width: 150px;
}
</style>

