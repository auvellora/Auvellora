// Site-wide settings. Change them here and every page follows.

export const EMAIL = "auvellora@gmail.com";

// ── LEGAL DETAILS ─────────────────────────────────────────────
// Shown in the footer, the Privacy Policy and the Terms of Sale. EU and
// Latvian law require a business website to show who runs it. Fill these
// in exactly as registered (Uzņēmumu reģistrs / VID). Empty ones show as
// "[to be added]" so they are easy to spot before the site goes live.
export const COMPANY = {
  legalName: "", // e.g. SIA "Auvellora", or the registered name of the sole trader
  regNo: "", // registration number
  address: "", // registered address
  vatNo: "", // VAT number, only if VAT-registered; leave empty otherwise
};

// Date shown at the top of the Privacy Policy and Terms of Sale.
export const POLICIES_UPDATED = "27 November 2026";

// ── CONTACT FORM ──────────────────────────────────────────────
// A static site can't send email by itself. Until FORM_ENDPOINT is set,
// "Send enquiry" opens the visitor's own email app with the message already
// written out to EMAIL, so no enquiry is lost.
//
// To receive enquiries straight from the form instead:
//   Formspree: create a free form at formspree.io and paste its URL here,
//              e.g. "https://formspree.io/f/abcdwxyz".
//   Netlify:   if the site is hosted on Netlify, Netlify Forms works too.
export const FORM_ENDPOINT = "";
