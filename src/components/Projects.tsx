
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Movie Review Sentiment Analysis System",
      technologies: ["Python", "NLTK", "Scikit-learn", "Machine Learning"],
      problem: "Analyzing movie reviews to determine sentiment and provide insights for entertainment industry",
      features: [
        "Natural Language Processing for text analysis",
        "Machine learning model for sentiment classification",
        "Real-time sentiment prediction",
        "Visualization of sentiment trends"
      ],
      github: "https://github.com/saikrishnauggi/Movie_Review_Sentiment_Analysis_System"
    },
    {
      title: "Thyroid Detection System",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Healthcare AI"],
      problem: "Early detection of thyroid disorders using machine learning algorithms",
      features: [
        "Medical data preprocessing and analysis",
        "Multi-class classification for thyroid conditions",
        "Feature importance analysis",
        "User-friendly diagnostic interface"
      ],
      github: "https://github.com/saikrishnauggi/Thyroid_Detection_Using_Machine_Learning"
    },
    {
      title: "Tourism Management System",
      technologies: ["Java", "MySQL", "Web Development", "Database Design"],
      problem: "Comprehensive platform for managing tourism activities and bookings",
      features: [
        "Complete booking management system",
        "Tour package customization",
        "User authentication and profiles",
        "Real-time availability tracking"
      ],
      github: "https://github.com/saikrishnauggi/Travel-and-Toursim-Management-System"
    },
    {
      title: "Fake News Detection System",
      technologies: ["Python", "NLP", "Deep Learning", "Text Classification"],
      problem: "Combating misinformation by automatically detecting fake news articles",
      features: [
        "Advanced NLP preprocessing pipeline",
        "Multi-model ensemble approach",
        "Real-time news verification",
        "Source credibility analysis"
      ],
      github: "https://github.com/saikrishnauggi/fake_news_detection_using_machine_learning"
    },
    {
      title: "Mini Web Applications Suite",
      technologies: ["JavaScript", "HTML", "CSS", "DOM Manipulation", "APIs"],
      problem: "Collection of practical web applications solving everyday problems",
      features: [
        "Personal Blog with dynamic content",
        "EMI Calculator with amortization schedule",
        "Contact Book with search functionality",
        "Responsive design across all applications"
      ],
      github: "https://github.com/saikrishnauggi"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing innovative solutions across AI, machine learning, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyber-blue transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-cyber-blue/20 text-cyber-blue rounded border border-cyber-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-4 italic">
                  {project.problem}
                </p>

                <div className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-cyber-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 glass-button text-xs"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
