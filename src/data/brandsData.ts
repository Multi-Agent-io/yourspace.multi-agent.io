import type { ImageMetadata } from 'astro';

export type Brand = {
  name: string;
  /** имя файла логотипа в src/assets/img/brands/; нет файла — рендерится текстовый бейдж */
  file?: string;
};

const logos = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/img/brands/*.{svg,png,webp}',
  { eager: true },
);

export function brandLogo(brand: Brand): ImageMetadata | undefined {
  if (!brand.file) return undefined;
  const entry = Object.entries(logos).find(([path]) => path.endsWith(`/${brand.file}`));
  return entry?.[1].default;
}

export const brands: Brand[] = [
  { name: 'Яндекс Алиса', file: 'Alisa_Yandex.svg' },
  { name: 'Aqara', file: 'aqara.svg' },
  { name: 'Xiaomi', file: 'xiaomi.svg' },
  { name: 'Tuya', file: 'tuya.svg' },
  { name: 'Sonoff', file: 'sonoff.svg' },
  { name: 'iRobot', file: 'irobot-short.svg' },
  { name: 'Apple Home', file: 'apple-home.svg' },
  { name: 'Shelly', file: 'shelly.svg' },
  { name: 'Arlight', file: 'arlight.svg' },
  { name: 'Aledo', file: 'aledo.svg' },
  { name: 'ZONT', file: 'zont.svg' },
  { name: 'Smart Life', file: 'smartlife.svg' },
  { name: 'iNELS', file: 'inels.svg' },
  { name: 'Hikvision', file: 'hikvision.svg' },
  { name: 'Sonos', file: 'sonos.svg' },
];
