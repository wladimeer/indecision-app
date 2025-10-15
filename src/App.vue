<template>
  <h1 class="text-3xl font-bold underline">MFA!</h1>
  <hr />

  <MyCounter :counterValue="1" />
  <MyCounterScript :counterValue="2" />
  <MyCounterScript2 :counterValue="3" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue'
import MyCounterScript from './components/MyCounterScript.vue'
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue'
</script>
