<script setup lang="ts">
import DogFace from "./components/DogFace.vue";
</script>

<template>
  <header>
    <router-link to="/">
      <DogFace />
    </router-link>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style>
@import "@/assets/base.css";

#app {
  text-align: center;
  padding: 1rem 2rem;
}
</style>
