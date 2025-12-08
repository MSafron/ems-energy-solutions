import { MapPin, FileText, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Уличное освещение",
    location: "Раменский район, Московская область",
    type: "Энергосервисный контракт",
    status: "В работе",
    statusVariant: "default" as const
  },
  {
    title: "Информационная инфраструктура для медицины",
    description: "Лизинг оборудования для доступа к МИС",
    type: "Комплексное решение",
    status: "Активный",
    statusVariant: "secondary" as const
  }
];

const Projects = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Текущие проекты
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 border border-border card-hover scroll-animate"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <Badge variant={project.statusVariant}>
                  {project.status}
                </Badge>
              </div>
              
              {project.location && (
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.location}</span>
                </div>
              )}
              
              {project.description && (
                <p className="text-muted-foreground mb-3 text-sm">
                  {project.description}
                </p>
              )}
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm">{project.type}</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto scroll-animate">
          Опыт основателей компании с 2009 года консолидирован в EMC.3 — 
          более 15 лет экспертизы в сфере энергосбережения
        </p>
      </div>
    </section>
  );
};

export default Projects;