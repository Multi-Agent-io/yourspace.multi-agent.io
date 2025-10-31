<template>
  <header>
    <div class="layout">  
      <div class="header-left">
        <a :href="mainUrl" class="header__logo" aria-label="YourSpace главная страница" title="YourSpace">
          <img :src="logo.src" alt="YourSpace logo" />
        </a>
        <span class="element-location">Умный дом в Санкт-Петербурге и ЛО</span>
      </div>

      <div class="header-right">
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
        </ul>
      </nav>

      <button class="button-light" @click="openPopup">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"/>
        </svg>
        <b class="element-btncontact-text">Есть контакт</b>
      </button>

      <button class="header__btn" @click="toggleMenu" aria-label="Открыть меню">
        <span :class="{'open': isOpen}" class="line1"></span>
        <span :class="{'open': isOpen}" class="line2"></span>
        <span :class="{'open': isOpen}" class="line3"></span>
      </button>

      </div>
      
    </div>
  </header>
</template>

<script lang="ts" setup>
import logo from 'src/assets/img/YourSpace-logo.png';
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
const mainUrl = withBase('/');

const openPopup = (): void => {
  window.dispatchEvent(new CustomEvent('open-contact-popup'));
};
</script>

<style scoped>

  header {
    font-size: calc(var(--base-font-size) * 0.8);
    font-variation-settings: var(--font-flex-medium);
    position: sticky;
    top: 0;
    z-index: 999;
    background: #fff;
  }

  .header-left, header .layout, .header-right {
    display: flex;
    gap: var(--space);
    align-items: center;
  }

  header .layout {
    justify-content: space-between;
    align-items: center;
    padding: calc(var(--space) * 0.4) var(--space);
  }

  .header__logo {
    display: block;
    width: 50px;
  }

  .header__logo img {
    max-width: 100%;
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

  .nav__item--tg {
    line-height: 0;
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

   .button-light {
    font-size: 0.9rem;
   }

   .header-right a {
    color: var(--text-accent);
   }

   .button-light {
    text-align: left;
   }

  /* hamburger button (hidden by default) */
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

  .header__btn .line1,
  .header__btn .line2,
  .header__btn .line3 {
    position: absolute;
    left: 50%;
    width: 24px;
    height: 3px;
    background: var(--color-dark);
    border-radius: 2px;
    transform: translate(-50%, -50%);
    transition: transform 0.25s ease, opacity 0.25s ease, top 0.25s ease;
  }

  .header__btn .line1 { top: 14px; }
  .header__btn .line2 { top: 20px; }
  .header__btn .line3 { top: 26px; }

  .header__btn .line1.open { top: 20px; transform: translate(-50%, -50%) rotate(45deg); }
  .header__btn .line2.open { opacity: 0; }
  .header__btn .line3.open { top: 20px; transform: translate(-50%, -50%) rotate(-45deg); }


  @media screen and (max-width: 1120px) {
    .nav {
      display: none; /* hide by default */
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 100svh;
      padding: var(--space);
      background-color: var(--color-light);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
      opacity: 0;
      transform: translateX(-150%);
      transition: transform 0.7s ease-in-out, opacity 0.5s ease-in-out;
      z-index: 5;
      overflow: hidden;
    }

    .nav.active { display: flex; opacity: 1; transform: translateX(0); }

    .nav__list {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      overflow: hidden;
    }

    .nav__item a,
    .nav__item button  { font-size: var(--base-font-size); }

    .header__btn { display: flex; }
  }

  @media screen and (max-width: 480px) {
    .element-location {
      font-size: 80%;
    }

    .element-btncontact-text {
      display: none;
    }
  }
</style>