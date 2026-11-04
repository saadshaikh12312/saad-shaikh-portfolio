import emailjs from '@emailjs/browser';
import { CONTACT_COOLDOWN_MS } from '../utils/constants';

let isInitialized = false;

export function initEmailJS() {
  if (isInitialized) return;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!publicKey) {
    console.warn('VITE_EMAILJS_PUBLIC_KEY is not configured.');
    return;
  }

  try {
    emailjs.init({
      publicKey,
      limitRate: {
        id: 'portfolio-contact-form',
        throttle: CONTACT_COOLDOWN_MS,
      },
    });
    isInitialized = true;
  } catch (err) {
    console.warn('EmailJS initialization warning:', err);
  }
}

export async function sendContactMessage({ name, email, subject, message }) {
  initEmailJS();

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  if (!serviceId || !templateId) {
    throw new Error('EmailJS Service ID or Template ID is missing.');
  }

  return await emailjs.send(serviceId, templateId, {
    name,
    email,
    subject,
    message,
  });
}
