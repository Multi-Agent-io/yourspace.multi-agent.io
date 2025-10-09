<template>
  <header>
    <div class="layout">  
      <a :href="mainUrl" class="header__logo" aria-label="YourSpace главная страница">
        <img :src="logo.src" alt="YourSpace logo" />
      </a>
      <nav class="nav" :class="{'active': isOpen}" role="menu">
        <ul class="nav__list">
          <li class="nav__item" @click="closeMenu">
            <a :href="featuresUrl" aria-label="Перейти к разделу 'Возможности'" class="link">Возможности</a>
          </li>
          <li class="nav__item" @click="closeMenu">
            <a :href="casesUrl" aria-label="Перейти к разделу 'Кейсы'">Кейсы</a>
          </li>
          <li class="nav__item" @click="closeMenu">
            <a :href="stepsUrl" aria-label="Перейти к разделу 'Этапы Работы'">Этапы Работы</a>
          </li>
          <li class="nav__item">
            <button class="popup-trigger" aria-label="Оставить заявку">Хочу также</button>
          </li>
          <li class="nav__item nav__item--remote">
            <button class="popup-trigger" aria-label="Оставить заявку" >Получить карту в подарок</button>
          </li>
        </ul>
      </nav>
      <button class="header__btn"  @click="() => toggleMenu()" aria-label="Открыть/закрыть меню" :aria-expanded="isOpen.toString()">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="burger-icon"
        >
          <path
            :class="{ 'line1': true, open: isOpen }"
            d="M3 7h18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            :class="{ 'line2': true, open: isOpen }"
            d="M3 12h18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            :class="{ 'line3': true, open: isOpen }"
            d="M3 17h18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import logo from 'src/assets/img/logo.svg';
import { withBase } from '../utils/withBase';

import { ref } from 'vue';

const isOpen = ref<boolean>(false);

const toggleMenu = (): void => {
  isOpen.value = !isOpen.value;
};

const closeMenu = (): void => {
  isOpen.value = false;
};

const featuresUrl = withBase('/#features');
const casesUrl = withBase('/#cases');
const stepsUrl = withBase('/#steps');
const mainUrl = withBase('/')
</script>

<style scoped> 

  header .layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: calc(var(--space) * 0.5);
  }

  .header__logo img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }

  .nav__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space);
    text-transform: lowercase;
  }

  .nav__list a,
  .nav__list button {
    position: relative;
    display: inline-block;
    padding: 0.4em 0;
    font-size: calc(var(--base-font-size) * 0.8);
    font-variation-settings: var(--font-flex-medium);
    color: Var(--color-dark);
    z-index: 1;
    text-transform: lowercase;
  }

  .nav__list a::before,
  .nav__list button::before {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%) scaleX(0);
    width: 115%;
    height: 0.5em;
    background-color: var(--color-blue-link); 
    transition: transform 0.4s ease;
    transform-origin: center;
    border-radius: 2px;
    z-index: -1;
  }

  .nav__list a:hover,
  .nav__list button:hover  {
    color: #191919;
  }

  .nav__list a:hover::before,
  .nav__list button:hover::before  {
    transform: translate(-50%, 50%) scaleX(1);
  }

  .nav__item--remote {
    padding: 5px 20px;
    border-radius: 30px;
    background-color: var(--color-blue-link);
    transition: background-color 0.33s ease;
    text-align: center;
  }

  .nav__item--remote button {
    color: #191919;
    transition: color 0.3s ease;
  }

  .nav__item--remote:hover {
    background-color: var(--color-green) 
  }

  .nav__item--remote:hover button {
    color: var(--color-light);
  }

  .nav__item--remote button:before {
    opacity: 0;
  }

  .header__btn  {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    width: 40px;
    height: 40px;
    position: relative;
    z-index: 1001;
  }

  .header__btn path {
    color: var(--color-dark);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.33s ease-in;
    transform-origin: center;
  }

  .line1.open {
    transform: translateY(3px) rotate(45deg);
  }

  .line2.open {
    opacity: 0;
  }

  .line3.open {
    transform: translateY(-4px) rotate(-45deg);
  }

  .header__btn:hover path {
    stroke: var(--text-accent);
  }

  /* dark mode */
  .dark header img {
    filter: invert(100%);
  }


   @media screen and (max-width: 1320px) {
      .nav__list {
        font-size: calc(var(--base-font-size) * 0.8);
        gap: var(--space)
      }
   }

    @media screen and (max-width: 1170px) {
      .nav__list {
        gap: var(--space);
        text-align: center;
      }

      .nav__item a,
      .nav__item button {
        font-size: calc(var(--base-font-size) * 0.7);
      }
   }

    @media screen and (max-width: 950px) {
      .nav {
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 80svh;
        padding: calc(var(--space) * 2) var(--space);
        background-color:var(--color-light);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        opacity: 0;
        transform: translateX(-150%);
        transition: transform 0.7s ease-in-out, opacity 0.5s ease-in-out;
        z-index: 5;
        overflow: hidden;
      }

      .nav.active {
        opacity: 1;
        transform: translateX(0);
        
      }

      .nav__list {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow: hidden;
      }

      .nav__item a,
      .nav__item button  {
        font-size: var(--base-font-size) ;
      }

      .header__btn {
        position: relative;
        display: flex;
        z-index: 10;
      }
   }
</style>