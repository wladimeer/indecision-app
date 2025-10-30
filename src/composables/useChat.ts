import type { ChatMessage } from '@/interfaces/chat-message-interface'
import { getResponse } from '@/api/yesnoapi'
import { ref } from 'vue'

const useChat = () => {
  const messages = ref<ChatMessage[]>([
    {
      id: new Date().getTime(),
      message: 'Hola, cómo estás?',
      itsMine: true
    },
    {
      id: new Date().getTime() + 1,
      message: 'Hola, bien y tú?',
      itsMine: false,
      image: 'https://yesno.wtf/assets/no/0-b6d3e555af2c09094def76cf2fbddf46.gif'
    }
  ])

  const onMessage = async (text: string) => {
    const recipient = await getResponse()

    messages.value.push(
      {
        id: new Date().getTime(),
        message: text,
        itsMine: true
      },
      {
        id: new Date().getTime() + 1,
        message: recipient?.answer ?? '',
        itsMine: false,
        image: recipient?.image
      }
    )
  }

  return {
    messages,
    onMessage
  }
}

export { useChat }
