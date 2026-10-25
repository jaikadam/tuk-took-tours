/* Core Types for Tuk Took Tours */

export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  description: string;
  image: string;
  bestSeason: string;
  budget: 'budget' | 'mid' | 'luxury';
  attractions: string[];
  visaInfo?: string;
  temperatures?: {
    min: number;
    max: number;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Package {
  id: string;
  name: string;
  destination: string;
  description: string;
  duration: number;
  price: number;
  currency: 'USD' | 'EUR' | 'GBP' | 'INR';
  images: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  groupSize: {
    min: number;
    max: number;
  };
  availability: DateRange[];
  rating: number;
  reviews: number;
  type: PackageType;
}

export type PackageType =
  | 'honeymoon'
  | 'family'
  | 'adventure'
  | 'luxury'
  | 'budget'
  | 'solo'
  | 'group';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: {
    breakfast?: boolean;
    lunch?: boolean;
    dinner?: boolean;
  };
  accommodation?: string;
}

export interface DateRange {
  startDate: string;
  endDate: string;
  available: boolean;
  price: number;
}

export interface Booking {
  id: string;
  packageId: string;
  userId: string;
  startDate: string;
  endDate: string;
  travellers: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice: number;
  paymentStatus: 'pending' | 'completed' | 'failed';
  bookingDetails: BookingDetails;
  createdAt: string;
  updatedAt: string;
}

export interface BookingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  passportNumber?: string;
  specialRequests?: string;
  addOns?: BookingAddOn[];
}

export interface BookingAddOn {
  name: string;
  price: number;
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
  metaDescription?: string;
  ogImage?: string;
}

export type BlogCategory =
  | 'destination-guides'
  | 'travel-tips'
  | 'budget-travel'
  | 'food-culture'
  | 'visa-documents'
  | 'itineraries'
  | 'travel-stories';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  bookings: string[];
  wishlist: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ReviewSubmission {
  packageId: string;
  userId: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
}

export interface SearchParams {
  destination?: string;
  startDate?: string;
  endDate?: string;
  travellers?: number;
  budget?: 'budget' | 'mid' | 'luxury';
  packageType?: PackageType;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  destination?: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
