<template>
  <Layout>
    <template #nav>
      <li><RouterLink to="/operator/order">订单浏览</RouterLink></li>
    </template>
    <template #default>
      <router-view />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/Layout.vue'
</script>

<style scoped></style>
