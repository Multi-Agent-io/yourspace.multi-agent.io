import type { ImageMetadata } from 'astro';

export type Brand = {
  name: string;
  /** имя файла логотипа в src/assets/img/brands/ БЕЗ расширения (svg/png/webp/jpg);
      нет файла — рендерится текстовый бейдж */
  file?: string;
};

const logos = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/img/brands/*.{svg,png,webp,jpg,jpeg}',
  { eager: true },
);

export function brandLogo(brand: Brand): ImageMetadata | undefined {
  if (!brand.file) return undefined;
  const entry = Object.entries(logos).find(([path]) => path.includes(`/${brand.file}.`));
  return entry?.[1].default;
}

export const brands: Brand[] = [
  { name: 'Яндекс Алиса', file: 'Alisa_Yandex' },
  { name: 'SberDevices', file: 'sber' },
  { name: 'Aqara', file: 'aqara' },
  { name: 'Xiaomi', file: 'xiaomi' },
  { name: 'Tuya', file: 'tuya' },
  { name: 'Sonoff', file: 'sonoff' },
  { name: 'iRobot', file: 'irobot-short' },
  { name: 'Apple Home', file: 'apple-home' },
  { name: 'Shelly', file: 'shelly' },
  { name: 'Arlight', file: 'arlight' },
  { name: 'Aledo', file: 'aledo' },
  { name: 'ZONT', file: 'zont' },
  { name: 'MyHeat', file: 'myheat' },
  { name: 'Kraab Systems', file: 'kraab' },
  { name: 'Smart Life', file: 'smartlife' },
  { name: 'iNELS', file: 'inels' },
  { name: 'Hikvision', file: 'hikvision' },
  { name: 'Sonos', file: 'sonos' },
];
