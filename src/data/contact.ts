/**
 * Single source of truth for DIBI Milano Skin Center contact details.
 * Avoids re-hardcoding the WhatsApp number across nav, footer and pages.
 */

export const contact = {
  phone: '0112 674 546',
  phoneHref: 'tel:+94112674546',
  whatsapp: '+94 77 633 3505',
  whatsappNumber: '94776333505',
  email: 'hello@dibimilano.com',
} as const;

/** Build a WhatsApp deep link with a prefilled message. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Primary "Book Online" action used by the nav, footer and service CTAs. */
export const bookingWhatsAppUrl = whatsappUrl(
  "Hi DIBI Milano, I'd like to book an appointment."
);

/** Enrolment enquiry used by the Training page. */
export const trainingWhatsAppUrl = whatsappUrl(
  "Hi DIBI Milano Academy, I'd like to enquire about course enrolment."
);
