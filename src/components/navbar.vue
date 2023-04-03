<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, onUpdated, ref } from "vue";

let userName = ref(localStorage.getItem("currentUser"));

const isLoggedIn = ref(false);

const route = useRoute();
const path = computed(() => {
  isLoggedIn.value = ["/search", "/favorite-movies"].find(
    (el) => el == route.path
  )
    ? true
    : false;
  return route.path;
});
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
      <div class="w-full">
        <ul
          class="font-medium w-full flex justify-around p-0 mt-0 border-gray-100 rounded-lg space-x-8 border-0 bg-white dark:border-gray-700"
        >
          <div class="flex" v-if="isLoggedIn">
            <li>
              <router-link
                :class="[
                  path == '/search' ? 'router-link-active' : 'deactivated-link',
                ]"
                to="search"
                >Search</router-link
              >
            </li>
            <li>
              <router-link
                :class="[
                  path == '/favorite-movies'
                    ? 'router-link-active'
                    : 'deactivated-link',
                ]"
                to="favorite-movies"
                >Favorite Movies</router-link
              >
            </li>
          </div>

          <div class="flex" v-if="isLoggedIn">
            <router-link
              :class="[
                path == '/login' ? 'router-link-active' : 'deactivated-link',
              ]"
              to="/login"
              >Logout</router-link
            >
          </div>
          <div class="flex" v-if="!isLoggedIn">
            <li>
              <router-link
                :class="[
                  path == '/login' ? 'router-link-active' : 'deactivated-link',
                ]"
                to="/login"
                >Login</router-link
              >
            </li>
            <li>
              <router-link
                :class="[
                  path == '/signup' ? 'router-link-active' : 'deactivated-link',
                ]"
                to="/signup"
                >Sign up</router-link
              >
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>