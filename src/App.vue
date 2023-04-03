<script setup lang="ts">
import Navbar from "@/components/navbar.vue";
</script>

<template>
  <Navbar class="sticky top-0" />
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
