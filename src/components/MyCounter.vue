<template>
  <section class="w-72 bg-amber-50 flex flex-col justify-center p-2">
    <div class="flex gap-3 justify-center mb-2">
      <h3 data-testid="counter">Counter: {{ counter }}</h3>
      -
      <h3 data-testid="square">Square: {{ square }}</h3>
    </div>

    <div class="flex gap-1">
      <button data-testid="btn-increase" class="btn btn-blue" @click="increaseCounter">+1</button>
      <button data-testid="btn-decrease" class="btn btn-red" @click="decreaseCounter">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter'

interface Props {
  counterValue: number
}

const { counterValue } = defineProps<Props>()
const { counter, square, increaseCounter, decreaseCounter } = useCounter(counterValue)
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
