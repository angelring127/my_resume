"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-text hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-text">SANG HO YOUN</h1>
                <p className="text-text-light">Full Stack Developer</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/portfolio"
                className="text-text-light hover:text-text transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/resume"
                className="text-text-light hover:text-text transition-colors"
              >
                Resume
              </Link>
              <Link href="/contact" className="text-primary font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text mb-4">Get In Touch</h1>
            <p className="text-xl text-text-light">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-text mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-text">Location</p>
                        <p className="text-text-light">
                          Burnaby, BC, Canada V5A 0A3
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-text">Phone</p>
                        <a
                          href="tel:+1-604-773-0945"
                          className="text-primary hover:text-primary-dark"
                        >
                          +1-604-773-0945
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-text">Email</p>
                        <a
                          href="mailto:angelring127@gmail.com"
                          className="text-primary hover:text-primary-dark"
                        >
                          angelring127@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-text mb-6">
                    Connect With Me
                  </h2>
                  <div className="space-y-4">
                    <a
                      href="https://github.com/angelring127"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:border-primary/20 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Github className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-text">GitHub</p>
                        <p className="text-sm text-text-light">
                          github.com/angelring127
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/naru1227"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:border-primary/20 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-text">LinkedIn</p>
                        <p className="text-sm text-text-light">
                          linkedin.com/in/naru1227
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://angelring127.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:border-primary/20 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-text">Blog</p>
                        <p className="text-sm text-text-light">
                          angelring127.github.io
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </Card>

              {/* Availability */}
              <Card>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h3 className="font-semibold text-text">
                      Available for Work
                    </h3>
                  </div>
                  <p className="text-text-light text-sm">
                    Open to full-time opportunities, freelance projects, and
                    consulting work. Based in Vancouver, Canada with experience
                    working remotely with international teams.
                  </p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-text mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-text mb-2"
                        >
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-text mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-text mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-text mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell me about your project or opportunity..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </Card>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="mt-16">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-text mb-6 text-center">
                  Skills & Expertise
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-text mb-2">
                      Frontend Development
                    </h3>
                    <p className="text-sm text-text-light">
                      React, Next.js, TypeScript, Flutter, Modern UI/UX
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-text mb-2">
                      Backend Development
                    </h3>
                    <p className="text-sm text-text-light">
                      Laravel, Python, Django, RESTful APIs, Database Design
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-text mb-2">
                      DevOps & Cloud
                    </h3>
                    <p className="text-sm text-text-light">
                      AWS, Docker, CI/CD, Microservices, Scalable Architecture
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
