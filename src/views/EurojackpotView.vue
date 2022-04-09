<template>
  <section>
    <h1>Current Eurojackpot draw:</h1>
    <DrawingComponent type="eurojackpot" />
    <router-link to="/">back</router-link>
  </section>
</template>

<script setup lang="ts">
import DrawingComponent from "../components/DrawingComponent.vue";
</script>

<style scoped></style>
