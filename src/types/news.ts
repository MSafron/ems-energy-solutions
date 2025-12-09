export interface NewsItem {
  news_id: string;
  original_id: number;
  title: string;
  slug: string;
  full_text: string;
  plain_text: string;
  short_description: string;
  publication_date: string;
  published_at: string;
  category: string;
  image_url: string | null;
  views_count: number;
  likes_count: number;
  source: 'telegram' | 'manual';
  telegram_post_id: string | null;
  created_at: string;
  updated_at: string;
}

export const CATEGORY_COLORS: Record<string, string> = {
  'Тарифы и цены': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  'Зелёная энергетика': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  'Регулирование': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'Освещение': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  'Автоматизация': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  'Генерация': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  'Сети': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
  'Энергоэффективность': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
  'Цифровая инфраструктура': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  'Атомная энергетика': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  'Энергетика': 'bg-muted text-muted-foreground',
};

export const NEWS_CATEGORIES = [
  'Все',
  'Тарифы и цены',
  'Зелёная энергетика',
  'Регулирование',
  'Автоматизация',
  'Освещение',
  'Энергетика',
];
