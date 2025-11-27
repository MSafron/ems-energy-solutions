import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/emc3-logo.png";

interface Particle {
  x: number;
  y: number;
  size: number;
  brightness: number;
  targetBrightness: number;
  speed: number;
  pulseSpeed: number;
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles (city lights)
    const particles: Particle[] = [];
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        brightness: Math.random(),
        targetBrightness: Math.random(),
        speed: Math.random() * 0.02 + 0.01,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update brightness (flickering effect)
        if (Math.abs(particle.brightness - particle.targetBrightness) < 0.01) {
          particle.targetBrightness = Math.random();
        }
        particle.brightness += (particle.targetBrightness - particle.brightness) * particle.speed;

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 8
        );

        const alpha = particle.brightness * 0.8;
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(0.2, `rgba(65, 124, 252, ${alpha * 0.8})`);
        gradient.addColorStop(0.5, `rgba(17, 70, 184, ${alpha * 0.4})`);
        gradient.addColorStop(1, "rgba(17, 70, 184, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 8, 0, Math.PI * 2);
        ctx.fill();

        // Core bright point
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.brightness})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Slow drift
        particle.y += particle.pulseSpeed * 0.3;
        if (particle.y > canvas.height) particle.y = 0;
      });

      // Draw light streams (roads)
      ctx.strokeStyle = "rgba(65, 124, 252, 0.1)";
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length - 1; i += 15) {
        const p1 = particles[i];
        const p2 = particles[i + 1];
        const distance = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "linear-gradient(to bottom, #0a0f1e, #1a1f3e)" }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-block mb-4">
            <img src={logo} alt="ЕМС.3" className="h-32 md:h-40 lg:h-48 w-auto mx-auto" />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Профессиональная
            <br />
            <span className="text-primary">Энергосервисная Компания</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Специализируемся на комплексных проектах энергосбережения и энергоэффективности с собственными инвестициями
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-2">
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
