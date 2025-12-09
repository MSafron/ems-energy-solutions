import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { NewsCard } from '@/components/news/NewsCard';
import { CategoryFilter } from '@/components/news/CategoryFilter';
import { useNewsList } from '@/hooks/useNews';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function News() {
  const [category, setCategory] = useState('Все');
  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useNewsList(category);

  const allNews = data?.pages.flat() ?? [];

  return (
    <>
      <Helmet>
        <title>Новости энергетики и энергоэффективности | EMC3</title>
        <meta
          name="description"
          content="Актуальные новости энергетического рынка России: тарифы, регулирование, зелёная энергетика, LED-освещение, автоматизация"
        />
        <link rel="canonical" href="https://emc3.ru/news" />
        <meta property="og:title" content="Новости энергетики | EMC3" />
        <meta property="og:description" content="Актуальные новости энергетического рынка России" />
        <meta property="og:url" content="https://emc3.ru/news" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow pt-24 pb-12">
          <div className="container mx-auto px-4">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary flex items-center gap-1">
                <Home className="w-4 h-4" />
                Главная
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Новости</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Новости энергетики
            </h1>

            {/* Category Filter */}
            <div className="mb-8">
              <CategoryFilter selected={category} onSelect={setCategory} />
            </div>

            {/* News Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-40 w-full rounded-xl" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ))}
              </div>
            ) : allNews.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {allNews.map((news) => (
                    <NewsCard key={news.news_id} news={news} />
                  ))}
                </div>

                {/* Load More */}
                {hasNextPage && (
                  <div className="flex justify-center mt-8">
                    <Button
                      onClick={() => fetchNextPage()}
                      disabled={isFetchingNextPage}
                      size="lg"
                    >
                      {isFetchingNextPage ? 'Загрузка...' : 'Загрузить ещё'}
                    </Button>
                  </div>
                )}

                {!hasNextPage && allNews.length > 0 && (
                  <p className="text-center text-muted-foreground mt-8">
                    Вы просмотрели все новости
                  </p>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Новости пока не добавлены
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Подпишитесь на наш{' '}
                  <a
                    href="https://t.me/emc3_invest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Telegram-канал
                  </a>{' '}
                  для получения актуальных новостей
                </p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
