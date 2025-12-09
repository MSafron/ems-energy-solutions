import { useLatestNews } from '@/hooks/useNews';
import { NewsSlider } from './NewsSlider';
import { Skeleton } from '@/components/ui/skeleton';

export function NewsSection() {
  const { data: news, isLoading, error } = useLatestNews(10);

  if (error) {
    return null; // Silently fail if news not available yet
  }

  if (isLoading) {
    return (
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-40 w-full rounded-xl" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!news || news.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <NewsSlider news={news} title="Актуальные новости энергетики" />
      </div>
    </section>
  );
}
