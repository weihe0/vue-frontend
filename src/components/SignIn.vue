<template>
  <form @submit.prevent="signIn">
    <div>
      <label>用户名</label>
      <input v-model="userAuth.username" type="text" />
    </div>
    <div>
      <label>密码</label>
      <input v-model="userAuth.password" type="password" />
    </div>
    <span v-show="isError" class="error">您输入的用户名或密码不正确</span>
    <div>
      <button>登录</button>
      <RouterLink to="/sign/up">新用户请点击这里注册</RouterLink>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const userAuth = reactive({ username: '', password: '' })
const isError = ref(false)
import { useRouter } from 'vue-router'

const router = useRouter()
function signIn() {
  if (userAuth.username === 'admin') {
    router.replace('/admin/order')
  } else {
    router.replace('/operator/order')
  }
}
</script>

<style scoped>
form {
  width: 30%;
  border: solid black 1px;
  border-radius: 1em;
}
.error {
  color: red;
  font-size: x-small;
}
</style>
