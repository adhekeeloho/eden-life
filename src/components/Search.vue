<template>
 <!-- search component -->
<div class=" us flex flex-col justify-center">
  <div class="relative  w-full sm:max-w-2xl sm:mx-auto">
    <div class="overflow-hidden z-0 rounded-full relative p-3">
      <div class="relative flex z-50 bg-white rounded-full">
        <select type="text"  class="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none" style="cursor: pointer;"
        v-model="selectedSearch"
        > <option class="bg-blue-100 capitalize"  v-for="search in BreadLists" :key="search" :value="search"> {{ search }}  </option>
        </select>
      </div>
      <div class="glow glow-1 z-10 bg-pink-200 absolute"></div>
      <div class="glow glow-2 z-20 bg-purple-200 absolute"></div>
      <div class="glow glow-3 z-30 bg-yellow-200 absolute"></div>
      <div class="glow glow-4 z-40 bg-blue-200 absolute"></div>
    </div>
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
      store.dispatch("searchDogs");
    });

    const BreadLists = computed(() => {
      return store.state.BreadLists;
    });

    const selectedSearch = computed((set) => {
        return store.getters['selectedSearch'];
    })
    console.log(selectedSearch);
    
    return {
      BreadLists,
      selectedSearch
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.us{
    font-family: 'Poppins', sans-serif;
}

.glow {
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  border-radius: 100%;
}

.glow-1 {
  animation: glow1 4s linear infinite;
}

.glow-2 {
  animation: glow2 4s linear infinite;
  animation-delay: 100ms;
}

.glow-3 {
  animation: glow3 4s linear infinite;
  animation-delay: 200ms;
}

.glow-4 {
  animation: glow4 4s linear infinite;
  animation-delay: 300ms;
}

@keyframes glow1 {
  0% {
    transform: translate(10%, 10%) scale(1);
  }
  25% {
    transform: translate(-10%, 10%) scale(1);
  }
  50% {
    transform: translate(-10%, -10%) scale(1);
  }
  75% {
    transform: translate(10%, -10%) scale(1);
  }
  100% {
    transform: translate(10%, 10%) scale(1);
  }
}

@keyframes glow2 {
  0% {
    transform: translate(-10%, -10%) scale(1);
  }
  25% {
    transform: translate(10%, -10%) scale(1);
  }
  50% {
    transform: translate(10%, 10%) scale(1);
  }
  75% {
    transform: translate(-10%, 10%) scale(1);
  }
  100% {
    transform: translate(-10%, -10%) scale(1);
  }
}

@keyframes glow3 {
  0% {
    transform: translate(-10%, 10%) scale(1);
  }
  25% {
    transform: translate(-10%, -10%) scale(1);
  }
  50% {
    transform: translate(10%, -10%) scale(1);
  }
  75% {
    transform: translate(10%, 10%) scale(1);
  }
  100% {
    transform: translate(-10%, 10%) scale(1);
  }
}

@keyframes glow4 {
  0% {
    transform: translate(10%, -10%) scale(1);
  }
  25% {
    transform: translate(10%, 10%) scale(1);
  }
  50% {
    transform: translate(-10%, 10%) scale(1);
  }
  75% {
    transform: translate(-10%, -10%) scale(1);
  }
  100% {
    transform: translate(10%, -10%) scale(1);
  }
}

</style>
