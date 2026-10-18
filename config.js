/* =========================================================
   WEDDING CONFIG
   Edit everything below. You never need to touch the HTML.
   - Any image left as "" shows a blank placeholder square.
   - Colours accept any valid CSS colour value.
   ========================================================= */
const WEDDING = {

  /* --- Couple --- */
  monogram: "A & J",
  bride: "Alex",
  groom: "Jordan",

  /* --- Date & place --- */
  date: "2026-09-21T16:30:00",     // drives the live countdown
  dateLabel: "September 21, 2026",
  venue: "Willow Creek Estate",
  location: "Napa Valley",
  hashtag: "#AlexAndJordan2026",

  /* --- Colours --- */
  colors: {
    cream:     "#faf7f2",
    creamDeep: "#f3ede3",
    ink:       "#2f2a26",
    inkSoft:   "#6b625a",
    sage:      "#8a9a7b",
    sageDark:  "#6f8062",
    gold:      "#c2a878",
    blush:     "#d9a5a0"
  },

  /* --- Images: "" = blank placeholder square --- */
  images: {
    hero:  "",
    story: ""
  },

  /* --- Hero --- */
  hero: {
    eyebrow: "We're getting married",
    ctaPrimary:   { label: "RSVP Now",        href: "#rsvp" },
    ctaSecondary: { label: "Wedding Details", href: "#details" }
  },

  /* --- Our story --- */
  story: {
    eyebrow: "Our Story",
    heading: "From a chance meeting to forever",
    paragraphs: [
      "It started with a shared table at a tiny caf\u00e9 and a conversation that lasted until closing time. Six years, two cities, and one very opinionated dog later, we're ready to say \u201cI do.\u201d",
      "We can't wait to celebrate this next chapter surrounded by the people who shaped us. Thank you for being part of our story."
    ],
    quote: "\u201cWhatever our souls are made of, his and mine are the same.\u201d"
  },

  /* --- Details cards (icon: location | party | hotel | dress) --- */
  details: {
    eyebrow: "The Details",
    heading: "Everything you need to know",
    cards: [
      { icon: "location", title: "Ceremony",       lines: ["Willow Creek Estate Gardens", "4:30 in the afternoon"], label: "September 21, 2026" },
      { icon: "party",    title: "Reception",      lines: ["The Grand Barn", "Dinner, dancing & toasts"],           label: "6:00 PM \u2013 Midnight" },
      { icon: "hotel",    title: "Accommodations", lines: ["A block of rooms is reserved", "at The Vineyard Inn"],  label: "Mention \u201cAlex & Jordan\u201d" },
      { icon: "dress",    title: "Dress Code",     lines: ["Garden formal", "Earth tones encouraged"],             label: "Ceremony is outdoors" }
    ]
  },

  /* --- Schedule --- */
  schedule: {
    eyebrow: "The Day",
    heading: "Order of events",
    items: [
      { time: "4:00 PM",  title: "Guest Arrival",     text: "Welcome drinks on the garden terrace." },
      { time: "4:30 PM",  title: "Ceremony",          text: "Please be seated by 4:25 PM." },
      { time: "5:15 PM",  title: "Cocktail Hour",     text: "Canap\u00e9s, cocktails & live music." },
      { time: "6:30 PM",  title: "Dinner & Toasts",   text: "A seated three-course dinner in the barn." },
      { time: "8:00 PM",  title: "First Dance & Party", text: "Dancing until midnight." },
      { time: "11:45 PM", title: "Send-Off",          text: "Join us outside for a sparkler farewell." }
    ]
  },

  /* --- Gallery (size: "" | "g-tall" | "g-wide") --- */
  gallery: {
    eyebrow: "Moments",
    heading: "Our favourite memories",
    items: [
      { src: "", alt: "Engagement moment", size: "g-tall" },
      { src: "", alt: "Holding hands",     size: "g-wide" },
      { src: "", alt: "Celebration",       size: "" },
      { src: "", alt: "Wedding table",     size: "" },
      { src: "", alt: "Bouquet",           size: "" },
      { src: "", alt: "The couple",        size: "g-wide" }
    ]
  },

  /* --- RSVP --- */
  rsvp: {
    eyebrow: "Join Us",
    heading: "Kindly reply",
    intro: "Please respond by August 1, 2026 so we can finalize seating and catering.",
    note: "We'll confirm your response by email within a few days.",
    successHeading: "Thank you!",
    successText: "Your RSVP has been received. We can't wait to celebrate with you.",
    endpoint: ""   // paste a Formspree URL (https://formspree.io/f/xxxx) to receive RSVPs by email
  },

  /* --- Footer / registry --- */
  footer: {
    registryNote: "Your presence is the greatest gift. If you wish to give, we've registered at the links below.",
    links: [
      { label: "Registry One", href: "#" },
      { label: "Registry Two", href: "#" }
    ],
    social: [
      { icon: "instagram", label: "Instagram",   href: "#" },
      { icon: "email",     label: "Email",       href: "#" },
      { icon: "photos",    label: "Photo album", href: "#" }
    ],
    copy: "Made with love"
  }
};