// Centralized image registry — every Unsplash photo-ID appears in
// EXACTLY ONE section below.  No two components share the same image.

const img = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

// ═══════════════════════════════════════════════
// HOMEPAGE  (3 unique IDs)
// ═══════════════════════════════════════════════
export const heroImages = {
  home: img("1576091160550-2173dba999ef", 1200, 900),
};

export const homeSectionImages = {
  aboutTrust:   img("1584982751601-97dcc096659c", 800, 800),
  cardiacRehab: img("1571019613454-1cb2f99b2d8b", 800, 450),
};

// ═══════════════════════════════════════════════
// ABOUT PAGE  (2 unique IDs)
// ═══════════════════════════════════════════════
export const aboutImages = {
  mission:        img("1576091160399-112ba8d25d1d", 800, 600),
  whySetsUsApart: img("1582750433449-648ed127bb54", 800, 800),
};

// ═══════════════════════════════════════════════
// PHYSICIANS — 19 unique professional portraits
// ═══════════════════════════════════════════════
const physicianPortraits: Record<string, string> = {
  "1":  img("1612349317150-e413f6a5b16d", 400, 533),
  "2":  img("1622253692010-333f2da6031d", 400, 533),
  "3":  img("1559839734-2b71ea197ec2", 400, 533),
  "4":  img("1537368910025-700350fe46c7", 400, 533),
  "5":  img("1618498082410-b4aa22193b38", 400, 533),
  "6":  img("1607990283143-e81e7a2c9349", 400, 533),
  "7":  img("1638202993928-7267aad84c31", 400, 533),
  "8":  img("1651008376811-b90baee60c1f", 400, 533),
  "9":  img("1622902046580-2b47f47f5571", 400, 533),
  "10": img("1614935151651-0bea6508db6b", 400, 533),
  "11": img("1623854767648-e7bb8009f0db", 400, 533),
  "12": img("1612531386530-97286d97c2d2", 400, 533),
  "13": img("1594824476967-48c8b964e05a", 400, 533),
  "14": img("1625134673337-519d4d10b313", 400, 533),
  "15": img("1666214280557-091b5533b0c3", 400, 533),
  "16": img("1579684453423-f84349ef60b0", 400, 533),
  "17": img("1642391326825-7e453715ccc7", 400, 533),
  "18": img("1600880292203-757bb62b4baf", 400, 533),
  "19": img("1666886573301-51b0e0f5b8a5", 400, 533),
};

export function getPhysicianPortrait(id: string): string {
  return physicianPortraits[id] ?? physicianPortraits["1"];
}

// ═══════════════════════════════════════════════
// ADVANCED PRACTICE PROFESSIONALS — 6 unique portraits
// ═══════════════════════════════════════════════
export const appPortraits = [
  img("1643297654416-05795d62e39c", 400, 300),
  img("1666214280391-8ff5bd3c0bf0", 400, 300),
  img("1527613426441-4da17471b66d", 400, 300),
  img("1551884170-09fb70a3a2ed", 400, 300),
  img("1590611936760-eeb9bc598548", 400, 300),
  img("1570612861542-284f4c12e75f", 400, 300),
];

// ═══════════════════════════════════════════════
// SERVICES — 7 unique procedure / equipment images
// ═══════════════════════════════════════════════
export const serviceImages: Record<string, string> = {
  "1":  img("1628348068343-c6a848d2b6dd", 800, 450),
  "2":  img("1551076805-e1869033e561", 800, 450),
  "3":  img("1559757175-5700dde675bc", 800, 450),
  "4":  img("1584515933487-779824d29309", 800, 450),
  "5":  img("1559757148-5c9c3e1fb4cf", 800, 450),
  "6":  img("1581093196867-0a187ee0a891", 800, 450),
  "12": img("1532938911079-1b06ac7ceec7", 800, 450),
};

// ═══════════════════════════════════════════════
// CONDITIONS — 5 unique medical images
// ═══════════════════════════════════════════════
export const conditionImages: Record<string, string> = {
  "7":  img("1581093804475-577d72e38aa0", 800, 450),
  "8":  img("1581093458791-9d42e3c7e117", 800, 450),
  "9":  img("1581093588401-fbb62a02f120", 800, 450),
  "10": img("1579154204601-c46d7e8e6ab0", 800, 450),
  "11": img("1544991875-5dc27b81b981", 800, 450),
};

export const conditionCardImages = conditionImages;

// ═══════════════════════════════════════════════
// LOCATIONS — 4 unique building / interior images
// ═══════════════════════════════════════════════
const locationPhotos: Record<string, string> = {
  "1": "1519494026892-80bbd2d6fd0d",
  "2": "1586773860418-d37222d8fce3",
  "3": "1504439468489-c8920d796a29",
  "4": "1629909613654-28e377c37b09",
};

export function getLocationImage(id: string, variant: "card" | "detail" = "card"): string {
  const photoId = locationPhotos[id] ?? locationPhotos["1"];
  const w = variant === "detail" ? 1000 : 600;
  const h = variant === "detail" ? 563 : 400;
  return img(photoId, w, h);
}

// ═══════════════════════════════════════════════
// BLOG — 6 unique health-education images
// ═══════════════════════════════════════════════
const blogPhotos: Record<string, string> = {
  "1": "1583912267550-d974311a9a6e",
  "2": "1560582861-45078880e48e",
  "3": "1585435557343-3b092031a831",
  "4": "1617791160505-6f00504e3519",
  "5": "1619785292559-a15b27c99e25",
  "6": "1538108149393-fbbd81895907",
};

export function getBlogImage(id: string, variant: "card" | "hero" = "card"): string {
  const photoId = blogPhotos[id] ?? blogPhotos["1"];
  const w = variant === "hero" ? 1000 : 600;
  const h = variant === "hero" ? 563 : 400;
  return img(photoId, w, h);
}

// ═══════════════════════════════════════════════
// TELEMEDICINE PAGE  (1 unique ID)
// ═══════════════════════════════════════════════
export const telemedicineImages = {
  hero: img("1585842378054-ee2e52f94ba2", 600, 600),
};
