<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>订单号</td>
          <td>颜色</td>
          <td>成分</td>
          <td>产量</td>
          <td>位置</td>
          <td>动作</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>金属色</td>
          <td>3</td>
          <td>4</td>
          <td>1号门</td>
          <td><button @click="edit(0)">编辑</button><button>优先</button><button>删除</button></td>
        </tr>
      </tbody>
    </table>
    <button @click="show = true">添加</button>
  </div>
  <teleport to="body">
    <div v-show="show" class="overlay">
      <form @submit.prevent="">
        <div>
          <label>颜色</label>
          <select>
            <option>红色</option>
            <option>黄色</option>
            <option>金属色</option>
          </select>
        </div>
        <div>
          <label>成分</label>
          <input type="number" />
        </div>
        <div>
          <label>产量</label>
          <input type="number" />
        </div>
        <div>
          <label>位置</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div>
          <button type="button" @click="add">添加</button>
          <button type="reset" @click="show = false">取消</button>
        </div>
      </form>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
function openDialog() {
  show.value = true
}
function closeDialog() {
  show.value = false
}
function add() {
  show.value = false
}
function edit(i: number) {
  show.value = true
}
function remove(i: number) {
  show.value = true
}
function prioritize(i: number) {}
</script>

<style scoped>
div {
  display: grid;
}

div table {
  place-self: center;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(20, 20, 20, 0.8);
  display: grid;
}
.overlay form {
  place-self: center;
  background-color: white;
  width: 30%;
}
</style>
