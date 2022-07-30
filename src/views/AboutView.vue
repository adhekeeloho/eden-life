<!-- <template>
  <div class="about">
    
    <div v-for="(movie) in movies" :key="movie.id"> 
    <h1>{{movie}}</h1>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";
import { useStore } from"vuex";
export default {
  setup() {
    const route = useRoute();
    const props = route.params.id;

    const store = useStore();

// const countries = computed(() => store.state.countries);
// const gates = created(() => store.state.gates);

const movies = onMounted((props) => store.state.movies);

    return{
      props,
      movies,
    }
  },
}
</script> -->
