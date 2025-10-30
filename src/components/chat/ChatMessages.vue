<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubble v-for="{ id, ...props } in messages" :key="id" v-bind="props" />
      <ChatBubbleTyping />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message-interface'
import ChatBubble from './ChatBubble.vue'
import ChatBubbleTyping from './ChatBubbleTyping.vue'
import { nextTick, onMounted, ref, watch } from 'vue'
import { useTyping } from '@/composables/useTyping'

interface Props {
  messages: ChatMessage[]
}

const { messages } = defineProps<Props>()

const chatRef = ref<HTMLDivElement | null>(null)

const { isUserTyping } = useTyping()

const scrollToBottom = async () => {
  await nextTick()

  const images = chatRef.value?.querySelectorAll('img') ?? []

  await Promise.all(
    Array.from(images).map((img) => {
      new Promise((resolve) => {
        if (img.complete) resolve(true)
        else img.addEventListener('load', () => resolve(true), { once: true })
      })
    })
  )

  chatRef.value?.scrollTo({
    top: chatRef.value.scrollHeight,
    behavior: 'smooth'
  })
}

watch(
  [() => messages.length, () => isUserTyping],
  () => {
    scrollToBottom()
  },
  { immediate: true }
)

onMounted(scrollToBottom)
</script>
