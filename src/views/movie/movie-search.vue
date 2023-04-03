<template>
  <div class="grid h-screen place-items-center">
    <div class="max-w-lg px-2 text-center w-11/12 sm:w-96">
      <!-- SEARCH BAR -->
      <div class="flex flex-col">
        <label class="text-3xl font-bold mb-4">Serach your movie!</label>
        <div class="input-group flex min-w-full">
          <input type="text" class="input w-3/4" v-model="title" />
          <button class="btn btn-blue" @click="search">Search</button>
        </div>
      </div>
      <!-- SEARCH RESULT -->
      <div class="text-left" v-if="movie.Title">
        <div class="font-bold flex justify-between">
          <h3>{{ movie.Title }}</h3>
          <button @click="addToFavorites">
            <svg
              v-if="true"
              aria-hidden="true"
              class="w-10 h-10 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              v-if="false"
              aria-hidden="true"
              class="w-10 h-10 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </button>
        </div>
        <p class="text-gray-700 text-base">{{ movie.Released }}</p>
        <p class="">
          <strong class="font-semibold">Genre: </strong>{{ movie.Genre }}
        </p>
        <p><strong class="font-semibold">Actors: </strong>{{ movie.Actors }}</p>
        <p><strong class="font-semibold">Plot: </strong>{{ movie.Plot }}</p>
        <img class="mx-auto mt-4" :src="movie.Poster" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const API_ENDPOINT = "http://www.omdbapi.com/?";
const API_KEY = "&apikey=6f47ce16";

const router = useRouter();

const title = ref("");
let movie = reactive({});

const userName = ref(localStorage.getItem("currentUser"));

async function search() {
  try {
    let URI = `${API_ENDPOINT}t=${title.value}${API_KEY}`;
    const { data } = await axios.get(URI);
    Object.assign(movie, data);
  } catch (err) {
    router.push("not-found");
  }
}

function addToFavorites() {
  const data = JSON.parse(localStorage.getItem("data") || "[]");

  if (
    !data
      .find((el) => el.userName == userName.value)
      .favoriteMovie.find((el) => el.imdbID == movie.imdbID)
  )
    data
      .find((el) => el.userName == userName.value)
      .favoriteMovie.push({ ...movie });
  localStorage.setItem("data", JSON.stringify(data));
}
</script>

<style scoped>
</style>