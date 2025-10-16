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
