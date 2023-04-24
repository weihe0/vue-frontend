<template>
  <main>
    <nav>
      <ul>
        <slot name="nav"></slot>
      </ul>
    </nav>
    <div class="sketch">
      <div><button @click="signout">登出</button></div>
      <slot></slot>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function signout() {
  router.replace('/sign/in')
}
</script>

<style scoped>
main {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
  overflow: hidden;
}
.sketch {
  display: grid;
  grid-template-rows: 2em auto;
}
</style>
