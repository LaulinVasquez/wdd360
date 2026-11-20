<script setup lang="ts">
import { ref } from 'vue';
import formLogin from './form-login.vue';

const count = ref<number>(0);

function increment() {
  count.value++;
}

function decrement(){
  count.value--;
}
</script>

<template>
  <main>
  <h1>Vue Counter</h1>
  
  <p> Count: {{ count }}</p>
  <p v-if="count > 10">
    Wow! we got High digits!
  </p>
  <p v-else-if="count > 0">
    keep counting
  </p>
  <p v-else>
    start counting
  </p>
  <button @click="increment"> Increment</button>
  <button v-on:click="decrement" v-bind:disabled="count === 0"> Decrement</button>

  <h3>Login Form</h3>
  <formLogin />
  </main>
</template>

<style>
  body{
    font-family: Arial, sans-serif;
    text-align: center;
  }
  h1{
    color: #333;
    font-size: 2em;
  }
  p{
    font-size: 1.5em;
    margin: 20px 0;
  }
  button{
    font-size: 1em;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>
