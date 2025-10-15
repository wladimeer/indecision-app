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
