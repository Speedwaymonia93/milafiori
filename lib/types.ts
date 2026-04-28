import type { Variants } from 'framer-motion';

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  subject?: string;
  course: string;
  agreedToPrivacy: boolean;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
  error?: string;
  id?: string;
}

// Section animations - use Framer Motion's Variants type
export type AnimationVariant = Variants;

// Service/Course data
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  price?: string;
}
