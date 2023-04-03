<template>
  <h1 class="text-center text-4xl font-extrabold text-gray-600 mt-12">
    Sign up
  </h1>
  <div class="grid h-screen place-items-center pt-8">
    <div class="max-w-lg px-2 text-center w-11/12 sm:w-96">
      <!-- SEARCH BAR -->
      <div class="flex flex-col">
        <label class="text-left text-3xl font-bold mb-4">Name:</label>
        <div class="input-group flex min-w-full">
          <input type="text" class="input w-2/3" v-model="userName" />
          <button class="btn btn-blue" @click="signup">Sign up</button>
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

const userName = ref("");
const errorMsg = ref("");

const router = useRouter();

function signup() {
  const data: [{ userName: String; favoriteMovie: [] }] = JSON.parse(
    localStorage.getItem("data") || "[]"
  );
  if (!data.find((el) => el.userName == userName.value)) {
    data.push({ userName: userName.value, favoriteMovie: [] });
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("currentUser", userName.value);
    router.push("search");
  } else {
    errorMsg.value = "Name alrady exist!";
  }
}
</script>

<style scoped>
</style>