<template>
  <h1 class="text-4xl font-extrabold text-gray-600 ml-4 my-6">
    {{ userName }} FAVORITE MOVIES
  </h1>
  <div class="flex flex-wrap mx-4">
    <div
      class="w-96 mx-auto my-2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/5"
      v-for="movie in favoriteMovies"
      :key="movie.imdbID"
    >
      <div class="bg-white m-2 shadow-sm rounded-md cursor-pointer">
        <img
          :src="movie.Poster"
          :alt="movie.Title"
          class="w-full my-2 rounded-t-md"
        />
        <div className="px-6 py-2">
          <h3 className="font-bold text-xl mb-1">{{ movie.Title }}</h3>
          <p className="text-gray-700 text-base mb-1">{{ movie.Released }}</p>
          <p class="">
            <strong class="font-semibold">Genre:</strong> {{ movie.Genre }}
          </p>
          <p>
            <strong class="font-semibold">Actors:</strong>{{ movie.Actors }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const userName = localStorage.getItem("currentUser");

const data: any[] = reactive(JSON.parse(localStorage.getItem("data") || "[]"));

const favoriteMovies = data.find((el) => el.userName == userName).favoriteMovie;
</script>

<style scoped>
</style>