
import { useState, useEffect } from 'react';
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Ambiguous Learner',
    'AIML Student', 
    'Future-ready Software Developer'
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentTitle = titles[currentIndex];
    
    if (currentText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setCurrentText(currentTitle.slice(0, currentText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, titles]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 6}s`
            }}
          />
        ))}
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30" style={{ backgroundSize: '50px 50px' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-blue via-accent to-cyber-purple bg-clip-text text-transparent">
            SAI KRISHNA UGGI
          </h1>
          
          <div className="h-12 mb-8">
            <span className="text-xl md:text-2xl text-muted-foreground">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about crafting innovative solutions through AI, Machine Learning, and cutting-edge software development. 
            Currently pursuing B.Tech in Computer Science with specialization in AIML.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="glass-button group"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/SAI_KRISHNA_UGGI_RESUME.pdf';
                link.download = 'SAI_KRISHNA_UGGI_RESUME.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-button"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-button"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/saikrishnauggi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card hover:scale-110 transition-all duration-300 cyber-glow"
            >
              <Github className="h-6 w-6 text-cyber-blue" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sai-krishna-uggi-30037525a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card hover:scale-110 transition-all duration-300 cyber-glow"
            >
              <Linkedin className="h-6 w-6 text-cyber-blue" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-cyber-blue" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
