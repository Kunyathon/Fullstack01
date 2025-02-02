<script setup>
import { useAuthStore } from '@/stores/auth';
import { usePortfolioStore } from '@/stores/portfolio';

definePageMeta({
    layout: 'detail',
});

const authStore = useAuthStore();
const store = usePortfolioStore();
const route = useRoute();

if (!authStore.canEdit) {
    navigateTo('/login');
}

useHead({
    title: `Create a new portfolio | Kunyathon Piyawatkun`,
})
</script>

<template>
        <PortfolioForm
        :portfolio="store.newPortfolio()"
        :can-delete="authStore.canEdit"
        @submit="store.createPortfolio"
        @cancel="navigateTo('/')"
        @delete="store.deletePortfolio(route.params.id)"
    />
       
</template>