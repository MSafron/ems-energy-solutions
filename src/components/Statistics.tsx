const Statistics = () => {
  const stats = [
    { value: "10", label: "Лет на рынке" },
    { value: "13", label: "Реализованных проектов" },
    { value: "92%", label: "Эффективность решений" }
  ];

  return (
    <section className="py-20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-lg bg-background/60 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent mb-4">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
