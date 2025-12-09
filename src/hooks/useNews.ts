import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import type { NewsItem } from "@/types/news";

const PAGE_SIZE = 12;

// MOCK DATA - Replace with real Supabase queries once 'publications' table is created
// This allows the UI to work while you set up the database via n8n

const MOCK_NEWS: NewsItem[] = [
  {
    news_id: 'tg-1',
    original_id: 1,
    title: 'Энергосистема на пределе: что происходит с мощностями?',
    slug: '1-energosistema-na-predele',
    full_text: '<b>Энергосистема на пределе: что происходит с мощностями?</b>\n\nКоллеги, вопрос, который в последнее время звучит всё чаще: можем ли мы столкнуться с веерными отключениями электроэнергии?\n\nДефицит мощности растёт, особенно в часы пиковых нагрузок. Износ генерирующего оборудования, недостаточные темпы ввода новых мощностей и рост потребления создают серьёзные вызовы для энергосистемы.',
    plain_text: 'Энергосистема на пределе: что происходит с мощностями? Коллеги, вопрос, который в последнее время звучит всё чаще...',
    short_description: 'Коллеги, вопрос, который в последнее время звучит всё чаще: можем ли мы столкнуться с веерными отключениями электроэнергии? Дефицит мощности растёт...',
    publication_date: new Date().toISOString(),
    published_at: new Date().toISOString(),
    category: 'Тарифы и цены',
    image_url: null,
    views_count: 1250,
    likes_count: 89,
    source: 'telegram',
    telegram_post_id: '156',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    news_id: 'tg-2',
    original_id: 2,
    title: 'Зелёная энергетика в России: итоги 2024 года',
    slug: '2-zelenaya-energetika-itogi',
    full_text: '<b>Зелёная энергетика в России: итоги 2024 года</b>\n\nВозобновляемые источники энергии продолжают развиваться. Солнечные и ветровые электростанции показывают стабильный рост мощности.',
    plain_text: 'Зелёная энергетика в России: итоги 2024 года. Возобновляемые источники энергии продолжают развиваться...',
    short_description: 'Возобновляемые источники энергии продолжают развиваться. Солнечные и ветровые электростанции показывают стабильный рост мощности.',
    publication_date: new Date(Date.now() - 86400000).toISOString(),
    published_at: new Date(Date.now() - 86400000).toISOString(),
    category: 'Зелёная энергетика',
    image_url: null,
    views_count: 890,
    likes_count: 56,
    source: 'telegram',
    telegram_post_id: '155',
    created_at: new Date(Date.now() - 86400000).toISOString(),
    updated_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    news_id: 'tg-3',
    original_id: 3,
    title: 'Новые правила регулирования розничных рынков электроэнергии',
    slug: '3-novye-pravila-regulirovaniya',
    full_text: '<b>Новые правила регулирования розничных рынков электроэнергии</b>\n\nПравительство РФ утвердило изменения в правилах функционирования розничных рынков электроэнергии.',
    plain_text: 'Новые правила регулирования розничных рынков электроэнергии. Правительство РФ утвердило изменения...',
    short_description: 'Правительство РФ утвердило изменения в правилах функционирования розничных рынков электроэнергии.',
    publication_date: new Date(Date.now() - 172800000).toISOString(),
    published_at: new Date(Date.now() - 172800000).toISOString(),
    category: 'Регулирование',
    image_url: null,
    views_count: 650,
    likes_count: 34,
    source: 'telegram',
    telegram_post_id: '154',
    created_at: new Date(Date.now() - 172800000).toISOString(),
    updated_at: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    news_id: 'tg-4',
    original_id: 4,
    title: 'LED-освещение: экономия до 70% на электроэнергии',
    slug: '4-led-osveschenie-ekonomiya',
    full_text: '<b>LED-освещение: экономия до 70% на электроэнергии</b>\n\nПереход на светодиодное освещение позволяет значительно сократить затраты на электроэнергию.',
    plain_text: 'LED-освещение: экономия до 70% на электроэнергии. Переход на светодиодное освещение позволяет значительно сократить затраты...',
    short_description: 'Переход на светодиодное освещение позволяет значительно сократить затраты на электроэнергию и обслуживание.',
    publication_date: new Date(Date.now() - 259200000).toISOString(),
    published_at: new Date(Date.now() - 259200000).toISOString(),
    category: 'Освещение',
    image_url: null,
    views_count: 1100,
    likes_count: 78,
    source: 'telegram',
    telegram_post_id: '153',
    created_at: new Date(Date.now() - 259200000).toISOString(),
    updated_at: new Date(Date.now() - 259200000).toISOString(),
  },
];

export function useNewsList(category: string = 'Все') {
  return useInfiniteQuery({
    queryKey: ['news', 'list', category],
    queryFn: async ({ pageParam = 0 }) => {
      // TODO: Replace with real Supabase query once publications table exists
      // const { data, error } = await supabase
      //   .from('publications')
      //   .select('*')
      //   .eq('status', 'published')
      //   .order('published_at', { ascending: false })
      //   .range(pageParam * PAGE_SIZE, (pageParam + 1) * PAGE_SIZE - 1);
      
      let items = [...MOCK_NEWS];
      
      if (category !== 'Все') {
        items = items.filter(item => item.category === category);
      }
      
      const start = pageParam * PAGE_SIZE;
      return items.slice(start, start + PAGE_SIZE);
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === PAGE_SIZE ? allPages.length : undefined;
    },
    initialPageParam: 0,
  });
}

export function useLatestNews(limit: number = 10) {
  return useQuery({
    queryKey: ['news', 'latest', limit],
    queryFn: async () => {
      // TODO: Replace with real Supabase query once publications table exists
      // const { data, error } = await supabase
      //   .from('publications')
      //   .select('*')
      //   .eq('status', 'published')
      //   .order('published_at', { ascending: false })
      //   .limit(limit);
      
      return MOCK_NEWS.slice(0, limit);
    },
  });
}

export function useNewsArticle(slug: string) {
  return useQuery({
    queryKey: ['news', 'article', slug],
    queryFn: async () => {
      // TODO: Replace with real Supabase query once publications table exists
      // Extract ID from slug (format: "123-title-text")
      const idMatch = slug.match(/^(\d+)/);
      if (!idMatch) return null;
      
      const id = parseInt(idMatch[1]);
      return MOCK_NEWS.find(n => n.original_id === id) || null;
    },
    enabled: !!slug,
  });
}
