<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

interface Props {
  counterValue: number
}

export default defineComponent({
  props: {
    counterValue: Number
  },
  setup(props: Props) {
    const { counterValue } = props

    const counter = ref(counterValue)
    const square = computed(() => counter.value * counter.value)

    return {
      counter,
      square
    }
  }
})
</script>
