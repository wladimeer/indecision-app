import { ref } from 'vue'

const isUserTyping = ref(false)

const useTyping = () => {
  const startTyping = () => {
    isUserTyping.value = true
  }

  const stopTyping = () => {
    isUserTyping.value = false
  }

  return { isUserTyping, startTyping, stopTyping }
}

export { useTyping }
