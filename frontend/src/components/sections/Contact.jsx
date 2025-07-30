import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: null
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/yourusername" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/yourusername" },
    { icon: Twitter, label: "Twitter", link: "https://twitter.com/yourusername" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#1261A0" }} />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="text-center space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development. Feel free to 
                reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
                  <CardContent className="p-6 text-center">
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-blue-600"
                      style={{ backgroundColor: "#1261A0" }}
                    >
                      <info.icon size={24} className="text-white" />
                    </div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-medium">{info.value}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Follow Me</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-xl bg-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="shadow-xl border-0" style={{ backgroundColor: "#f8fafc" }}>
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Ready to Work Together?</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I'm currently available for new projects and collaborations. 
                  Let's discuss how we can bring your ideas to life.
                </p>
                <Button
                  size="lg"
                  className="text-white transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#1261A0" }}
                  onClick={() => window.open("mailto:your.email@example.com", "_blank")}
                >
                  <Mail size={18} className="mr-2" />
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;