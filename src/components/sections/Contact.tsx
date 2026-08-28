import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
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
    <>
    </>
  );
};

export default Contact;