import CASE1 from '../assets/img/cases/1.webp';
import CASE2 from '../assets/img/cases/2.webp';
import CASE3 from '../assets/img/cases/3.webp';
import CASE4 from '../assets/img/cases/4.webp';
import CASE5 from '../assets/img/cases/5.webp';
import CASE6 from '../assets/img/cases/6.webp';
import CASE7 from '../assets/img/cases/7.webp';
import CASE8 from '../assets/img/cases/8.webp';
import CASE9 from '../assets/img/cases/9.webp';
import CASE10 from '../assets/img/cases/10.webp';
import CASE11 from '../assets/img/cases/11.webp';
import CASE12 from '../assets/img/cases/12.webp';
import CASE13 from '../assets/img/cases/13.webp';

type CaseImage = {
  src: ImageMetadata;
  alt: string;
};

export const caseImages: CaseImage[] = [
  { src: CASE1, alt: "Пример умного дома" },
  { src: CASE2, alt: "Датчик почвы в земле" },
  { src: CASE3, alt: "Датчик почвы" },
  { src: CASE4, alt: "Датчик уровня в бочке" },
  { src: CASE5, alt: "Датчик уровня" },
  { src: CASE6, alt: "Кран полив" },
  { src: CASE7, alt: "Параметр почвы" },
  { src: CASE8, alt: "Терморегулятор карточка" },
  { src: CASE9, alt: "Терморегулятор" },
  { src: CASE10, alt: "Термостат" },
  { src: CASE11, alt: "Протечка" },
  { src: CASE12, alt: "Будильник" },
  { src: CASE13, alt: "Кондиционер" },
];