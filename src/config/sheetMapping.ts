export const SHEET_COLUMNS = {
  ID: 0,                 // Column A: ID (can be ignored)
  ACTIVE: 1,            // Column B: Active (TRUE/FALSE)
  SEQUENCE: 2,          // Column C: Sequence
  HEADING: 3,           // Column D: Heading text
  SUBHEADING: 4,        // Column E: Subheading text
  BODY: 5,              // Column F: Body text
  CTA: 6,               // Column G: Call to action
  SMALL_PRINT: 7,       // Column H: Small print
  THEME: 8,             // Column I: Theme type
  IMAGE_URL: 9,         // Column J: Image URL
  QR_CODE_URL: 10,      // Column K: QR Code URL
  VALID_FROM_DATE: 11,  // Column L: Valid from date
  EXPIRY_DATE: 12,      // Column M: Expiry date
  ACTIVE_DAYS: 13,      // Column N: Active on days
  ACTIVE_FROM_TIME: 14, // Column O: Active from time
  ACTIVE_TO_TIME: 15    // Column P: Active to time
} as const;