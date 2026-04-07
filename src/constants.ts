
import type { Service, Testimonial, FAQItem, NavigationLink } from './types';

export const WHATSAPP_NUMBER = "16786502983";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I would like to request a cleaning quote with Clean & Shine Services."
);
export const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/place/Clean+%26+Shine+Cleaning+Services+in+Georgia/@33.9426817,-84.5408434,12z/data=!4m8!3m7!1s0xfc07b900df399b5:0x8332a40cfad6bbfa!8m2!3d33.931573!4d-84.54256!9m1!1b1!16s%2Fg%2F11n9cmv6w_?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";

/**
 * URL completo do perfil Thumbtack (5 estrelas). Ex.:
 * https://www.thumbtack.com/ga/atlanta/house-cleaning/nome-da-empresa/service/ID
 */
export const THUMBTACK_PROFILE_URL = 'https://www.thumbtack.com';

/** Hash links use `/#...` so navigation works from any route (e.g. service pages). */
export const NAV_LINKS: NavigationLink[] = [
  { label: 'Home', href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Checklist', href: '/#checklist' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Location', href: '/#location' },
  { label: 'FAQ', href: '/#faq' },
];

export const SERVICES: Service[] = [
  {
    id: 'regular-cleaning',
    title: 'Regular Cleaning',
    description:
      'Consistent maintenance for your home or apartment so you can enjoy a fresh and organized space every day.',
    longDescription:
      'Our Regular Cleaning service keeps your home in constant “ready to receive guests” condition. We focus on kitchens, bathrooms, dusting, floors, and high‑touch areas so your family can enjoy a clean and healthy environment without worrying about the day‑to‑day details.',
    features: [
      'Kitchen and bathroom cleaning and disinfection',
      'Dusting of furniture, décor, and baseboards',
      'Vacuuming and mopping of all accessible floors',
      'Trash removal and general tidy‑up of each room',
    ],
    icon: 'fa-solid fa-house-chimney',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    description:
      'Professional cleaning for offices and commercial spaces that need to welcome clients and teams every day.',
    longDescription:
      'A clean workspace communicates professionalism and care. Our Commercial Cleaning plans can be scheduled weekly, bi‑weekly, or monthly to match your business routine in Georgia, keeping desks, common areas, and restrooms always ready for clients and staff.',
    features: [
      'Desk and workstation dusting and disinfection',
      'Cleaning of reception, break rooms, and restrooms',
      'Floor care for offices, hallways, and lobbies',
      'Flexible scheduling before or after business hours',
    ],
    icon: 'fa-solid fa-briefcase',
    image: '/images/commercial-cleaning.png',
  },
  {
    id: 'move-in-out',
    title: 'Move-in/Move-out Cleaning',
    description:
      'Deep and detailed cleaning for properties that are about to receive new residents or be delivered to the landlord.',
    longDescription:
      'Moving is stressful enough. Our Move‑in/Move‑out Cleaning takes care of the details so you can focus on the boxes. We clean inside cabinets, closets, and appliances, remove dust from every corner, and prepare the property for inspection or a fresh new start.',
    features: [
      'Inside cleaning of cabinets, drawers, and closets',
      'Deep cleaning of kitchen appliances (inside and outside)',
      'Detailing of doors, door frames, and baseboards',
      'Bathroom and kitchen deep cleaning focused on sanitization',
    ],
    icon: 'fa-solid fa-truck-ramp-box',
    image: '/images/move-in-out-cleaning.png',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sunni Blake',
    role: 'Local Guide • Google Reviews',
    content:
      "We've been using Bruna's team for a few months after switching from another company. They are friendly, thorough, consistent, and work around our schedule needs.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Isabella Groberio',
    role: 'Local Guide • Google Reviews',
    content:
      'Excellent cleaning service! The team was very friendly, professional, and paid attention to every detail. My home was spotless after they finished.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Kevin Moye',
    role: 'Google Reviews',
    content:
      "Wonderful experience with this cleaning service. The team is super friendly and their attention to detail is outstanding. They consistently go above and beyond.",
    rating: 5,
  },
  {
    id: 4,
    name: 'David Linton',
    role: 'Google Reviews',
    content:
      'Very professional and thorough. Communication was clear from the first call through the walkthrough. The house looked amazing when they finished.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Brianna Mcgeehan',
    role: 'Local Guide • Google Reviews',
    content:
      'We booked a move-out clean and the team handled everything we asked for. On time, respectful of the space, and the place was ready for inspection.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Kelly Petrovich',
    role: 'Google Reviews',
    content:
      'Reliable recurring service for our home. Same high standard every visit and easy to coordinate when our schedule changes.',
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is included in Regular Cleaning?',
    answer:
      'Regular Cleaning covers kitchens, bathrooms, dusting, vacuuming, mopping, trash removal, and general room organization based on your service checklist.'
  },
  {
    question: 'Do you bring your own products and equipment?',
    answer:
      'Yes. Our team arrives with professional cleaning products and tools. If you prefer specific products for allergies or personal preference, let us know in advance.'
  },
  {
    question: 'How long does a cleaning appointment usually take?',
    answer:
      'It depends on home size, condition, and service type. Most regular cleanings take a few hours, while deep cleaning and move-in/move-out visits may take longer.'
  },
  {
    question: 'Do you offer recurring weekly or bi-weekly service?',
    answer:
      'Yes. We offer recurring plans (weekly, bi-weekly, and monthly) so your home or office stays consistently clean.'
  },
  {
    question: 'How can I request a quote?',
    answer:
      'Fill out the form on this page with your details and preferred service, or call/text us at 678 650 2983 for a faster estimate.'
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve multiple cities and neighborhoods across Georgia. Send your ZIP code and we confirm availability for your location.'
  },
];
