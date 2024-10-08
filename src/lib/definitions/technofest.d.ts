import { EventType, ProviderType } from "./constants";

export type ResponseData<T> = {
  status: number;
  message: string;
  error_code?: string;
  data?: T;
};

export type User = {
  id: string;
  uid: string;
  name: string;
  email: string;
  email_verified_at: string;
  role: number;
  selected_festival?: string;
  avatar?: string;
  provider: ProviderType;
  created_at: string;
  updated_at: string;

  // providers?: Provider[];
  user_profile?: UserProfile;
  festivals?: Festival[];
  faqs?: Faq[];
  event_registration_payments?: EventRegistrationPayment[];
  event_registrations?: EventRegistration[];
  event_registrant?: EventRegistrant;

  event_registrations_count?: number;
};

export type Avatar = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

// export type Provider {
//   id: string;
//   provider_id: string;
//   provider: string;
//   created_at: string;
//   updated_at: string;

//   user: User;
// }

export type UserProfile = {
  id: string;
  id_number?: string;
  id_card_image?: string;
  institution?: string;
  education_level?: number | string;
  whatsapp?: string;
  line?: string;
  instagram?: string;
  gender?: number | string;
  created_at: string;
  updated_at: string;

  user: User;
};

export type Festival = {
  id: string;
  period: string;
  name: string;
  theme?: string;
  logo?: string;
  description?: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;

  events?: Event<Competition | Seminar>[];
  users?: User[];
  faqs?: Faq[];
  milestones?: Milestone<Festival>[];
  contact_persons?: ContactPerson<Festival>[];

  events_count?: number;
  faqs_count?: number;
};

export type Event<Type> = {
  id: string;
  name: string;
  codename: string;
  description?: string;
  image?: string;
  is_opened: boolean;
  price?: number;
  held_in?: string;
  held_on?: string;
  festival_id: string;
  group_link?: string;
  eventable_id: string;
  eventable_type: EventType;
  created_at: string;
  updated_at: string;

  festival?: Festival;
  eventable?: Type;
  event_registrations?: EventRegistration[];
  milestones?: Milestone<Event<Seminar | Competition>>[];
  contact_persons?: ContactPerson<Event<Seminar | Competition>>[];

  event_registrations_count: number;
};

export type EventRegistration = {
  id: string;
  uid: string;
  name?: string;
  confirmed: number;
  participation_method?: number;
  submission?: string;
  event_id: string;
  created_at: string;
  updated_at: string;

  users?: User[];
  event?: Event<Competition | Seminar>;
  event_registration_payment?: EventRegistrationPayment;
  event_registrant?: EventRegistrant;

  users_count: number;
};

export type EventRegistrationPayment = {
  id: string;
  status: number;
  proof?: string;
  uploaded_at?: string;
  event_registration_id: string;
  confirmed_by: string;
  created_at: string;
  updated_at: string;

  user: User;
  event_registration: EventRegistration;
};

export type Seminar = {
  id: string;
  theme?: string;
  offline_price?: number;
  online_price?: number;
  created_at: string;
  updated_at: string;

  event: Event<Seminar>;
  seminar_casts: SeminarCast[];
};

export type SeminarCast = {
  id: string;
  name: string;
  title?: string;
  image?: string;
  theme?: string;
  role: number;
  seminar_id: string;
  created_at: string;
  updated_at: string;

  seminar: Seminar;
};

export type Competition = {
  id: string;
  max_participants: number;
  submission: string;
  created_at: string;
  updated_at: string;

  event: Event<Competition>;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
  created_by?: string;
  festival_id: string;
  created_at: string;
  updated_at: string;

  user?: User;
  festival?: Festival;
};

export type Milestone<T> = {
  id: string;
  name: string;
  date: string;
  description?: string;
  milestoneable_id: string;
  milestoneable_type: string;
  created_at: string;
  updated_at: string;

  milestoneable: T;
};

export type ContactPerson<T> = {
  id: string;
  name: string;
  whatsapp?: string;
  instagram?: string;
  line?: string;
  contact_personable_id: string;
  contact_personable_type: string;
  created_at: string;
  updated_at: string;

  contact_personable: T;
};

export type EventRegistrant = {
  event_registration_id: string;
  user_id: string;
  role: number;
  created_at: string;
  updated_at: string;
};
