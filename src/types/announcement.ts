export interface Announcement {
  sequence: number;
  active: boolean;
  validFromDate: string;
  expiryDate: string;
  activeOnDays: string[];
  activeFromTime: string;
  activeToTime: string;
  theme: 'Announcement' | 'Chalkboard' | string;
  headingText?: string;
  subheadingText?: string;
  bodyText?: string;
  ctaText?: string;
  smallPrintText?: string;
  imageUrl?: string;
  qrCodeUrl?: string;
  validFromTime: string;
}