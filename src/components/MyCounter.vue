<template>
  <section class="w-72 bg-amber-50 flex flex-col justify-center p-2">
    <div class="flex gap-3 justify-center mb-2">
      <h3>Counter: {{ counter }}</h3>
      -
      <h3>Square: {{ square }}</h3>
    </div>

    <div class="flex gap-1">
      <button class="btn btn-blue" @click="counter++">+1</button>
      <button class="btn btn-red" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

interface Props {
  counterValue: number
}

const { counterValue } = defineProps<Props>()

const counter = ref(counterValue)
const square = computed(() => counter.value * counter.value)
</script>

<style scoped>
@reference "tailwindcss";

.btn {
  @apply px-3 py-1 transition w-full cursor-pointer;
}

.btn-blue {
  @apply bg-blue-500 rounded hover:bg-blue-600;
}

.btn-red {
  @apply bg-red-500 rounded hover:bg-red-600;
}
</style>
