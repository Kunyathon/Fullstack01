<script setup>

const route = useRoute();
 console.log("route.param",route.params);
 
</script>

<template>
    port {{route.params.id }}
</template>