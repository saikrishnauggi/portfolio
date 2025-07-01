import { useState } from 'react';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we write, test, and maintain code...",
      fullContent: `Artificial Intelligence (AI) is rapidly transforming the software development landscape. What once required manual effort and countless hours of debugging is now being assisted by intelligent systems that streamline, automate, and optimize the development process. From generating code snippets to predicting deployment issues, AI is becoming an essential tool in every developer’s toolkit.

One of the most noticeable changes has come in the form of AI-powered coding assistants. Tools like GitHub Copilot, Tabnine, and Amazon CodeWhisperer help developers by offering smart code completions, suggesting functions based on context, and even writing entire code blocks. As these systems continue to evolve, we may soon see developers shift their role from writing code line by line to supervising and refining AI-generated code structures.

Beyond coding, AI is revolutionizing software testing. Traditional testing methods are time-consuming, but AI accelerates the process by automatically generating test cases, identifying edge cases, and detecting anomalies in logs. With the help of machine learning algorithms, AI can even anticipate failure points and suggest corrective actions before issues arise. This leads to faster development cycles and more reliable software.

AI is also playing a critical role in code review and refactoring. By analyzing code patterns, AI tools can now suggest performance improvements, detect security vulnerabilities, and maintain coding standards across large teams. This allows human reviewers to focus on more strategic aspects of the code, such as architectural decisions and business logic.

In the realm of DevOps, AI is enabling predictive infrastructure management. Instead of waiting for systems to fail, AI can monitor resource usage, user behavior, and error patterns to predict and resolve issues proactively. Some platforms are already experimenting with self-healing systems that can automatically restart crashed services, scale applications based on load, and notify engineers only when human intervention is needed.

Low-code and no-code platforms are also benefiting from AI advancements. These platforms empower non-developers to build applications with minimal coding knowledge, and AI enhances them further by enabling natural language instructions. For example, users can describe a desired feature in plain English, and the system can generate the necessary components and logic to build it. This democratizes software development and encourages innovation from a broader range of users.

Looking ahead, the future of AI in software development is not about replacing human developers but augmenting them. AI will handle the repetitive, time-consuming tasks, allowing developers to focus on creativity, strategic planning, and solving complex problems. Developers who embrace AI will be more productive, agile, and better equipped to handle the demands of the modern software industry.

In conclusion, AI is not just a trend in software development—it’s a foundational shift. As tools become more powerful and integrated into the development lifecycle, developers must adapt and learn to work alongside AI. The ones who do will lead the next generation of innovation.

`,
      date: "Dec 15, 2024",
      readTime: "5 min read",
      tags: ["AI", "Software Development", "Future Tech"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
    },
    {
      title: "Building Scalable Machine Learning Pipelines",
      excerpt: "A comprehensive guide to designing and implementing ML pipelines that can handle production workloads...",
      fullContent: `Machine learning (ML) has grown from simple models in notebooks to full-scale production systems serving millions of users. But building a great model is just one part of the journey. In the real world, it’s equally important to make your ML systems scalable, maintainable, and production-ready—and that’s where machine learning pipelines come into play.

A machine learning pipeline is a sequence of steps that automate the end-to-end process of developing, deploying, and maintaining machine learning models. These steps typically include data ingestion, preprocessing, feature engineering, model training, validation, and deployment. Each of these stages must be designed not only for performance but also for scalability, allowing the pipeline to handle large datasets and adapt to changing environments.

In the early stages, data plays a crucial role. Scalable pipelines start with robust data ingestion systems—using tools like Apache Kafka or Apache NiFi—that can pull in real-time or batch data from multiple sources. Once data is collected, it flows into a data preprocessing stage, where missing values are handled, formats are standardized, and transformations are applied. Automating these processes ensures consistent and repeatable results across model retraining cycles.

Next comes feature engineering, one of the most critical parts of ML. Scalable pipelines often use reusable feature stores, such as Feast, to avoid redundant computation and to ensure consistency between training and inference. By decoupling feature creation from model development, teams can collaborate more efficiently and reduce production issues caused by mismatched features.

The model training and evaluation phase is where scalability truly matters. Training large models on massive datasets requires parallel processing, often across distributed systems. Frameworks like TensorFlow Extended (TFX), Apache Spark MLlib, and PyTorch Lightning allow for efficient training workflows that can be scaled to multiple GPUs or cloud compute clusters. After training, models are validated using metrics, cross-validation, or even bias/fairness testing before moving to the next phase.

One of the most challenging aspects of ML in production is model deployment and monitoring. Tools like MLflow, Kubeflow, and Amazon SageMaker enable automated deployment and version control of models. These tools make it possible to perform A/B testing, canary releases, and rollback strategies, ensuring that models can be pushed to production with confidence. Post-deployment, monitoring tools track performance, data drift, and user feedback to ensure models continue to deliver accurate results.

Finally, a truly scalable pipeline incorporates MLOps principles. MLOps (Machine Learning Operations) brings DevOps practices to the ML world, emphasizing automation, continuous integration/continuous deployment (CI/CD), and reproducibility. This means every pipeline run—from data processing to model deployment—is tracked, logged, and versioned. This not only improves efficiency but also ensures compliance and traceability, which are essential in regulated industries like finance and healthcare.

In summary, building scalable ML pipelines is not just a technical challenge—it’s a mindset. It involves thinking beyond the model to the entire lifecycle of data, infrastructure, and operations. As data continues to grow and models become more complex, scalable pipelines will be the backbone of successful ML applications. Organizations that master this pipeline architecture will be best positioned to unlock the full potential of machine learning in real-world scenarios.

`,
      date: "Dec 10, 2024",
      readTime: "8 min read",
      tags: ["Machine Learning", "Data Science", "MLOps"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop"
    },
    {
      title: "Modern JavaScript: Beyond the Basics",
      excerpt: "Deep dive into advanced JavaScript concepts including async/await patterns, closures, and performance optimization...",
      fullContent: `JavaScript has come a long way since its inception as a simple scripting language for web browsers. Today, it powers everything from dynamic web apps and mobile platforms to backend services and desktop tools. But mastering modern JavaScript goes far beyond learning var, if, and for loops. It requires a deep understanding of asynchronous programming, closures, modular code, and performance optimization.

One of the most significant advancements in modern JavaScript is the async/await syntax. Before this, handling asynchronous operations—like API calls or file reads—was done using callbacks or Promises, often leading to complex, hard-to-read code known as "callback hell." With async and await, developers can write asynchronous code that looks and behaves like synchronous code, improving both readability and maintainability. This makes it easier to handle errors with try/catch blocks and eliminates deeply nested structures.

Another powerful but often misunderstood concept in JavaScript is the closure. Closures allow functions to retain access to variables from their outer scope, even after that scope has exited. This is the foundation for many advanced techniques, such as private variables, function factories, and currying. Mastery of closures is essential for writing clean, modular code and avoiding unwanted side effects.

JavaScript modules have also evolved significantly. The adoption of ES Modules (ESM) allows developers to use import and export syntax to create more structured and maintainable codebases. This promotes separation of concerns and makes it easier to manage dependencies across files. Tools like Webpack, Rollup, and Vite support modular code bundling, tree shaking, and code splitting—leading to smaller, faster-loading applications.

When it comes to performance, modern JavaScript provides several APIs and best practices. For example, developers can use throttling and debouncing techniques to limit the rate at which functions are called, especially for scroll or input events. Lazy loading components or images, using the Intersection Observer API, and minimizing DOM manipulation are just a few strategies for improving user experience and load time. In complex apps, Web Workers can offload heavy computations to run in the background without blocking the UI thread.

Modern JavaScript also embraces functional programming principles, such as immutability and pure functions. Tools like Lodash and Ramda help developers write concise, composable, and declarative code. Meanwhile, frameworks like React promote a component-based architecture that pairs naturally with functional patterns and state management libraries like Redux or Zustand.

Finally, staying up to date with the latest ECMAScript features is essential. Each year, JavaScript gets new capabilities—from optional chaining (?.) and nullish coalescing (??), to Array.prototype.flatMap() and class fields. These features not only reduce boilerplate but also help developers write more expressive and resilient code.

In conclusion, going beyond the basics of JavaScript means embracing both the language’s evolving syntax and its deeper concepts. Whether you're building a fast, responsive web application or managing a large codebase across teams, modern JavaScript provides the tools and patterns to do it well. With continued learning and attention to performance, today's developers can harness the full power of JavaScript in creating scalable, high-quality applications.`,
      date: "Dec 5, 2024",
      readTime: "6 min read",
      tags: ["JavaScript", "Web Development", "Performance"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on technology, AI, and software development
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-cyber-blue/20 text-cyber-blue rounded border border-cyber-blue/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyber-blue transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full glass-button group"
                  onClick={() => setSelectedPost(post)}
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal: Full Blog View */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-background text-foreground rounded-lg max-w-2xl w-full glass-card relative overflow-y-auto max-h-[90vh] p-6">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-5 text-cyber-pink font-bold text-2xl"
              >
                <X />
              </button>
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-56 object-cover rounded mb-4" />
              <h3 className="text-3xl font-bold mb-2">{selectedPost.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{selectedPost.date} • {selectedPost.readTime}</p>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {selectedPost.fullContent}
              </p>
            </div>
          </div>
        )}

        {/* View All */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="glass-button"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
