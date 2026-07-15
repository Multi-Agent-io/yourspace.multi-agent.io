export type AutomationCategory = 'light' | 'climate' | 'security' | 'devices' | 'media';

export const categoryLabels: Record<AutomationCategory, string> = {
  light: 'Свет',
  climate: 'Климат',
  security: 'Безопасность',
  devices: 'Устройства',
  media: 'Мультимедиа',
};

export type Automation = {
  id: string;
  category: AutomationCategory;
  /** показывается во вкладке «Популярное» и может попасть в тизер на главной */
  popular?: boolean;
  title: string;
  description: string;
  includes?: string[];
  /** цена работ в рублях; если не указана — карточка предлагает узнать цену */
  price?: number;
  priceFrom?: boolean;
  priceNote?: string;
};

export const automations: Automation[] = [
  // --- с ценами (прайс) ---
  {
    id: 'welcome-light',
    category: 'light',
    popular: true,
    title: 'Приветственный свет',
    description: 'При входе домой свет включается сам. Опционально — музыка и климат.',
    includes: ['Присутствие дома по Wi-Fi', 'Простая автоматизация'],
    price: 4680,
  },
  {
    id: 'wake-up',
    category: 'light',
    popular: true,
    title: 'Пробуждение с будильником',
    description:
      'При звонке будильника на смартфоне — без колонок и жёсткого расписания — плавно включается свет и открываются шторы.',
    includes: ['Присутствие дома по Wi-Fi', 'Проброс будильника', 'Комплексная автоматизация'],
    price: 7020,
    priceFrom: true,
    priceNote: 'с присутствием — 9 490 ₽',
  },
  {
    id: 'warm-floor',
    category: 'climate',
    popular: true,
    title: 'Тёплый пол по утрам',
    description:
      'За полчаса до будильника на смартфоне подогреется любой тёплый пол — без колонок и жёсткого расписания.',
    includes: ['Присутствие дома по Wi-Fi', 'Проброс будильника', 'Комплексная автоматизация'],
    price: 7020,
    priceFrom: true,
    priceNote: 'с присутствием — 9 490 ₽',
  },
  {
    id: 'night-mode',
    category: 'light',
    title: 'Ночной режим',
    description:
      'При активации «Не беспокоить» или расписания сна на смартфоне текущие светильники диммируются до 20%, а новые включаются только на 20%.',
    includes: ['Присутствие дома по Wi-Fi', 'Проброс ночного режима', 'Комплексная автоматизация'],
    price: 7020,
    priceFrom: true,
    priceNote: 'с присутствием — 9 490 ₽',
  },
  {
    id: 'master-switch',
    category: 'light',
    popular: true,
    title: 'Мастер-выключатель',
    description:
      'Одно нажатие или удержание кнопки выключает всё: свет, мультимедиа, меняет уставку климата.',
    price: 1820,
  },
  {
    id: 'notifications',
    category: 'security',
    popular: true,
    title: 'Любые уведомления',
    description:
      'О срабатывании датчиков и важных событиях — с фотографиями или данными прямо в уведомлении.',
    price: 1170,
    priceFrom: true,
  },
  {
    id: 'voice-assistants',
    category: 'devices',
    popular: true,
    title: 'Интеграция с Яндекс Алисой / Apple Home',
    description:
      'Голосовое управление, управление станцией без голоса, управление из CarPlay и многое другое.',
    price: 3500,
    priceFrom: true,
  },
  {
    id: 'audio',
    category: 'media',
    title: 'Интеграция аудиосистем',
    description:
      'Bluetooth, AUX, Sonos, AirPlay и другие системы. Управление по сценариям, воспроизведение из любого источника на любом устройстве, «Алиса, продолжи на колонках».',
    price: 7020,
    priceFrom: true,
    priceNote: 'за зону/устройство',
  },
  {
    id: 'dashboards',
    category: 'devices',
    title: 'Персонализированные дашборды',
    description: 'Удобные панели для телефона и планшета, гостевые интерфейсы.',
    price: 3500,
    priceFrom: true,
    priceNote: 'за экран',
  },
  {
    id: 'alarm-mode',
    category: 'security',
    popular: true,
    title: 'Режим охраны на основе существующих датчиков',
    description:
      'Уведомления об открытии, движении, вибрации, протечке, дыме. Различные способы поставить и снять с охраны.',
    price: 13910,
    priceFrom: true,
  },
  {
    id: 'alarm-integration',
    category: 'security',
    title: 'Интеграция установленных систем охраны',
    description:
      'Hikvision AX Pro и другие: статусы датчиков, постановка и снятие с охраны из одного приложения.',
    price: 5330,
    priceFrom: true,
    priceNote: 'без учёта настройки системы охраны',
  },

  // --- климат, цена по запросу ---
  {
    id: 'trv',
    category: 'climate',
    title: 'Умные термоголовки на радиаторы',
    description: 'Управление батареями из приложения, по расписанию и сценариям.',
  },
  {
    id: 'ir-ac',
    category: 'climate',
    title: 'Управление кондиционером без пульта',
    description: 'ИК-пульт в системе: даже старый кондиционер слушается телефона и голоса.',
  },
  {
    id: 'smart-thermostat',
    category: 'climate',
    title: 'Замена термостатов на умные',
    description: 'Управление тёплым полом и отоплением из приложения и голосом.',
  },
  {
    id: 'bedtime-climate',
    category: 'climate',
    title: 'Комфортная спальня ко сну',
    description: 'Таймер на охлаждение или нагрев комнаты перед сном.',
  },
  {
    id: 'humidifier',
    category: 'climate',
    title: 'Увлажнитель по датчику влажности',
    description: 'Умный — интегрируем, обычный — включим через розетку, когда воздух сухой.',
  },
  {
    id: 'stuffiness-alert',
    category: 'climate',
    title: 'Предупреждение о духоте',
    description: 'Датчики CO2 и температуры подскажут, когда пора проветрить.',
  },
  {
    id: 'co2-ventilation',
    category: 'climate',
    title: 'Проветривание по датчику CO2',
    description: 'Бризер или клапан включаются сами, пока воздух не станет свежим.',
  },

  // --- свет, цена по запросу ---
  {
    id: 'auto-light-wc',
    category: 'light',
    title: 'Автоматический свет в санузлах и гардеробных',
    description: 'Свет включается по движению и гаснет сам — выключатель больше не нужен.',
  },
  {
    id: 'night-light',
    category: 'light',
    title: 'Ночная подсветка',
    description: 'Мягкий свет по пути на кухню или в санузел, чтобы не будить домочадцев.',
  },
  {
    id: 'ambient-strips',
    category: 'light',
    title: 'Атмосферные ленты для кино и игр',
    description: '«Неоновая» подсветка для погружения в фильм или игру.',
  },
  {
    id: 'party-light',
    category: 'light',
    title: 'Светомузыка для вечеринок',
    description: 'Светодиодная подсветка реагирует на музыку.',
  },
  {
    id: 'dimming',
    category: 'light',
    title: 'Диммирование голосом и из приложения',
    description: 'Плавная яркость для любых светильников — даже там, где не было диммера.',
  },

  // --- устройства, цена по запросу ---
  {
    id: 'curtains',
    category: 'devices',
    title: 'Умные шторы',
    description: 'Электрокарнизы: открываются по кнопке, голосу, сценарию или будильнику.',
  },
  {
    id: 'vacuum',
    category: 'devices',
    title: 'Робот-пылесос по расписанию присутствия',
    description: 'Уборка начинается, только когда вы ушли, — и не мешает, когда вы дома.',
  },
  {
    id: 'locks',
    category: 'devices',
    title: 'Умные замки',
    description: 'Поставим замок без врезки или интегрируем существующий электромеханический.',
  },
  {
    id: 'tv',
    category: 'media',
    title: 'Управление телевизором',
    description: 'Питание, громкость, каналы — из приложения, по сценариям и голосом.',
  },
  {
    id: 'gates',
    category: 'devices',
    title: 'Управление воротами',
    description: 'Ворота и шлагбаумы через реле: с телефона, по геозоне, из CarPlay.',
  },
  {
    id: 'irrigation',
    category: 'devices',
    title: 'Умный полив',
    description: 'Краны полива работают по расписанию и только в сухую погоду.',
  },
  {
    id: 'greenhouse',
    category: 'devices',
    title: 'Вентиляция теплиц',
    description: 'Контроль климата в теплице: форточки и вентиляторы по датчикам.',
  },

  // --- безопасность, цена по запросу ---
  {
    id: 'leak-protection',
    category: 'security',
    title: 'Краны под замком',
    description: 'Перекрытие воды и газа при обнаружении утечки. Плюс уведомление в приложении и Telegram.',
  },
  {
    id: 'motion-recording',
    category: 'security',
    title: 'Видеозапись по движению',
    description: 'Запись видео или съёмка фото по датчику движения или другому триггеру.',
  },
  {
    id: 'video-doorbell',
    category: 'security',
    title: '«Видеодомофон»',
    description: 'Видно, кто пришёл, — прямо в телефоне или на панели.',
  },
  {
    id: 'cameras',
    category: 'security',
    title: 'Все камеры в одном приложении',
    description: 'Изображения со всех камер — рядом с остальным умным домом, без чужих облаков.',
  },
  {
    id: 'presence-fall',
    category: 'security',
    title: 'Датчики присутствия и детектор падения',
    description: 'Мультизональные датчики знают, в какой части комнаты человек, и заметят падение.',
  },
];
