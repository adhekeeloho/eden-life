<template>
<div v-for="(movie) in movies" :key="movie.id" >
{{movie.title}}
<h1 @click="$router.push({name: 'about', params: { id: movie.id}})">Learning Vuex</h1>
</div>

</template>

<script>
import { useStore } from"vuex";
import { computed, ref, onMounted } from "vue";

export default {
   setup(){
const store = useStore();


const movies = computed(() => store.state.movies);


return {
   movies,
}
   }
}


// const gates = onMounted(() => $store.state.gates);
</script>

<style scoped>
.let{
   height: 200px;
   width: 150px;
}
</style>

