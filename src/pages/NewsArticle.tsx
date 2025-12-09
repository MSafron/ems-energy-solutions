import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNewsArticle, useLatestNews } from '@/hooks/useNews';
import { ShareButton } from '@/components/news/ShareButton';
import { NewsCard } from '@/components/news/NewsCard';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { CATEGORY_COLORS } from '@/types/news';
import { Home, ChevronRight, ExternalLink, Eye, Heart, Calendar, Zap } from 'lucide-react';

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, error } = useNewsArticle(slug || '');
  const { data: relatedNews } = useLatestNews(4);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Skeleton className="h-6 w-48 mb-6" />
            <Skeleton className="h-12 w-full mb-4" />
            <Skeleton className="h-6 w-32 mb-8" />
            <Skeleton className="h-64 w-full rounded-xl mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 text-center py-20">
            <h1 className="text-2xl font-bold mb-4">Новость не найдена</h1>
            <p className="text-muted-foreground mb-8">
              Возможно, она была удалена или перемещена
            </p>
            <Link to="/news">
              <Button>Вернуться к новостям</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const telegramUrl = article.telegram_post_id
    ? `https://t.me/emc3_invest/${article.telegram_post_id}`
    : 'https://t.me/emc3_invest';

  const categoryClass = CATEGORY_COLORS[article.category] || CATEGORY_COLORS['Энергетика'];
  const formattedDate = format(new Date(article.publication_date), 'd MMMM yyyy', { locale: ru });

  // Filter out current article from related
  const filteredRelated = relatedNews?.filter((n) => n.news_id !== article.news_id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{article.title} | Новости EMC3</title>
        <meta name="description" content={article.short_description} />
        <link rel="canonical" href={`https://emc3.ru/news/${article.slug}`} />

        {/* Open Graph */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.short_description} />
        <meta property="og:image" content={article.image_url || '/og-default-news.jpg'} />
        <meta property="og:url" content={`https://emc3.ru/news/${article.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={article.published_at} />
        <meta property="article:section" content={article.category} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.short_description} />
        <meta name="twitter:image" content={article.image_url || '/og-default-news.jpg'} />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: article.title,
            description: article.short_description,
            image: article.image_url,
            datePublished: article.published_at,
            author: {
              '@type': 'Organization',
              name: 'EMC3',
            },
            publisher: {
              '@type': 'Organization',
              name: 'EMC3',
              logo: {
                '@type': 'ImageObject',
                url: 'https://emc3.ru/logo.png',
              },
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow pt-24 pb-12">
          <article className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary flex items-center gap-1">
                <Home className="w-4 h-4" />
                Главная
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/news" className="hover:text-primary">
                Новости
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground line-clamp-1">{article.title}</span>
            </nav>

            {/* Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-sm px-3 py-1 rounded-full ${categoryClass}`}>
                  {article.category}
                </span>
                {article.source === 'telegram' && (
                  <span className="bg-[#0088cc] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    📱 Telegram
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formattedDate}
                </span>
                {article.views_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" /> {article.views_count}
                  </span>
                )}
                {article.likes_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" /> {article.likes_count}
                  </span>
                )}
              </div>
            </header>

            {/* Image */}
            {article.image_url ? (
              <div className="mb-8 rounded-xl overflow-hidden">
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-auto"
                />
              </div>
            ) : (
              <div className="mb-8 rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Zap className="w-24 h-24 text-primary-foreground/50" />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none mb-8 dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: article.full_text }}
            />

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 py-6 border-t border-border">
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#0088cc] hover:bg-[#006699]">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Читать в Telegram
                </Button>
              </a>
              <ShareButton news={article} />
            </div>
          </article>

          {/* Related News */}
          {filteredRelated && filteredRelated.length > 0 && (
            <section className="container mx-auto px-4 mt-12">
              <h2 className="text-2xl font-bold mb-6">Другие новости</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRelated.map((news) => (
                  <NewsCard key={news.news_id} news={news} />
                ))}
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}
