export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Mission", href: "/about" },
      { label: "Cardiologists", href: "/physicians" },
      { label: "Nurse Practitioners & PAs", href: "/advanced-practice-professionals" },
      { label: "Patient Testimonials", href: "/testimonials" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Echocardiography", href: "/services/echocardiography" },
      { label: "Electrophysiology", href: "/services/electrophysiology" },
      { label: "Interventional Cardiology", href: "/services/interventional-cardiology" },
      { label: "Peripheral Vascular Disease", href: "/services/peripheral-vascular" },
      { label: "PET/CT Imaging", href: "/services/pet-ct" },
      { label: "CT Calcium Scoring", href: "/services/ct-calcium-scoring" },
      { label: "Cardiac Rehabilitation", href: "/services/cardiac-rehab" },
    ],
  },
  {
    label: "Conditions",
    href: "/conditions",
    children: [
      { label: "Atrial Fibrillation", href: "/conditions/atrial-fibrillation" },
      { label: "Aortic Stenosis, AVR & TAVR", href: "/conditions/aortic-stenosis-avr-tavr" },
      { label: "Bradycardia & Tachycardia", href: "/conditions/bradycardia-and-tachycardia" },
      { label: "Peripheral Artery Disease", href: "/conditions/peripheral-artery-disease" },
      { label: "Preventive Cardiology", href: "/conditions/preventive-cardiology" },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
  },
  {
    label: "Patient Resources",
    href: "/patient-resources",
    children: [
      { label: "Patient Portal", href: "#" },
      { label: "Telemedicine", href: "/telemedicine" },
      { label: "Patient Forms", href: "/patient-resources#forms" },
      { label: "Billing", href: "#" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const utilityLinks = [
  { label: "For Referring Providers", href: "/providers" },
  { label: "Telemedicine", href: "/telemedicine" },
  { label: "Pay My Bill", href: "#" },
  { label: "Patient Portal", href: "#" },
];
