<script setup>
import { useAuthStore } from '@/stores/auth';

definePageMeta({
    layout: 'center',
});

// TODO: 6. ใส่ useHead();
useHead({
    title: 'Login',
});

const store = useAuthStore();


// TODO: 1. variables
const normalVariable = 1;
const reactiveVariable = ref(1); // render real time 

// TODO: 2. console
console.log('normalVariable', normalVariable);
console.log('reactiveVariable', reactiveVariable);
console.log('reactiveVariable.value', reactiveVariable.value);


// TODO: 7. เตรียมรับมือต่อว่าถ้า submit แล้วจะทำอะไร

const onSubmit = async (values) => {
    const success = await store.login(values.username, values.password);

    if (success) {
        await navigateTo('/');
    }
}
</script>

<template>
    <!-- TODO: 8. นำมาแสดง -->
    <main class="m-auto w-[300px]">
        <LoginForm @submit="onSubmit" />
        <BaseErrorMessage>{{ store.userError }}</BaseErrorMessage>         
    </main>
</template>