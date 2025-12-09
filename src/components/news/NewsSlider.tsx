import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { NewsCard } from './NewsCard';
import type { NewsItem } from '@/types/news';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface NewsSliderProps {
  news: NewsItem[];
  title?: string;
}

export function NewsSlider({ news, title = 'Актуальные новости' }: NewsSliderProps) {
  if (!news || news.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
          <span className="text-2xl">⚡</span> {title}
        </h2>
        <Link
          to="/news"
          className="text-primary hover:text-primary/80 flex items-center gap-1 font-medium"
        >
          Все новости
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {news.map((item) => (
            <CarouselItem
              key={item.news_id}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <NewsCard news={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4" />
        <CarouselNext className="hidden md:flex -right-4" />
      </Carousel>
    </section>
  );
}
