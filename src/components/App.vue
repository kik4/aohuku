<template>
  <div>
    <p>{{ threads.length }}</p>
    <ul>
      <li v-for="thread in threads" :key="thread.id">
        {{ thread.id }}
      </li>
    </ul>
  </div>
</template>
<script src="./App.vue.ts" lang="ts"></script>