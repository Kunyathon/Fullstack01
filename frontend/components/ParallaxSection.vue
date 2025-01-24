<template>
    <section id="bg-default-below">
        <section class="bg-parallax">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star2"></div>
            <div class="star2"></div>
            <img ref="moon" src="assets/images/moonlight.png" id="moon">
            <img ref="mountains_behind" src="assets/images/mountain-behide.png" id="mountains_behind">
            <img ref="mountains_front" src="assets/images/mountain-front.png" id="mountains_front">

            <section>
                <div class="w-full px-3 py-9 flex space-x-3.5 
        justify-center flex-col items-center h-screen">

                    <h1 ref="text_portfolios" class="z-10 text-3xl lg:text-9xl md:text-7xl sm:text-5xl
          font-bold text-white" :style="{ fontFamily: 'Georgia, serif' }">Portfolios</h1>

                    <NuxtLink to="#" @click.prevent="scrollToMain" ref="button_27" class="button_27">
                        Expolre
                    </NuxtLink>
                </div>
            </section>
        </section>
    </section>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const emit = defineEmits();
const moon = ref(null);
const mountains_behind = ref(null);
const text_portfolios = ref(null);
const button_27 = ref(null);

const handleScroll = () => {
  const value = window.scrollY;
  requestAnimationFrame(() => {
    if (moon.value) moon.value.style.top = value * 1.05 + 'px';
    if (mountains_behind.value) mountains_behind.value.style.top = value * 0.5 + 'px';
    if (text_portfolios.value) text_portfolios.value.style.marginRight = value * 2 + 'px';
    if (button_27.value.$el) button_27.value.$el.style.marginTop = value * 1 + 'px';

  });
};

const scrollToMain = (event) => {
  event.preventDefault();
  emit('scroll-to-main');
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
* {
    scroll-behavior: smooth;
}

#bg-default-below {
  position: relative; 
  width: 100%;
  height: 100%;
}

#bg-default-below::before{
    content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top,#111425,transparent);
  z-index: 1000;
}

.bg-parallax {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.bg-parallax img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#moon {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, 0%);
    mix-blend-mode: screen;
    width: 30vw;
    height: auto;
}

@media (max-width: 1024px) and (orientation: portrait) {
    .bg-parallax {
        height: 50vh;
    }

}

@media (max-width: 768px) {
    #moon {
        transform: translate(-50%, calc(10%));
    }
}

@media (max-width: 480px) {
    #moon {
        transform: translate(-50%, calc(30%));
    }
}

.button_27 {
    appearance: none;
    background-color: #000000;
    border: 2px solid #1A1A1A;
    border-radius: 15px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: Georgia, serif;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 60px;
    min-width: 0;
    width: 300px;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    /* width: 100%; */
    will-change: transform;
}

.button_27:disabled {
    pointer-events: none;
}

.button_27:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
}

.button_27:active {
    box-shadow: none;
    transform: translateY(0);
}


.star {
    position: absolute;
    animation: shootingStar 3s linear infinite;
    top: 20%;
    left: 30%;
    background: #fff;
    width: 15px;
    height: 15px;
    background-image: url("C:\Users\PC\Desktop\Learning Kitty\2024\Fullstack01\frontend\assets\images\image-github.png");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
        0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
    transform: translateX(50px);
    z-index: 1000;
}

.star::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 2px;
    background: linear-gradient(90deg, #fff, transparent);
    border-radius: 50%;
    animation: tailAnimation 2s linear infinite;
    transform: translateY(5px) translateX(15px);
}

.star2 {
    position: absolute;
    animation: shootingStar 3s linear infinite;
    top: 20%;
    left: 30%;
    background: #fff;
    width: 15px;
    height: 15px;
    background-image: url("C:\Users\PC\Desktop\Learning Kitty\2024\Fullstack01\frontend\assets\images\image-gmail.png");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
        0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
    transform: translateX(50px);
    z-index: 1000;
}

.star2::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 2px;
    background: linear-gradient(90deg, #fff, transparent);
    border-radius: 50%;
    animation: tailAnimation 2s linear infinite;
    transform: translateY(5px) translateX(15px);
}

@keyframes shootingStar {
    0% {
        transform: rotate(315deg) translateX(0);
        opacity: 1;
    }

    70% {
        opacity: 0;
    }

    100% {
        transform: rotate(315deg) translateX(-1000px);
        opacity: 0;
    }
}

.star:nth-child(1) {
    top: 10%;
    left: 10%;
    animation-duration: 3s;
    animation-delay: 0s;
}

.star:nth-child(2) {
    top: 30%;
    left: 80%;
    animation-duration: 4s;
    animation-delay: 0s;
}

.star:nth-child(3) {
    top: 80%;
    left: 80%;
    animation-duration: 5s;
    animation-delay: 0s;
}

.star2:nth-child(3) {
    top: 50%;
    left: 40%;
    animation-duration: 2.5s;
    animation-delay: 0s;
}

.star2:nth-child(4) {
    top: 50%;
    left: 40%;
    animation-duration: 2.5s;
    animation-delay: 0s;
}

.star2:nth-child(5) {
    top: 60%;
    left: 80%;
    animation-duration: 3.5s;
    animation-delay: 0s;
}

/* star */
@media (max-width: 1024px) {

    .star,
    .star2 {
        width: 10px;
        height: 10px;
    }

    .star:nth-child(1),
    .star:nth-child(2),
    .star:nth-child(3) {
        top: 20%;
        left: 20%;
    }

    .star2:nth-child(3),
    .star2:nth-child(4),
    .star2:nth-child(5) {
        top: 30%;
        left: 50%;
    }
}


@media (max-width: 768px) {

    .star,
    .star2 {
        width: 10px;
        height: 10px;
    }

    .star:nth-child(1),
    .star:nth-child(2),
    .star:nth-child(3) {
        top: 20%;
        left: 20%;
    }

    .star2:nth-child(3),
    .star2:nth-child(4),
    .star2:nth-child(5) {
        top: 30%;
        left: 50%;
    }
}

@media (max-width: 480px) {

    .star,
    .star2 {
        width: 8px;
        height: 8px;
    }

    .star:nth-child(1),
    .star:nth-child(2),
    .star:nth-child(3) {
        top: 25%;
        left: 15%;
    }

    .star2:nth-child(3),
    .star2:nth-child(4),
    .star2:nth-child(5) {
        top: 35%;
        left: 45%;
    }
}

/* star */
</style>
