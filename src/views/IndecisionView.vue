<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <MessageRecipient recipient="Mi amada esposa" />
    <ChatMessages :messages="messages" />
    <MessageBox @send-message="onMessage" />
  </div>
</template>

<script setup lang="ts">
import MessageRecipient from '@/components/chat/MessageRecipient.vue'
import ChatMessages from '@/components/chat/ChatMessages.vue'
import MessageBox from '@/components/chat/MessageBox.vue'
import { useChat } from '@/composables/useChat'

const { messages, onMessage } = useChat()
</script>
