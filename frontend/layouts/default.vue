<template>
    <TheHeader />
    <div class="bg-[#111425] w-full">
      <main id="main-content" class="max-w-screen-lg m-auto px-3 pt-8 "> 
      <slot />

     </main>
    </div>
    <TheFooter />
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import { onMounted} from 'vue';
onMounted(() => {
  window.scrollTo(0,0);
});

</script>
