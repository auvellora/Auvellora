// Site-wide settings. Change them here and every page follows.

export const EMAIL = "auvellora@gmail.com";

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
