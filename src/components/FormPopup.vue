<template>
  <div
    class="popup-overlay"
    :class="{ active: isOpen }"
    @click.self="closePopup"
  >
    <div class="popup">
      <div class="popup-light" aria-hidden="true"></div>

      <!-- Close button -->
      <button class="popup-close-btn" @click="closePopup" aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <div class="popup-contacts">
        <!-- лампочка из знака YourSpace, перевёрнута и подвешена на проводе -->
        <svg class="popup-bulb" width="50" height="109" viewBox="0 -170 276 600" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M138,-170 V14"/>
          <g transform="rotate(180 138 222)">
            <path class="popup-bulb__glass" stroke="none" d="M84,336 L83,295 C83,265 64,240.8 47.5,222 A120.3,120.3 0 1 1 228.0,222 C211.5,240.8 192.5,265 192.5,295 L191.5,336 Z"/>
            <path d="M84,336 L83,295 C83,265 64,240.8 47.5,222 A120.3,120.3 0 1 1 228.0,222 C211.5,240.8 192.5,265 192.5,295 L191.5,336 Z"/>
            <path d="M23.5,180 H252"/>
            <path d="M90.5,336 V402 L116,430 H159.5 L184,402 V336"/>
          </g>
        </svg>
        <h2>Консультация и замер - бесплатно</h2>
        <a href="https://t.me/PaTara43" class="button-light" target="_blank">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"/>
          </svg>
          <b>Напишите нам в Telegram</b>
        </a>
        <p class="text-small">или</p>
        <a aria-label="Позвоните нам по номеру -  +79219828061" class="underline popup-contact" href="tel:+79219828061">
          <svg width="24" height="24" viewBox="0 0 16 27" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12.5185 0.731934H3.48142C1.96346 0.731934 0.73291 1.96109 0.73291 3.47732V23.5223C0.73291 25.0386 1.96346 26.2677 3.48142 26.2677H12.5185C14.0365 26.2677 15.267 25.0386 15.267 23.5223V3.47732C15.267 1.96109 14.0365 0.731934 12.5185 0.731934Z"/>
            <path d="M6.02478 4.10693H9.85804"/>
          </svg>
          +7 (921) 982-80-61
        </a>
        <a aria-label="Свяжитесь с нами по почте - patara@multi-agent.io" class="underline popup-contact" href="mailto:patara@multi-agent.io">
          <svg width="24" height="24" viewBox="0 0 25 17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M24.2456 13.6084V3.39131C24.2456 1.9126 22.9791 0.713867 21.4167 0.713867L3.58326 0.713867C2.0209 0.713867 0.754356 1.9126 0.754356 3.39131V13.6084C0.754356 15.0872 2.0209 16.2859 3.58326 16.2859H21.4167C22.9791 16.2859 24.2456 15.0872 24.2456 13.6084Z"/>
            <path d="M23.2574 1.8208L12.4472 9.37477L1.63696 1.8208"/>
          </svg>
          patara@multi-agent.io
        </a>
        <p class="text-small">Мы на связи ежедневно с 9:00 до 20:00.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);

function openPopup() {
  isOpen.value = true;
}

function closePopup() {
  isOpen.value = false;
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
/* выше cookie-баннера: иначе на небольших экранах он закрывает контакты */
.popup-overlay {
  z-index: 1000000;
}

h2 {
  line-height: 1.2;
  font-size: 1.8rem;
  margin-bottom: 0;
}

.popup-contacts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}

.popup-contacts .button-light {
  justify-content: center;
  margin-top: 0.5rem;
}

.popup-contact {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: center;
}

.popup-contact svg {
  flex-shrink: 0;
}

/* Лампочка: провод начинается от верхнего края поп-апа */
.popup-bulb {
  align-self: center;
  flex-shrink: 0;
  margin-top: -2rem;
  color: var(--color-dark);
}

.popup-bulb__glass {
  fill: #ffd257;
}

.popup-light {
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  background: radial-gradient(circle 190px at 50% 85px, rgba(255, 210, 87, 0.45), rgba(255, 210, 87, 0));
  pointer-events: none;
}

.popup-bulb__glass,
.popup-light {
  opacity: 0;
}

.popup-overlay.active .popup-bulb__glass,
.popup-overlay.active .popup-light {
  animation: bulb-on 0.9s 0.25s both;
}

@keyframes bulb-on {
  0%, 15% { opacity: 0; }
  20%, 30% { opacity: 1; }
  35%, 50% { opacity: 0.15; }
  55%, 65% { opacity: 1; }
  70%, 78% { opacity: 0.3; }
  85%, 100% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .popup-overlay.active .popup-bulb__glass,
  .popup-overlay.active .popup-light {
    animation: none;
    opacity: 1;
  }
}

/* Телефон в ландшафте: без лампочки всё помещается в экран */
@media (max-height: 520px) {
  .popup-bulb,
  .popup-light {
    display: none;
  }
}
</style>
