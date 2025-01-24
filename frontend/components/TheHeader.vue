<template>
  <header>
  </header>
  <ParallaxSection @scroll-to-main="scrollToMain"/>
</template>

<script setup>
import ParallaxSection from "@/components/ParallaxSection.vue";
import { ref } from 'vue';

const smoothScroll = (targetPosition) => {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 3000;
  let startTime = null;

  const scrollAnimation = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollProgress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, startPosition + distance * scrollProgress);
    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  };

  requestAnimationFrame(scrollAnimation);
};

const scrollToMain = () => {
  const mainContent = document.querySelector("#main-content");
  
  if (mainContent) {
    const targetPosition = mainContent.offsetTop;
    smoothScroll(targetPosition);
  }
};
</script>
