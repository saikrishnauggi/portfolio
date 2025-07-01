
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "JavaScript", "HTML", "CSS"],
      color: "cyber-blue"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Node.js", "Express", "Flask", "Streamlit", "PyTorch", "Pandas", "NumPy"],
      color: "cyber-purple"
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "Git", "VS Code", "Windows", "MongoDB",],
      color: "cyber-green"
    },
    {
      title: "Data Science & ML",
      skills: ["Matplotlib", "Scikit-learn", "NLTK", "Seaborn", "Deep Learning"],
      color: "cyber-pink"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-pink mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-card p-6 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className={`text-xl font-semibold mb-4 text-${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-tag hover:shadow-lg"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-cyber-blue">
              Always Learning
            </h3>
            <p className="text-muted-foreground">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              languages, and methodologies to stay at the forefront of software development and AI innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
