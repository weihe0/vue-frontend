<template>
  <form @submit.prevent="signUp">
    <div>
      <label>用户名</label>
      <input v-model="userAuth.username" type="text" />
    </div>
    <span v-show="errors.registered" class="error">您输入的用户名已被注册</span>
    <div>
      <label>密码</label>
      <input v-model="userAuth.password" type="password" />
    </div>
    <div>
      <label>确认密码</label>
      <input v-model="confirmPassword" type="password" />
    </div>
    <span v-show="errors.mismatch" class="error">两次输入的密码不一致</span>
    <div>
      <button type="submit">注册</button>
      <RouterLink to="/sign/in">老用户请点击这里登录</RouterLink>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
const userAuth = reactive({ username: '', password: '' })
const confirmPassword = ref('')
const errors = reactive({ registered: false, mismatch: false })
const router = useRouter()
function signUp() {
  if (userAuth.password !== confirmPassword.value) {
    errors.mismatch = true
  } else {
    router.replace('/operator/order')
  }
}
</script>

<style scoped>
form {
  border: solid black 1px;
  border-radius: 1em;
  width: 30%;
}
.error {
  color: red;
  font-size: x-small;
}
</style>
