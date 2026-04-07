
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: string;
  image: string;
  /** Intrinsic pixel size — used for width/height to reduce CLS (PageSpeed). */
  imageWidth: number;
  imageHeight: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}
