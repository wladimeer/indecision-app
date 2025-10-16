import { computed, ref } from 'vue'

const useCounter = (initialValue: number = 1) => {
  const counter = ref(initialValue)
  const square = computed(() => counter.value * counter.value)

  const increaseCounter = () => {
    counter.value++
  }

  const decreaseCounter = () => {
    counter.value--
  }

  return { counter, square, increaseCounter, decreaseCounter }
}

export { useCounter }
