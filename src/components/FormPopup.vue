<template>
  <div
    class="popup-overlay"
    :class="{ active: isOpen }"
    @click.self="closePopup"
  >
    <div class="popup">
      <!-- Close button -->
      <button class="popup-close-btn" @click="closePopup" aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <!-- Success state -->
      <div v-if="success" class="success-state">
        <svg xmlns="http://www.w3.org/2000/svg" class="tick" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="green"
            stroke-width="3"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2>Спасибо за вашу заявку!</h2>
        <p>Свяжемся с вами в ближайшее время.</p>
      </div>

      <!-- Form state -->
      <form v-else ref="formRef" @submit.prevent="submitForm">
        <vue-hcaptcha
          ref="hcaptchaRef"
          :sitekey="siteKey"
          size="invisible"
          theme="dark"
          @verify="sendEmail"
        />
        <h2>Получите консультацию и запланируйте замер. Бесплатно!</h2>
        <input v-model="form.name" type="text" name="name" placeholder="Ваше имя" required />
        <input
          v-model="form.phone"
          type="tel"
          name="phone"
          placeholder="+7 (___) ___-____"
          @input="formatPhone"
          required
        />
        <textarea v-model="form.message" name="message" placeholder="Комментарий" ></textarea>
        <label class="custom-checkbox">
          <input type="checkbox" checked v-model="form.agree" />
          <span class="checkmark"></span>
          <span> Я даю свое согласие на обработку <a href="/terms" target="_blank" class="link underline" aria-label="Узнать больше об условиях использования">персональных данных</a> и соглашаюсь с условиями и <a href="/privacy-policy" target="_blank"  class="link underline" aria-label="Узнать больше о политике конфиденциальности">политикой конфиденциальности</a>.</span>
        </label>
        <button type="submit" :disabled="loading">
          <span v-if="loading" class="spinner"></span>
          <span v-else>Отправить</span>
        </button>
        <p class="status">{{ status }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import emailjs from '@emailjs/browser';
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';

const isOpen = ref(false);
const success = ref(false);
const loading = ref(false);
const status = ref('');
const formRef = ref<HTMLFormElement | null>(null);
const hcaptchaRef = ref<any>(null); 
const siteKey =  import.meta.env.PUBLIC_HCAPTCHA;

const form = ref({
  name: '',
  phone: '',
  message: '',
  agree: true,
});

function openPopup() {
  isOpen.value = true;
  success.value = false;
  status.value = '';
  form.value.name = '';
  form.value.phone = '';
  form.value.message = '';
  form.value.agree = true;
}

function closePopup() {
  isOpen.value = false;
}

function formatPhone(e: Event) {
  let input = (e.target as HTMLInputElement).value;
  
  let numbers = input.replace(/\D/g, '');

  
  if (numbers.length > 0) {
    numbers = '+' + numbers;
  }
  if (numbers.length > 2) {
    numbers = numbers.slice(0, 2) + ' (' + numbers.slice(2);
  }
  if (numbers.length > 7) {
    numbers = numbers.slice(0, 7) + ') ' + numbers.slice(7);
  }
  if (numbers.length > 12) {
    numbers = numbers.slice(0, 12) + '-' + numbers.slice(12, 16);
  }

  form.value.phone = numbers;
}

async function sendEmail(token: string) {
  if (!formRef.value) return;

  loading.value = true;
  status.value = '';


  try {
    // Append hCaptcha token to form if needed
    const formData = new FormData(formRef.value);
    formData.append('h-captcha-response', token);

    await emailjs.sendForm(
      import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
      import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.value,
      import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
    );

    success.value = true;
    formRef.value.reset();
    hcaptchaRef.value.reset();
  } catch (err: any) {
    status.value = `❌ Ошибка: ${err.text || err.message}`;
  } finally {
    loading.value = false;
  }
}

function submitForm() {
  if (!form.value.agree) {
    status.value = '⚠️ Пожалуйста, дайте согласие на обработку данных';
    return;
  }
  if (hcaptchaRef.value) {
    console.log('here')
    hcaptchaRef.value.execute();
  }
}

const handleOpen = () => openPopup();

onMounted(() => {
  window.addEventListener('open-contact-popup', handleOpen);
});

onUnmounted(() => {
  window.removeEventListener('open-contact-popup', handleOpen);
});
</script>

<style scoped>
h2 {
  line-height: 1.2;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

input, textarea {
  font-family: inherit;
  font-variation-settings: var(--font-flex-base);
  padding: 0.8rem;
  color: var(--color-dark);
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

textarea {
  resize: none;
}

/* Custom checkbox */
.custom-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  position: relative;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.custom-checkbox .checkmark {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 10px;
  background-color: #eee;
  border-radius: 4px;
  position: relative;
}

.custom-checkbox input:checked ~ .checkmark::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 6px;
  height: 12px;
  border: solid var(--text-accent);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.custom-checkbox a {
  color: var(--text-accent);
  text-decoration: underline;
}

form button {
  padding: 0.8rem 1rem;
  font-size: 1rem;
  background: var(--text-accent);
  color: var(--color-light);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: opacity 0.3s ease-in;
}

form button:hover {
  opacity: 0.8;
}

form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.status {
  margin-top: 0.5rem;
  color: var(--error-color);
  font-size: 0.8rem;
}

.success-state {
  text-align: center;
}

.tick {
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
}

/* Spinner */
.spinner {
  display: block;
  width: 18px;
  height: 18px;
  margin: 0 auto;
  border: 3px solid #fff;
  border-top: 3px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
