<template>
    <transition name="fade">
        <div v-if="visible" class="notification" :class="typeClass">
            {{ message }}
        </div>
    </transition>
</template>

<script setup>
import { ref, watch, onUnmounted, computed } from 'vue';


const props = defineProps({
    message: String,
    type: {
        type: String,
        default: 'info' // 'success', 'error', 'warning', etc.
    },
    duration: {
        type: Number,
        default: 3000 // 3 секунды
    }
});

const visible = ref(true);
let timeout = null;

watch(() => props.message, () => {
    visible.value = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        visible.value = false;
    }, props.duration);
});

onUnmounted(() => {
    clearTimeout(timeout);
});

const typeClass = computed(() => {
    return `notification--${props.type}`;
});
</script>

<style scoped>
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    border-radius: 6px;
    color: white;
    font-weight: 500;
    font-family: var(--main-font);
    z-index: 9999;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.notification--success {
    background-color: #4caf50;
}

.notification--error {
    background-color: #f44336;
}

.notification--info {
    background-color: #2196f3;
}

.notification--warning {
    background-color: #ff9800;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>