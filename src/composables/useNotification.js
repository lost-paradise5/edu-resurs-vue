import { ref } from 'vue';

const message = ref('');
const type = ref('info');

function showNotification(msg, msgType = 'info') {
  message.value = msg;
  type.value = msgType;
  setTimeout(() => {
    message.value = '';
  }, 3000);
}

export function useNotification() {
  return {
    message,
    type,
    showNotification
  };
}
