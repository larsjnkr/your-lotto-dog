<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else-if="draws">{{ draws[CURRENT] }}</div>
</template>

<script setup lang="ts">
import getDraws from "@/graphql/getDraws";
import Draw from "@/types/Draw";
import { useQuery, useResult } from "@vue/apollo-composable";

const CURRENT = 0;

const props = defineProps({
  type: { type: String, required: true },
});

const { result, loading, error } = useQuery(getDraws, {
  type: props.type,
  limit: 1, // because first is always current/latest
});

const draws: Draw[] = useResult(result, null, (data) =>
  data.draw.draws.map(Draw.toDraw)
);
</script>

<style lang="scss" scoped></style>
