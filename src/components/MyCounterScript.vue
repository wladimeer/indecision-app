<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>

    <div>
      <button @click="increaseCounter">+1</button>
      <button @click="decreaseCounter">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter'
import { defineComponent } from 'vue'

interface Props {
  counterValue: number
}

export default defineComponent({
  props: {
    counterValue: Number
  },
  setup(props: Props) {
    const { counterValue } = props

    const { counter, square, increaseCounter, decreaseCounter } = useCounter(counterValue)

    return {
      counter,
      square,
      increaseCounter,
      decreaseCounter
    }
  }
})
</script>
