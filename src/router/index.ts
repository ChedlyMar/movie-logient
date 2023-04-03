import { createRouter, createWebHashHistory } from "vue-router";

import MovieSearch from "@/views/movie/movie-search.vue";
import FavoriteMovies from "@/views/movie/movie-favorite.vue";
import Login from "@/views/user/user-login.vue";
import Signup from "@/views/user/user-signup.vue";
import NotFound from "@/views/not-found.vue";

const routes = [
  { path: "/", redirect: "search" },
  { path: "/search", component: MovieSearch },
  { path: "/favorite-movies", component: FavoriteMovies },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
