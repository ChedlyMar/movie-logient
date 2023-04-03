<template>
  <h1 class="text-center text-4xl font-extrabold text-gray-600 mt-12">Login</h1>
  <div class="grid h-screen place-items-center">
    <div class="max-w-lg px-2 text-center w-11/12 sm:w-96">
      <!-- SEARCH BAR -->
      <div class="flex flex-col">
        <label class="text-left text-3xl font-bold mb-4">Name</label>
        <div class="input-group flex min-w-full">
          <input type="text" class="input w-3/4" v-model="userName" />
          <button class="btn btn-blue" @click="login">Login</button>
        </div>
        <spam v-if="errorMsg" class="text-left text-red-600">{{
          errorMsg
        }}</spam>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

localStorage.setItem("currentUser", "");

const userName = ref("");
const errorMsg = ref("");

const router = useRouter();

function login() {
  const data = JSON.parse(localStorage.getItem("data") || "[]");

  if (data.find((el) => el.userName == userName.value)) {
    localStorage.setItem("currentUser", userName.value);
    router.push("search");
  } else {
    errorMsg.value = "Sorry wrong name!";
  }
}
</script>

<style scoped>
</style>