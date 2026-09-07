/**
 * Every piece of editable content lives here.
 *
 * The pages import from this file and lay it out; they do not hardcode copy.
 * So iterating on wording, hours, prices or the timetable means editing this
 * file only — no component changes.
 *
 * Placeholders that need real values are marked with TODO.
 */

export const site = {
  name: 'Heal',
  legalName: 'Heal Cafe',
  tagline: 'A pilates studio and a cafe, in one room.',

  // TODO: real address, phone, email
  address: {
    line1: '12 Almond Lane',
    line2: 'Ground floor, entrance on the garden side',
    city: 'Your City',
    postcode: '00000'
  },
  phone: '+00 000 000 000',
  email: 'hello@healcafe.com',
  // TODO: real number, in full international form with no spaces or +
  whatsapp: { label: '+00 000 000 000', url: 'https://wa.me/00000000000' },

  // Prices are written as plain strings so you can type them exactly as you want.
  currency: '$',

  // Shown on the home page strip, the contact page and in the footer.
  hours: [
    { days: 'Monday to Thursday', cafe: '7:30 — 18:00', studio: 'First class 7:00, last class 19:30' },
    { days: 'Friday', cafe: '7:30 — 16:00', studio: 'First class 7:00, last class 17:00' },
    { days: 'Saturday and Sunday', cafe: '8:30 — 16:00', studio: 'Weekend classes 9:00 and 11:00' }
  ]
}

/** Main navigation. Order here is the order in the header and the footer. */
export const nav = [
  { label: 'The Place', to: '/the-place' },
  { label: 'Classes', to: '/classes' },
  { label: 'Menu', to: '/menu' },
  { label: 'Contact', to: '/contact' },
  { label: 'Gallery', to: '/gallery' }
]

/**
 * Home page slideshow.
 * Replace each `src` with a real photograph (same path, .jpg is fine) and keep
 * the caption — it tells the visitor what they are looking at while the images move.
 */
export const heroSlides = [
  { src: '/images/hero-studio.svg', caption: 'The studio, 7am' },
  { src: '/images/hero-counter.svg', caption: 'The counter' },
  { src: '/images/hero-table.svg', caption: 'The long table' },
  { src: '/images/hero-garden.svg', caption: 'The garden door' }
]

export const home = {
  heroLine: 'Move slowly.\nEat well.\nStay a while.',
  heroNote: 'Your new home for healing',

  halves: [
    {
      key: 'studio',
      heading: 'The studio',
      body: 'Reformer, mat, and slow breath work, taught in small classes of eight or fewer. More space to move, more attention from your teacher. Grip socks are provided.',
      linkLabel: 'See the timetable',
      to: '/classes',
      image: '/images/half-studio.svg',
      imageAlt: 'The reformer room in morning light'
    },
    {
      key: 'cafe',
      heading: 'The cafe',
      body: 'Premium coffee and tea blended in-house. A healthy menu of fresh, nourishing food, cooked to order.',
      linkLabel: 'Read the menu',
      to: '/menu',
      image: '/images/half-cafe.svg',
      imageAlt: 'The cafe counter with cups and a kettle'
    }
  ],

  closingImage: '/images/wide-room.svg',
  closingLine: 'Come try us out. The first class and the first coffee are on us!'
}

export const thePlace = {
  lead: 'One long room with a garden at the back. Lime plaster, oak floor, and a wall of glass that gets the sun until about four.',

  sections: [
    {
      heading: 'The room',
      body: 'It was a carpenter’s workshop for thirty years. We kept the floor, the beams and the marks in them, and added very little: eight reformers on one side, a counter and six tables on the other, a curtain between the two when a class is running.'
    },
    {
      heading: 'What it is made of',
      body: 'Lime plaster that softens sound, untreated oak, linen curtains, clay cups thrown two streets away. Nothing here is glossy, which is deliberate — glossy rooms are loud rooms.'
    },
    {
      heading: 'The people',
      body: 'Three teachers and two cooks. Between classes the teachers are usually at the counter, so if you want to ask whether reformer is right for a sore back, ask them directly.'
    }
  ],

  gallery: [
    { src: '/images/place-01.svg', alt: 'Reformers lined along the studio wall' },
    { src: '/images/place-02.svg', alt: 'Lime plaster wall and linen curtain' },
    { src: '/images/place-03.svg', alt: 'Clay cups drying on a shelf' },
    { src: '/images/place-04.svg', alt: 'The garden door, open' }
  ]
}

export const classes = {
  lead: 'Book online or in the studio. If it’s your first visit, please arrive 10 minutes early so your instructor can help you get set up on your machine.',

  levels: [
    { name: 'Open', note: 'Anyone, including a first class.' },
    { name: 'Slow', note: 'Gentler pace, longer holds, useful when recovering.' },
    { name: 'Strong', note: 'Faster, heavier springs. Come after a few Open classes.' }
  ],

  // TODO: replace with the real timetable
  timetable: [
    {
      day: 'Monday',
      sessions: [
        { time: '07:00', name: 'Reformer', level: 'Open', teacher: 'Nour' },
        { time: '12:30', name: 'Mat', level: 'Open', teacher: 'Iva' },
        { time: '18:30', name: 'Reformer', level: 'Strong', teacher: 'Nour' }
      ]
    },
    {
      day: 'Tuesday',
      sessions: [
        { time: '08:00', name: 'Reformer', level: 'Slow', teacher: 'Marta' },
        { time: '17:30', name: 'Breath and restore', level: 'Open', teacher: 'Iva' },
        { time: '19:00', name: 'Reformer', level: 'Open', teacher: 'Marta' }
      ]
    },
    {
      day: 'Wednesday',
      sessions: [
        { time: '07:00', name: 'Reformer', level: 'Open', teacher: 'Nour' },
        { time: '12:30', name: 'Mat', level: 'Strong', teacher: 'Nour' },
        { time: '18:30', name: 'Reformer', level: 'Slow', teacher: 'Marta' }
      ]
    },
    {
      day: 'Thursday',
      sessions: [
        { time: '08:00', name: 'Reformer', level: 'Open', teacher: 'Iva' },
        { time: '17:30', name: 'Mat', level: 'Open', teacher: 'Marta' },
        { time: '19:00', name: 'Breath and restore', level: 'Slow', teacher: 'Iva' }
      ]
    },
    {
      day: 'Friday',
      sessions: [
        { time: '07:00', name: 'Reformer', level: 'Strong', teacher: 'Nour' },
        { time: '12:30', name: 'Mat', level: 'Open', teacher: 'Iva' }
      ]
    },
    {
      day: 'Saturday',
      sessions: [
        { time: '09:00', name: 'Reformer', level: 'Open', teacher: 'Marta' },
        { time: '11:00', name: 'Mat and long breakfast', level: 'Open', teacher: 'Iva' }
      ]
    },
    {
      day: 'Sunday',
      sessions: [
        { time: '09:00', name: 'Breath and restore', level: 'Slow', teacher: 'Nour' },
        { time: '11:00', name: 'Reformer', level: 'Open', teacher: 'Marta' }
      ]
    }
  ],

  prices: [
    { name: 'Single class', price: '24' },
    { name: 'Five classes', price: '110', note: 'Valid three months' },
    { name: 'Ten classes', price: '200', note: 'Valid six months' },
    { name: 'Monthly, unlimited', price: '190', note: 'Includes a coffee after class' }
  ],

  // TODO: point this at your real booking system (Momence, Mindbody, Punchpass…)
  bookingUrl: 'https://example.com/book',
  bookingLabel: 'Book a class'
}

export const menu = {
  lead: 'Made fresh to order with carefully selected, premium ingredients.',

  groups: [
    {
      heading: 'Coffee',
      items: [
        { name: 'Brewed coffee', price: '4', description: 'Single origin, made by the batch' },
        { name: 'Espresso', price: '3' },
        { name: 'Flat white', price: '4.50' },
        { name: 'Cortado', price: '4' },
        { name: 'Iced coffee with cardamom', price: '5' }
      ]
    },
    {
      heading: 'Tea and infusions',
      items: [
        { name: 'Sencha', price: '4' },
        { name: 'Roasted barley', price: '4', description: 'No caffeine, good after an evening class' },
        { name: 'Mint and lemon verbena', price: '4' },
        { name: 'Turmeric and black pepper', price: '5', description: 'With oat milk, served warm' }
      ]
    },
    {
      heading: 'Plates',
      items: [
        { name: 'Soft eggs, labneh, olive oil', price: '11', description: 'On sourdough, with za’atar', tags: ['V'] },
        { name: 'Green plate', price: '14', description: 'Whatever is best that week, grains, herbs, lemon', tags: ['VG', 'GF'] },
        { name: 'Roasted squash, tahini, seeds', price: '13', tags: ['VG', 'GF'] },
        { name: 'Chicken, freekeh, yoghurt', price: '16' },
        { name: 'Lentil soup', price: '9', description: 'Bread on the side', tags: ['VG'] }
      ]
    },
    {
      heading: 'Sweet',
      items: [
        { name: 'Olive oil and orange cake', price: '6', tags: ['V'] },
        { name: 'Date and tahini bar', price: '5', tags: ['VG', 'GF'] },
        { name: 'Yoghurt, honey, walnuts', price: '7', tags: ['V', 'GF', 'N'] }
      ]
    }
  ],

  /* Markers set against the items above; the page builds the legend from this. */
  legend: [
    { code: 'V', label: 'Vegetarian' },
    { code: 'VG', label: 'Vegan' },
    { code: 'GF', label: 'Gluten free' },
    { code: 'N', label: 'Contains nuts' }
  ],

  footnote: 'We cater to all dietary restrictions, just ask!'
}

export const contact = {
  lead: 'Call or message us on WhatsApp!',

  /**
   * TODO: paste a form endpoint here and the contact form starts working.
   *
   * A static site cannot send email on its own, so the form posts the message
   * as JSON to a service that mails it to you. Formspree is the quickest:
   * make a form at formspree.io and paste its URL, which looks like
   * 'https://formspree.io/f/abcdwxyz'. Any endpoint that accepts a JSON POST
   * works — Netlify Forms, Getform, or your own function later.
   *
   * While this is empty the button will say sending is not connected yet.
   */
  formEndpoint: '',

  subjects: ['A class', 'A booking', 'Private hire', 'Something else'],

  // From Google Maps: find the place, Share, Embed a map, then copy the src
  // out of the iframe it gives you. No API key involved.
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d827.5633220632711!2d35.590937269626046!3d33.934612998325115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDU2JzA0LjYiTiAzNcKwMzUnMjkuNyJF!5e0!3m2!1sen!2sus!4v1788778649483!5m2!1sen!2sus'
}

/**
 * TODO: replace the URLs with the real accounts.
 * Used by the line on the gallery page and by the footer.
 */
export const socials = [
  { platform: 'Instagram', url: 'https://instagram.com' },
  { platform: 'TikTok', url: 'https://tiktok.com' }
]

/** Pictures on the gallery page. The line above them is built from `socials`. */
export const gallery = [
  { src: '/images/social-01.svg', alt: 'A cup on the counter' },
  { src: '/images/social-02.svg', alt: 'Reformer straps' },
  { src: '/images/social-03.svg', alt: 'Bread and labneh' },
  { src: '/images/social-04.svg', alt: 'Light on the plaster wall' },
  { src: '/images/social-05.svg', alt: 'Tea tins on a shelf' },
  { src: '/images/social-06.svg', alt: 'The garden after rain' }
]
