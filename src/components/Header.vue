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
            <a :href="stepsUrl" aria-label="Перейти к разделу 'Этапы Работы'">Этапы Работы</a>
          </li>
          <li class="nav__item" @click="closeMenu">
            <a :href="casesUrl" aria-label="Перейти к разделу 'Кейсы'">Кейсы</a>
          </li>
          <li class="nav__item">
            <a :href="aboutUsUrl" aria-label="Узнать больше о нас">О&nbsp;нас</a>
          </li>
          <li class="nav__item link-remote">
            <button class="popup-trigger" aria-label="Оставить заявку" >Получить карту в подарок</button>
          </li>
          <li class="nav__item">
            <a href="https://t.me/MultiAgent_io" class="home-page__link--tg" target="_blank" aria-label="Запланировать замер для вашего умного дома"></a>
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

const aboutUsUrl = withBase('/about-us/');
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
    color: var(--color-dark);
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

  .nav__list a:hover {
    color: #191919;
  }

  .nav__list a:hover::before{
    transform: translate(-50%, 50%) scaleX(1);
  }

  .nav__item button {
    color: #191919;
  }

  .home-page__link--tg {
    display: block;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    background-image: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="utf-8"%3F><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="14" fill="url(%23paint0_linear_87_7225)"/><path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"/><defs><linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="%2337BBFE"/><stop offset="1" stop-color="%23007DBB"/></linearGradient></defs></svg>');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.33s ease-in-out;
  }

  .home-page__link--tg:hover {
    transform: scale(1.1);
  }

   .home-page__link--tg::before {
    display: none;
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