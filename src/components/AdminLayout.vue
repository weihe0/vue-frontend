<template>
  <Layout>
    <template #nav>
      <li><RouterLink to="/admin/order">订单管理</RouterLink></li>
      <li><RouterLink to="/admin/user">用户管理</RouterLink></li>
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
