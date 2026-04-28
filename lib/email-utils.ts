export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function extractDomain(email: string): string {
  if (!email.includes('@')) return '';
  return email.split('@')[1].toLowerCase();
}

export function extractUsername(email: string): string {
  if (!email.includes('@')) return email.toLowerCase();
  return email.split('@')[0].toLowerCase();
}

export function getTLD(domain: string): string {
  const parts = domain.split('.');
  if (parts.length < 2) return '';
  return `.${parts[parts.length - 1]}`;
}
