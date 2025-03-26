<script setup>
import { useAuthStore } from '@/stores/auth';

definePageMeta({
    layout: 'center',
});

useHead({
    title: 'Login',
});

const store = useAuthStore();

const onSubmit = async (values) => {
    const success = await store.login(values.username, values.password);

    if (success) {
        await navigateTo('/');
    }
}
</script>

<template>
    <main class="relative w-full h-screen flex items-center justify-center">
        <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay loop muted>
            <source src="assets/videoes/lofi-anime.mp4" type="video/mp4" />
        </video>
        <div class="absolute flex justify-center items-center s w-[500px] h-[300px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
             <div>
                 <LoginForm @submit="onSubmit" />
        <BaseErrorMessage>{{ store.userError }}</BaseErrorMessage>
             </div>  
         
        </div>
    </main>
</template>