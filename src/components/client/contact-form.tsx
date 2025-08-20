"use client";

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  budget: string;
}

interface FormState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
  });

  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setFormState({ isLoading: true, isSuccess: false, error: null });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormState({ isLoading: false, isSuccess: true, error: null });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        budget: '',
      });

      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSuccess: false }));
      }, 3000);

    } catch (error) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        error: 'Something went wrong. Please try again.',
      });
    }
  };

  const budgetOptions = [
    { value: '', label: 'Select budget' },
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: '250k-500k', label: '$250,000 - $500,000' },
    { value: '500k-plus', label: '$500,000+' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-4xl font-black mb-8">Let's work together</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:border-[#CCFF00] transition-colors duration-200"
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:border-[#CCFF00] transition-colors duration-200"
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:border-[#CCFF00] transition-colors duration-200"
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-900 mb-2">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:border-[#CCFF00] transition-colors duration-200 bg-white"
          >
            {budgetOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:border-[#CCFF00] transition-colors duration-200 resize-none"
            aria-required="true"
          />
        </div>

        <button
          type="submit"
          disabled={formState.isLoading}
          className={`
            w-full px-8 py-4 font-bold text-black text-lg
            transition-all duration-200 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-offset-2
            ${formState.isLoading
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#CCFF00] hover:bg-opacity-80 focus:ring-[#CCFF00]'
            }
          `}
          aria-busy={formState.isLoading}
        >
          {formState.isLoading ? 'Sending...' : 'Send message'}
        </button>

        {formState.isSuccess && (
          <div 
            className="bg-[#CCFF00] text-black px-4 py-3 text-center font-medium"
            role="alert"
            aria-live="polite"
          >
            Thank you! We'll get back to you soon.
          </div>
        )}

        {formState.error && (
          <div 
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3"
            role="alert"
            aria-live="polite"
          >
            {formState.error}
          </div>
        )}
      </form>
    </div>
  );
}