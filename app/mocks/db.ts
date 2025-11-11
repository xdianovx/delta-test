export const rawMetrics = [
  {
    metric: "Выручка, руб",
    today: 500521,
    yesterday: 480521,
    weekday: 4805121,
  },
  { metric: "Наличные", today: 300000, yesterday: 300000, weekday: 300000 },
  {
    metric: "Безналичный расчет",
    today: 100000,
    yesterday: 100000,
    weekday: 100000,
  },
  {
    metric: "Кредитные карты",
    today: 100521,
    yesterday: 100521,
    weekday: 100521,
  },
  { metric: "Средний чек, руб", today: 1300, yesterday: 900, weekday: 900 },
  { metric: "Средний гость, руб", today: 1200, yesterday: 800, weekday: 800 },
  {
    metric: "Удаления из чека (после оплаты), руб",
    today: 1000,
    yesterday: 1100,
    weekday: 900,
  },
  {
    metric: "Удаления из чека (до оплаты), руб",
    today: 1300,
    yesterday: 1300,
    weekday: 900,
  },
  { metric: "Количество чеков", today: 34, yesterday: 36, weekday: 34 },
  { metric: "Количество гостей", today: 34, yesterday: 36, weekday: 32 },
];

export const graphData: Record<string, { labels: string[]; values: number[] }> =
  {
    "Выручка, руб": {
      labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      values: [420000, 450000, 470000, 500000, 480000, 460000, 500521],
    },
    Наличные: {
      labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      values: [280000, 290000, 300000, 300000, 300000, 300000, 300000],
    },
    // Добавь остальные при необходимости
  };
