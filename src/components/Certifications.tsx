import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Python Programming Certification",
      issuer: "GNITC Hackathon",
      date: "2023",
      description: "Recognized for exceptional Python programming skills and problem-solving abilities",
      type: "Competition",
      link: "https://drive.google.com/file/d/1P32rVyI1uiCXGO8bvuRYSMzx4bF7kIlU/view?usp=sharing"
    },
    {
      title: "Applied Generative AI",
      issuer: "Infosys Springboard",
      date: "2025",
      description: "Comprehensive course covering generative AI applications and implementation",
      type: "Course",
      link: "https://drive.google.com/file/d/1EFOoQyBidACuKMcDjQzhaUZ5GmxSpVE9/view?usp=drive_link"
    },
    {
      title: "Software Developer Intern",
      issuer: "SaiKet Systems",
      date: "2025",
      description: "Hands-on experience with software engineering practices and methodologies",
      type: "Internship",
      link: "https://drive.google.com/file/d/17zucTB1rx3opfuNZEXHNW-Hx4AM8hq8a/view?usp=sharing"
    },
    {
      title: "Artificial Intelligence Intern",
      issuer: "Edunet Foundation",
      date: "2025",
      description: "Foundational knowledge in AI concepts and practical applications",
      type: "Internship",
      link: "https://drive.google.com/file/d/1ZWiFzUN-EYprVNqvfrv4xrq2uvKb8siY/view?usp=drive_link"
    },
    {
  title: "Artificial Intelligence Internship",
  issuer: "Talent Trek E-Learning",
  date: "April 2025 – July 2025",
  description: "Successfully completed a 3-month AI internship program with hands-on training in machine learning, predictive analytics, and real-time project execution using Python, TensorFlow, and scikit-learn.",
  type: "Internship Certificate",
  link: "https://drive.google.com/file/d/1eHNlmzYEYhSpCFfSdEkgYfWGGS3pvYJ4/view?usp=sharing"
},
    {
  title: "Certificate of Excellence – AI Internship",
  issuer: "Talent Trek E-Learning",
  date: "July 2025",
  description: "Awarded for outstanding results, professional conduct, and exceptional application of AI skills and standards during the internship program.",
  type: "Achievement Certificate",
  link: "https://drive.google.com/file/d/1oYyjvi_AcVW8tf-q6mzO6g9TzTK0Swfk/view?usp=drive_link"
},
    {
  title: "Internship Experience Letter – AI",
  issuer: "Talent Trek E-Learning",
  date: "July 2025",
  description: "Recognized for active contribution and professionalism during the AI internship program. Demonstrated effective problem-solving and teamwork throughout the training.",
  type: "Experience Letter",
  link: "https://drive.google.com/file/d/1L2GD5SN93mzrWba0iVqw7oEOUhvx4-p-/view?usp=sharing"
}



  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Competition': return 'cyber-pink';
      case 'Course': return 'cyber-blue';
      case 'Experience': return 'cyber-green';
      default: return 'cyber-purple';
    }
  };

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyber-green to-cyber-pink bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-pink mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Award className={`h-6 w-6 text-${getTypeColor(cert.type)} mr-3`} />
                  <span className={`px-3 py-1 bg-${getTypeColor(cert.type)}/20 text-${getTypeColor(cert.type)} text-sm rounded-full border border-${getTypeColor(cert.type)}/30`}>
                    {cert.type}
                  </span>
                </div>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-cyber-blue transition-colors cursor-pointer" />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                {cert.title}
              </h3>

              <div className="flex items-center text-cyber-blue font-medium mb-3">
                <span>{cert.issuer}</span>
              </div>

              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                {cert.date}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-cyber-blue">
              Continuous Growth
            </h3>
            <p className="text-muted-foreground">
              These certifications represent my commitment to continuous learning and professional development. 
              I regularly participate in courses, competitions, and practical experiences to stay current with industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
