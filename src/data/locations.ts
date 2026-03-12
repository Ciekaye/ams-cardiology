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

export const locations: Location[] = [
  {
    id: "1",
    name: "Welsh Road – Main Office",
    slug: "horsham-main",
    address: "500 Welsh Road, Suite 100",
    city: "Horsham",
    state: "PA",
    zip: "19044",
    phone: "215-517-1000",
    fax: "215-517-1001",
    type: "Main Office",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    image: "/images/locations/horsham-main.jpg",
    description: "Our flagship location offering comprehensive cardiology services including consultations, diagnostic testing, and follow-up care.",
    services: ["General Cardiology", "Echocardiography", "Nuclear Cardiology", "Stress Testing"],
  },
  {
    id: "2",
    name: "Prudential Road – Surgery Center",
    slug: "horsham-surgery",
    address: "300 Prudential Road",
    city: "Horsham",
    state: "PA",
    zip: "19044",
    phone: "215-517-1000",
    type: "Surgery Center",
    hours: "Mon–Fri: 7:00 AM – 5:00 PM",
    image: "/images/locations/horsham-surgery.jpg",
    description: "Our state-of-the-art outpatient surgery center equipped for interventional cardiology procedures and vascular interventions.",
    services: ["Interventional Cardiology", "Cardiac Catheterization", "Peripheral Vascular Procedures"],
  },
  {
    id: "3",
    name: "Prudential Road – Office | Imaging | Rehab",
    slug: "horsham-imaging",
    address: "310 Prudential Road",
    city: "Horsham",
    state: "PA",
    zip: "19044",
    phone: "215-517-1000",
    type: "Office, Imaging & Rehab",
    hours: "Mon–Fri: 7:00 AM – 5:00 PM",
    image: "/images/locations/horsham-imaging.jpg",
    description: "Our comprehensive facility offering office visits, advanced cardiac imaging including PET/CT, and our Intensive Cardiac Rehabilitation Center.",
    services: ["PET/CT Imaging", "CT Calcium Scoring", "Cardiac Rehabilitation", "Office Visits"],
  },
  {
    id: "4",
    name: "North Wales Office",
    slug: "north-wales",
    address: "1180 Welsh Road, Suite 100",
    city: "North Wales",
    state: "PA",
    zip: "19454",
    phone: "215-517-1000",
    type: "Satellite Office",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    image: "/images/locations/north-wales.jpg",
    description: "Our North Wales location provides convenient access to cardiology consultations, diagnostic testing, and follow-up care for patients in the northern Montgomery County area.",
    services: ["General Cardiology", "Echocardiography", "Stress Testing"],
  },
];
