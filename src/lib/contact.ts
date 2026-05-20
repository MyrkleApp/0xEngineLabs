export const CONTACT_EMAIL = "team@0xenginelabs.org";

type MailIntent = {
  subject?: string;
  body?: string;
};

export function mailto({ subject = "Project Enquiry - 0x Engine Labs", body = "" }: MailIntent = {}) {
  const params = new URLSearchParams();

  params.set("subject", subject);
  if (body) {
    params.set("body", body);
  }

  return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
}

