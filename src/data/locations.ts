export interface Location {
  id: string;
  name: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  fax?: string;
  type: string;
  hours: string;
  image: string;
  description: string;
  services?: string[];
}

// All addresses below are fictional, created for a portfolio case study.
// <!-- fictional address for portfolio demo -->
export const locations: Location[] = [
  {
    id: "1",
    name: "Chestnut Street – Main Office",
    slug: "philadelphia-main",
    address: "1234 Chestnut Street, Suite 500",
    city: "Philadelphia",
    state: "PA",
    zip: "19107",
    phone: "(555) 014-3782",
    fax: "(555) 014-3783",
    type: "Main Office",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    image: "/images/locations/philadelphia-main.jpg",
    description: "Our flagship location offering comprehensive cardiology services including consultations, diagnostic testing, and follow-up care.",
    services: ["General Cardiology", "Echocardiography", "Nuclear Cardiology", "Stress Testing"],
  },
  {
    id: "2",
    name: "Market Street – Surgery Center",
    slug: "philadelphia-surgery",
    address: "567 Market Street",
    city: "Philadelphia",
    state: "PA",
    zip: "19102",
    phone: "(555) 014-3782",
    type: "Surgery Center",
    hours: "Mon–Fri: 7:00 AM – 5:00 PM",
    image: "/images/locations/philadelphia-surgery.jpg",
    description: "Our state-of-the-art outpatient surgery center equipped for interventional cardiology procedures and vascular interventions.",
    services: ["Interventional Cardiology", "Cardiac Catheterization", "Peripheral Vascular Procedures"],
  },
  {
    id: "3",
    name: "Broad Street – Office | Imaging | Rehab",
    slug: "philadelphia-imaging",
    address: "890 Broad Street",
    city: "Philadelphia",
    state: "PA",
    zip: "19130",
    phone: "(555) 014-3782",
    type: "Office, Imaging & Rehab",
    hours: "Mon–Fri: 7:00 AM – 5:00 PM",
    image: "/images/locations/philadelphia-imaging.jpg",
    description: "Our comprehensive facility offering office visits, advanced cardiac imaging including PET/CT, and our Intensive Cardiac Rehabilitation Center.",
    services: ["PET/CT Imaging", "CT Calcium Scoring", "Cardiac Rehabilitation", "Office Visits"],
  },
  {
    id: "4",
    name: "Cherry Hill Office",
    slug: "cherry-hill",
    address: "456 Kings Highway East, Suite 200",
    city: "Cherry Hill",
    state: "NJ",
    zip: "08034",
    phone: "(555) 014-3782",
    type: "Satellite Office",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    image: "/images/locations/cherry-hill.jpg",
    description: "Our Cherry Hill location provides convenient access to cardiology consultations, diagnostic testing, and follow-up care for patients in the South Jersey area.",
    services: ["General Cardiology", "Echocardiography", "Stress Testing"],
  },
];
