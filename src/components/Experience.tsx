
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Edunet Foundation",
      position: "AI Intern",
      duration: "April 2024",
      location: "AICTE + Microsoft Partnership",
      type: "Internship",
      highlights: [
        "Gained hands-on experience with Microsoft Azure AI services",
        "Developed and implemented neural network architectures",
        "Worked on real-world AI projects solving industry problems",
        "Collaborated with cross-functional teams on AI solutions",
        "Enhanced understanding of cloud-based AI deployment"
      ],
      technologies: ["Azure", "Neural Networks", "Python", "AI/ML", "Cloud Computing"]
    },
    {
      company: "Saiket Systems",
      position: "Software Development Intern",
      duration: "May 2024",
      location: "Remote",
      type: "Internship",
      highlights: [
        "Built multiple responsive mini web applications",
        "Mastered DOM manipulation and modern JavaScript",
        "Integrated third-party APIs for enhanced functionality",
        "Implemented responsive design principles across projects",
        "Gained proficiency in full-stack web development"
      ],
      technologies: ["JavaScript", "HTML", "CSS", "APIs", "Responsive Design", "DOM"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyber-pink to-cyber-purple bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-pink to-cyber-purple mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:w-1/3">
                  <div className="flex items-center mb-2">
                    <Briefcase className="h-5 w-5 text-cyber-blue mr-2" />
                    <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-sm rounded-full border border-cyber-blue/30">
                      {exp.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.position}
                  </h3>
                  
                  <h4 className="text-xl text-cyber-blue font-semibold mb-3">
                    {exp.company}
                  </h4>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-white mb-3">Key Achievements</h5>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-cyber-pink rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple text-sm rounded border border-cyber-purple/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
