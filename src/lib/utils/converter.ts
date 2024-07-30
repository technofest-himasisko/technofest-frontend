import {
  ErrorCode,
  EventType,
  ParticipationMethod,
  PaymentStatus,
  RegistrationStatus,
  SeminarCastRole,
} from "@/lib/definitions/constants";

export function seminarCastRoleToLabel(
  number: number | string,
): string | undefined {
  switch (Number(number)) {
    case SeminarCastRole.SPEAKER:
      return "Pembicara";
    case SeminarCastRole.MODERATOR:
      return "Moderator";
  }

  return undefined;
}

export function paymentStatusToLabel(
  number: number | string,
): string | undefined {
  switch (Number(number)) {
    case PaymentStatus.NOT_CONFIRMED:
      return "Belum dikonfirmasi";
    case PaymentStatus.ACCEPTED:
      return "Diterima";
    case PaymentStatus.REJECTED:
      return "Ditolak";
  }

  return undefined;
}

export function paymentStatusToColor(
  number: number | string,
): string | undefined {
  switch (Number(number)) {
    case PaymentStatus.NOT_CONFIRMED:
      return "gray";
    case PaymentStatus.ACCEPTED:
      return "green";
    case PaymentStatus.REJECTED:
      return "red";
  }

  return undefined;
}

export function registrationStatusToLabel(
  number: number | string,
): string | undefined {
  switch (Number(number)) {
    case RegistrationStatus.PREPARING_TEAM:
      return "Persiapan tim";
    case RegistrationStatus.PENDING_PAYMENT:
      return "Menunggu pembayaran";
    case RegistrationStatus.PAYMENT_REJECTED:
      return "Pembayaran ditolak";
    case RegistrationStatus.PENDING_SUBMISSION:
      return "Menunggu submission";
    case RegistrationStatus.FINISHED:
      return "Selesai";
  }

  return undefined;
}

export function registrationStatusToColor(
  number: number | string,
): "green" | "cyan" | "indigo" | "fuchsia" | "red" | undefined {
  switch (Number(number)) {
    case RegistrationStatus.PREPARING_TEAM:
      return "indigo";
    case RegistrationStatus.PENDING_PAYMENT:
      return "cyan";
    case RegistrationStatus.PAYMENT_REJECTED:
      return "red";
    case RegistrationStatus.PENDING_SUBMISSION:
      return "fuchsia";
    case RegistrationStatus.FINISHED:
      return "green";
  }

  return undefined;
}

export function paymentBankToColor(type: string): string | undefined {
  switch (type) {
    case "Dana":
      return "blue";
    case "Mandiri":
      return "yellow";
    case "BRI":
      return "blue";
    case "BNI":
      return "orange";
  }
}

export function participationMethodToString(
  number: number | string,
): string | undefined {
  switch (Number(number)) {
    case ParticipationMethod.ONLINE:
      return "Online";
    case ParticipationMethod.OFFLINE:
      return "Offline";
  }

  return undefined;
}

export function errorCodeToErrorMessage(
  errorCode: ErrorCode,
): string | undefined {
  switch (errorCode) {
    case ErrorCode.NOT_FOUND:
      return "Data yang Anda cari tidak ditemukan.";
    case ErrorCode.VALIDATION_ERROR:
      return "Terdapat kesalahan dalam input Anda.";
    case ErrorCode.NOT_AUTHENTICATED:
      return "Anda harus login terlebih dahulu.";
    case ErrorCode.INVALID_CREDENTIALS:
      return "Email atau kata sandi Anda salah.";
    case ErrorCode.EMAIL_ALREADY_EXISTS:
      return "Email yang Anda masukkan sudah terdaftar.";
    case ErrorCode.INVALID_ACCESS_TOKEN:
      return "Terdapat kesalahan token akses.";
    case ErrorCode.WRONG_PASSWORD:
      return "Kata sandi yang Anda masukkan salah.";
    case ErrorCode.ALREADY_REGISTERED:
      return "Anda sudah terdaftar sebagai pembicara.";
    case ErrorCode.ALREADY_ATTACHED:
      return "Anda sudah terdaftar sebagai pembicara.";
    case ErrorCode.REACHES_THE_LIMIT:
      return "Anda sudah terdaftar sebagai pembicara.";
    case ErrorCode.ACCOUNT_NOT_LINKED:
      return "Sepertinya Anda mencoba metode masuk yang salah.";
  }
}

export function eventTypeToColor(type: EventType): "teal" | "purple" {
  switch (type) {
    case EventType.COMPETITION:
      return "teal";
    case EventType.SEMINAR:
      return "purple";
  }
}

export function participantCategoryToString(
  num_participants: number | undefined,
): string {
  if (!num_participants || num_participants === 1) {
    return "Individual";
  }

  return `Tim (Maks. ${num_participants} peserta)`;
}
