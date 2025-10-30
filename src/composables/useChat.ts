import type { ChatMessage } from '@/interfaces/chat-message-interface'
import { getResponse } from '@/api/yesnoapi'
import { sleep } from '@/helpers/sleep'
import { useTyping } from './useTyping'
import { ref } from 'vue'

const useChat = () => {
  const { startTyping, stopTyping } = useTyping()

  const messages = ref<ChatMessage[]>([
    {
      id: new Date().getTime(),
      message: 'Hola, cómo estás?',
      itsMine: true
    },
    {
      id: new Date().getTime() + 1,
      message: 'Hola, bien y tú?',
      itsMine: false
    }
  ])

  const RESPONSE_DICT: Record<string, string> = {
    yes: 'Sí',
    no: 'No'
  }

  const onMessage = async (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMine: true
    })

    if (!text.endsWith('?')) return

    startTyping()

    await sleep()

    stopTyping()

    const { answer, image } = await getResponse()

    messages.value.push({
      id: new Date().getTime() + 1,
      message: RESPONSE_DICT[answer],
      itsMine: false,
      image
    })
  }

  return {
    messages,
    onMessage
  }
}

export { useChat }
