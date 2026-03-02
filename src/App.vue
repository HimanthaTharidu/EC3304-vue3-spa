<script setup lang="ts">
import LoginForm from "@/components/LoginForm.vue"
import { useAuth } from "./composable/useAuth";

const {isLoggedIn, logout} = useAuth();
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <LoginForm v-if="!isLoggedIn"/>
        <div v-else class="p-8 text-center">
            <h1 class="text-3xl font-bold mb-4">Welcome to the Dashbord!</h1>
            <button
            @click="logout"
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
            Logout
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>
