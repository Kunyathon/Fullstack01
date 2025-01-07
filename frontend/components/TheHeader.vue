<template>
    <!-- TODO: 1. สร้าง Header -->
    <header class="mb-10">
        <div
            class="w-full px-3 py-9 bg-black flex space-x-3.5 md:justify-center md:flex-col md:items-center md:space-x-0">
            <!-- <div class="flex-none">
                <img
                    src="@/assets/images/avatar3d.webp"
                    alt="Avatar"
                    class="rounded-full w-20 h-20 border-2 border-basewhite md:w-52 md:h-52 md:mb-4"
                />
            </div> -->
            <div class="background-container">
                <div class="font-bold text-xl md:text-center md:text-2xl text-basewhite">Pichet Itngam</div>
                <p class="text-base md:text-center md:text-xl text-basewhite">Passionate self-taught learner</p>
                <div class="pt-2 flex flex-wrap gap-2 md:justify-center md:mt-2">
                    <BaseLink
                        size="small"
                        to="mailto: hello@notsu.io"
                        class="md:text-base md:px-7 md:py-3 md:space-x-2"
                    >
                        <span>Email</span>
                        <IconEnvelope class="inline-block w-3 md:w-4" />
                    </BaseLink>
                    <!-- <BaseLink
                        size="small"
                        to="https://www.linkedin.com/in/notsu/"
                        class="md:text-base md:px-7 md:py-3 md:space-x-2"
                        target="blank"
                    >
                        <span>Linkedin</span>
                        <IconLinkedin class="inline-block w-3 md:w-4" />
                    </BaseLink> -->
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.background-container {
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('C:\Users\PC\Desktop\Learning Kitty\2024\Fullstack01\frontend\assets\images\02.png'); 
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: right bottom;
  width: 100%;
}

@media (max-width: 1024px) {
  .background-container {
    height: 30vh;
    background-size: 30%; 
  }
}

/* @media (max-width: 768px) {
  .background-container {
    height: 30vh;
    background-size: 30%; 
  }
} */

@media (max-width: 480px) {
  .background-container {
    height: 20vh;
    background-size: 0; 
  }
}
</style>