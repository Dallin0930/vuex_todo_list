<template>
  <div id="app">
    <todoList msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>

import todoList from './components/todoList.vue'

export default {
  name: 'app',
  components: {
    todoList
  }
}
</script>