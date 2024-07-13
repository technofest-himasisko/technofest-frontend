export const PHONE_REGEX = /^628d{8,12}$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export enum UserRole {
  ADMINISTRATOR,
  MANAGER,
  PARTICIPANT,
}

export enum Gender {
  NOT_KNOWN,
  MALE,
  FEMALE,
  NOT_APPLICABLE = 9,
}

export enum EventRegistrationRole {
  INDIVIDUAL,
  LEADER,
  MEMBER,
}

export enum SeminarCastRole {
  SPEAKER,
  MODERATOR,
}

export enum EventType {
  SEMINAR = "seminar",
  COMPETITION = "competition",
}

export enum PaymentStatus {
  NOT_CONFIRMED,
  ACCEPTED,
  REJECTED,
}

export enum ProviderType {
  CREDENTIALS = "credentials",
  GOOGLE = "google",
  GITHUB = "github",
}

export enum ParticipationMethod {
  ONLINE,
  OFFLINE,
}

export enum ErrorCode {
  NOT_FOUND = "0001",
  VALIDATION_ERROR = "0002",
  NOT_AUTHENTICATED = "0003",
  INVALID_CREDENTIALS = "0004",
  EMAIL_ALREADY_EXISTS = "0005",
  INVALID_ACCESS_TOKEN = "0006",
  WRONG_PASSWORD = "0007",
  ALREADY_REGISTERED = "0008",
  ALREADY_ATTACHED = "0009",
  REACHES_THE_LIMIT = "0010",
}
