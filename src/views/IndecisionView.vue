<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <MessageRecipient recipient="Mi amada esposa" />
    <ChatMessages :messages="messages" />
    <MessageBox />
  </div>
</template>

<script setup lang="ts">
import MessageRecipient from '@/components/chat/MessageRecipient.vue'
import ChatMessages from '@/components/chat/ChatMessages.vue'
import MessageBox from '@/components/chat/MessageBox.vue'
import type { ChatMessage } from '@/interfaces/chat-message-interface'
import { ref } from 'vue'

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
</script>
