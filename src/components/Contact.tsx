import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xanjvvgo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Failed to send",
          description: "There was a problem. Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network issue. Please check your connection.",
        variant: "destructive"
      });
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "saikrishnauggi@gmail.com",
      href: "mailto:saikrishnauggi@gmail.com?subject=Hello%20Sai&body=Hi%20Sai%2C%20I%20would%20like%20to%20connect%20with%20you."
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 93980 36854",
      href: "tel:+919398036854"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyber-pink to-cyber-blue bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-pink to-cyber-blue mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-10">
          {/* Contact Info */}
          <div className="glass-card p-8 w-full max-w-md">
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new opportunities, innovative projects,
              or just having a conversation about technology and AI.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group">
                  <div className="p-3 glass-card mr-4 group-hover:scale-110 transition-transform text-cyber-blue">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyber-blue transition-colors underline"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-muted-foreground mb-4">Follow me on:</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/saikrishnauggi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card hover:scale-110 transition-all duration-300 cyber-glow group"
                >
                  <Github className="h-6 w-6 text-cyber-blue group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-krishna-uggi-30037525a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card hover:scale-110 transition-all duration-300 cyber-glow group"
                >
                  <Linkedin className="h-6 w-6 text-cyber-blue group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-card p-8 w-full max-w-2xl flex flex-col space-y-4"
          >
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
