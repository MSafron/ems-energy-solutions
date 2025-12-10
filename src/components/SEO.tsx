import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "ЕМС.3 — Энергосервисная инвестиционная компания",
  description = "Профессиональная энергосервисная компания, специализирующаяся на комплексных проектах энергосбережения и энергоэффективности с собственными инвестициями с 2009 года",
  keywords = "энергосервисный контракт, ЭСКО, энергоэффективность, энергосбережение, инвестиции в энергетику, снижение затрат на энергоресурсы",
  image = "https://emc3.ru/og-image.jpg",
  url = "https://emc3.ru",
  type = "website"
}: SEOProps) => {
  return (
    <Helmet>
      <html lang="ru" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="ru_RU" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ЕМС.3",
          "url": "https://emc3.ru",
          "logo": "https://emc3.ru/favicon.png",
          "description": description,
          "foundingDate": "2009",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Москва",
            "addressCountry": "RU"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "info@emc3.ru",
            "contactType": "customer service"
          },
          "areaServed": "RU",
          "serviceType": [
            "Энергосервисные контракты",
            "Энергоаудит",
            "Повышение энергоэффективности",
            "Модернизация энергетической инфраструктуры"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
