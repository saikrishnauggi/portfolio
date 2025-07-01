
import { ArrowUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/40 py-12 px-4 relative">
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 glass-button rounded-full p-3 hover:scale-110 cyber-glow"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>

      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent mb-2">
              Sai Krishna Uggi
            </h3>
            <p className="text-muted-foreground">
              Ambiguous Learner | AIML Student | Future-ready Software Developer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-cyber-blue transition-colors">
                  About
                </a>
                <a href="#projects" className="block text-muted-foreground hover:text-cyber-blue transition-colors">
                  Projects
                </a>
                <a href="#experience" className="block text-muted-foreground hover:text-cyber-blue transition-colors">
                  Experience
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-cyber-blue transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Skills</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">Machine Learning</p>
                <p className="text-muted-foreground">Web Development</p>
                <p className="text-muted-foreground">Data Science</p>
                <p className="text-muted-foreground">AI Solutions</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:saikrishnauggi@gmail.com" 
                  className="block text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  saikrishnauggi@gmail.com
                </a>
                <a 
                  href="https://linkedin.com/in/sai-krishna-uggi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/saikrishnauggi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground mb-4 md:mb-0">
                © 2025 Sai Krishna Uggi. All rights reserved.
              </p>
              <p className="text-muted-foreground flex items-center">
                Made with <Heart className="h-4 w-4 text-cyber-pink mx-1" /> using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
