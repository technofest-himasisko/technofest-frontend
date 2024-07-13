export type ImageMedia = {
  src: string;
  alt: string;
};

export type About = string;

export type Competition = {
  id: string;
  name: string;
  codename: string;
  logo: ImageMedia;
  timeline: TimelineItem[];
  contactPersons: ContactPerson[];
  registrationDate: RegistrationDate;
  price: number;
};

export type Seminar = {
  id: string;
  theme: string;
  description: string;
  speakers: SeminarCast[];
  moderator: SeminarCast;
  contactPersons: ContactPerson[];
  registrationDate: RegistrationDate;
  price: number;
};

export type EventRegistration = {};

export type Merchandise = {
  name: string;
  prices: MerchandisePrice[];
};

export type MerchandisePrice = {
  nominal: number;
  amountPcs: number;
};

export type Faq = {
  question: string;
  answer: string;
};

export type TimelineItem = {
  id: string;
  name: string;
  date: Date;
  description: string;
};

export type Participant = {
  id: string;
  name: string;
  email: string;
  institution?: string;
  gender?: string;
  whatsapp?: string;
};

export type ContactPerson = {
  id: string;
  name: string;
  whatsapp?: string;
  line?: string;
  instagram?: string;
};

export type SeminarCast = {
  id: string;
  name: string;
  title: string;
  background: string;
  linkedin?: string;
};

export type RegistrationDate = {
  opening: Date;
  closing: Date;
};

export type FormState = {
  message?: {
    text: string;
    type: "success" | "error";
  };
  errors?: Record<string, string[]>;
};
