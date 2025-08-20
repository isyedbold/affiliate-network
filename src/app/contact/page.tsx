"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, Send, User, Building, Phone } from 'lucide-react';
import Footer from "@/components/sections/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsLoading(true);
    setSubmitError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/">
              <h1 className="text-4xl font-black tracking-tight">BRAND</h1>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <button className="text-sm font-medium text-black/70 hover:text-black transition-colors">
                About
              </button>
              <button className="text-sm font-medium text-black/70 hover:text-black transition-colors">
                Work
              </button>
              <button className="text-sm font-medium text-black/70 hover:text-black transition-colors">
                Services
              </button>
              <button className="text-sm font-medium text-black/70 hover:text-black transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-7xl font-black tracking-tight mb-6">
              Let's create something<br />
              <span className="text-[#CCFF00]">distinctly different</span>
            </h1>
            <p className="text-xl text-black/70 leading-relaxed">
              Get in touch to discuss how we can help transform your brand, 
              activate your audience, and build digital experiences that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form */}
            <div>
              <h2 className="text-4xl font-black mb-8">Send us a message</h2>
              
              {isSuccess ? (
                <div className="bg-[#CCFF00]/10 border border-[#CCFF00]/30 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-[#CCFF00] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Send className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message sent successfully</h3>
                  <p className="text-black/70">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-black/20'} focus:border-black focus:outline-none transition-colors bg-[#1A1A1A]/5`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-black/20'} focus:border-black focus:outline-none transition-colors bg-[#1A1A1A]/5`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.company ? 'border-red-500' : 'border-black/20'} focus:border-black focus:outline-none transition-colors bg-[#1A1A1A]/5`}
                        placeholder="Your Company"
                      />
                      {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-black/20 focus:border-black focus:outline-none transition-colors bg-[#1A1A1A]/5"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-black/20'} focus:border-black focus:outline-none transition-colors bg-[#1A1A1A]/5 resize-none`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  {submitError && (
                    <p className="text-red-500 text-sm">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group inline-flex items-center justify-center bg-black text-white px-8 py-4 font-bold relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="absolute inset-0 bg-[#CCFF00] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </span>
                    <ChevronRight className="ml-2 w-5 h-5 relative z-10 group-hover:text-black transition-colors duration-300" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-black mb-8">Get in touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Our offices</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">New York</p>
                      <p className="text-black/70">123 Fifth Avenue, New York, NY 10001</p>
                    </div>
                    <div>
                      <p className="font-semibold">Los Angeles</p>
                      <p className="text-black/70">456 Hollywood Blvd, Los Angeles, CA 90028</p>
                    </div>
                    <div>
                      <p className="font-semibold">London</p>
                      <p className="text-black/70">789 Oxford Street, London W1D 2HQ</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Contact</h3>
                  <div className="space-y-3">
                    <a 
                      href="mailto:hello@brand.com" 
                      className="flex items-center text-black/70 hover:text-black transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      hello@brand.com
                    </a>
                    <p className="flex items-center text-black/70">
                      <Phone className="w-5 h-5 mr-3" />
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-black/10">
                  <h3 className="text-xl font-bold mb-4">Follow us</h3>
                  <div className="flex space-x-4">
                    <button className="text-black/70 hover:text-black transition-colors">LinkedIn</button>
                    <button className="text-black/70 hover:text-black transition-colors">Twitter</button>
                    <button className="text-black/70 hover:text-black transition-colors">Instagram</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}