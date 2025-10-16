<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>

    <div>
      <button @click="increaseCounter">+1</button>
      <button @click="decreaseCounter">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2"></script>
