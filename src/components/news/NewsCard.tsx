import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ExternalLink, Eye, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShareButton } from './ShareButton';
import type { NewsItem } from '@/types/news';
import { CATEGORY_COLORS } from '@/types/news';

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  const telegramUrl = news.telegram_post_id
    ? `https://t.me/emc3_invest/${news.telegram_post_id}`
    : 'https://t.me/emc3_invest';

  const cleanDescription = news.short_description
    ?.replace(/<[^>]+>/g, '')
    .slice(0, 150);

  const relativeDate = formatDistanceToNow(
    new Date(news.publication_date),
    { addSuffix: true, locale: ru }
  );

  const categoryClass = CATEGORY_COLORS[news.category] || CATEGORY_COLORS['Энергетика'];

  return (
    <article className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-border">
      {/* Image */}
      <div className="relative aspect-video bg-gradient-to-br from-primary to-accent overflow-hidden">
        {news.image_url ? (
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="w-16 h-16 text-primary-foreground/50" />
          </div>
        )}
        {news.source === 'telegram' && (
          <div className="absolute top-3 right-3 bg-[#0088cc] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <span>📱</span> Telegram
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Metadata */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs px-2 py-1 rounded-full ${categoryClass}`}>
            {news.category}
          </span>
          <span className="text-xs text-muted-foreground">{relativeDate}</span>
        </div>

        {/* Title */}
        <Link to={`/news/${news.slug}`}>
          <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
            {news.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
          {cleanDescription}...
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          {news.views_count > 0 && (
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" /> {news.views_count}
            </span>
          )}
          {news.likes_count > 0 && (
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3" /> {news.likes_count}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-[#0088cc] hover:bg-[#006699]">
              <ExternalLink className="w-4 h-4 mr-1" />
              Telegram
            </Button>
          </a>

          <ShareButton news={news} />
        </div>
      </div>
    </article>
  );
}
