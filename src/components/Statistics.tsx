const Statistics = () => {
  const stats = [
    { value: "10", label: "Лет на рынке" },
    { value: "13", label: "Реализованных проектов" },
    { value: "92%", label: "Эффективность решений" }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(65,124,252,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(17,70,184,0.15),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-lg bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 scroll-animate"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-4">
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
