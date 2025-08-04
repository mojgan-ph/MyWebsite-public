export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: {
    challenges: string[];
    deliverables: string[];
    timeline: string;
    example: string;
  };
}

export interface ContactInfo {
  email: string;
  address: string;
  postBox: string;
  city: string;
  state: string;
}