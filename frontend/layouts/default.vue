<template>
    <TheHeader />
    <div class="bg-[#111425] w-full">
      <section class="tip-help">
            <div v-if="showMessage" class="chat-container" @click.stop>
                <div class="chat-header">
                    <h2>AI Chat</h2>
                </div>
                <div class="chat-messages">
                    <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]">
                        <div class="message-content">
                            <p>{{ message.text }}</p>
                        </div>
                    </div>
                </div>
                <form class="chat-input" @submit.prevent="sendMessage">
                    <input v-model="userInput" type="text" placeholder="Type your message..." required />
                    <button type="submit">
                        <i class="send-icon">➤</i>
                    </button>
                </form>
            </div>
            <div>
                <button v-if="showButton && !showMessage" @click="openMessage" class="open-message">
                    <IconUser class="inline-block w-6" />
                </button>
            </div>
            <div class="m-2"></div>
            <div>
                <button v-if="showButton" @click="scrollToTop" class="scroll-to-top">
                    <IconArrowUp class="inline-block w-6" />
                </button>
            </div>
        </section>
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

const showButton = ref(false);
const showMessage = ref(false);
const userInput = ref("");
const messages = ref([]);

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};


const openMessage = (event) => {
    event.stopPropagation();
    showMessage.value = true;
};

const closeMessage = (event) => {
    const chatContainer = document.querySelector(".chat-container");

    if (
        chatContainer &&
        !chatContainer.contains(event.target)
    ) {
        showMessage.value = false;
    }
};

const handleScroll = () => {
    let isPortrait = window.matchMedia("(max-width: 1024px) and (orientation: portrait)").matches;
    if (isPortrait) {
        showButton.value = true;
    }
    else if (window.scrollY > window.innerHeight / 3.5) {
        showButton.value = true;
    }
    else {
        showButton.value = false;
    }
};

const sendMessage = async () => {
    const userMessage = userInput.value;
    messages.value.push({ sender: "user", text: userMessage });
    userInput.value = "";
    const config = useRuntimeConfig();
    console.log(config.public.chatGptApiUrl); 

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                authorization: `Bearer ${config.public.chatGptApiUrl}`, 
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }],
            }),
        });

        const data = await response.json();
        const botMessage = data.choices[0].message.content;

        messages.value.push({ sender: "bot", text: botMessage });
    } catch (error) {
        console.error("Error fetching response:", error);
        messages.value.push({ sender: "bot", text: "❌ Error! Unable to fetch response." });
    }
};

onMounted(() => {
    document.addEventListener("click", closeMessage);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

});

onUnmounted(() => {
    document.removeEventListener("click", closeMessage);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped>
.tip-help {
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: end;
    z-index: 2000;
}

.scroll-to-top,
.open-message {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 60px;
    cursor: pointer;
    font-size: 16px;
}

.chat-container {
    width: 100%;
    max-width: 600px;
    height: 50vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.chat-header {
    background-color: #007bff;
    padding: 12px 20px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}

.chat-messages {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #f9f9f9;
}

.message {
    display: flex;
    align-items: flex-start;
}

.message.user {
    justify-content: flex-end;
}

.message.bot {
    justify-content: flex-start;
}

.message-content {
    max-width: 70%;
    padding: 12px 16px;
    border-radius: 18px;
    font-size: 14px;
    line-height: 1.5;
}

.message.user .message-content {
    background-color: #007bff;
    color: white;
    border-top-right-radius: 0;
}

.message.bot .message-content {
    background-color: #e5e5e5;
    color: #333;
    border-top-left-radius: 0;
}

/* Input */
.chat-input {
    display: flex;
    padding: 12px;
    background-color: #ffffff;
    border-top: 1px solid #e5e5e5;
}

.chat-input input {
    flex: 1;
    padding: 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
}

.chat-input input:focus {
    border-color: #007bff;
}

.chat-input button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    margin-left: 8px;
    padding: 12px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.chat-input button:hover {
    background-color: #0056b3;
}

.send-icon {
    font-size: 16px;
}

@media (max-width: 1024px) and (orientation: portrait) {
    .tip-help {
        flex-direction: column;
        /* เปลี่ยนเป็น column เมื่อหน้าจอเล็กและเป็น portrait */
    }
}
</style>
