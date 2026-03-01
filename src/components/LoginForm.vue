<script setup lang="ts">
import { ref } from 'vue'; 
const username = ref('');
const password = ref('');

const handleSubmit = () => { console.log('Form submmited with :', username.value , password.value);};
</script>

<template>
<div class="flex items-center justify-center min-h-screen bg-gray-50 p-4">
    <div class="w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
        <h2 class="mb-6 text-center text-2xl font-bold text-gray-800">Login</h2>
        <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="mb-6">
                <label class="mb-2 block text-sm font-medium text-gray-700">Username</label>
                <input
                v-model="username"
                type="text" 
                class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                placeholder="Enter your username" />
            </div>
            <div class="mb-6">
                <label class="mb- block text-sm font-medium text-gray-700">Password</label>
                <input 
                v-model="password"
                type="password" 
                class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                placeholder="••••••••" />
            </div>
            <button 
            type="submit" 
            class="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition duration-200 hover:bg-blue-700 active:bg-blue-800">
            Sign In
            </button>
        </form>
        <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account? <a href="#" class="text-blue-600 hover:underline">Sign up</a>
        </p>
    </div>
</div>
</template>

<style scoped>

</style>
