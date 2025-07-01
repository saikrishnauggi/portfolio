
import { BookOpen, Brain, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="h-8 w-8 text-cyber-purple" />,
      title: "AI & ML Enthusiast",
      description: "Passionate about artificial intelligence and machine learning applications"
    },
    {
      icon: <Code className="h-8 w-8 text-cyber-blue" />,
      title: "Full-Stack Developer",
      description: "Building end-to-end solutions with modern web technologies"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-cyber-green" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and expanding my skill set"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-cyber-pink" />,
      title: "Problem Solver",
      description: "Love tackling complex challenges with innovative solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hello! I'm Sai Krishna Uggi, a passionate software developer and AI enthusiast currently pursuing 
                my B.Tech in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning 
                at Guru Nanak Institutions Technical Campus.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I believe in being an "Ambiguous Learner" - someone who embraces uncertainty and finds clarity through 
                exploration. My journey in technology has been driven by curiosity and a desire to create meaningful 
                solutions that make a difference.
              </p>

              <div className="bg-gradient-to-r from-cyber-blue/20 to-accent/20 p-4 rounded-lg border border-cyber-blue/30">
                <h3 className="text-xl font-semibold text-cyber-blue mb-2">Education</h3>
                <p className="text-muted-foreground">
                  B.Tech CSE (AIML) • 2022–2026<br />
                  Guru Nanak Institutions Technical Campus
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
