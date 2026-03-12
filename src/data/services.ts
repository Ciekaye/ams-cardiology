export interface Service {
  id: string;
  title: string;
  slug: string;
  category: "procedure" | "condition" | "rehab";
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Echocardiography",
    slug: "echocardiography",
    category: "procedure",
    shortDescription: "An \"echo\" is a procedure where sound waves are used to visualize heart structures, providing detailed images of your heart's function.",
    fullDescription: "Echocardiography uses high-frequency sound waves to create detailed images of your heart's chambers, valves, walls, and blood vessels. This non-invasive test helps our cardiologists assess heart function, detect abnormalities, and guide treatment decisions. Types include transthoracic echo (TTE), transesophageal echo (TEE), and stress echocardiography.",
    icon: "Activity",
    image: "/images/services/echocardiography.jpg",
  },
  {
    id: "2",
    title: "Electrophysiology",
    slug: "electrophysiology",
    category: "procedure",
    shortDescription: "Patients with abnormal heart rhythms may require an electrophysiology study to diagnose and treat electrical problems of the heart.",
    fullDescription: "Electrophysiology (EP) studies involve testing the electrical activity of your heart to find the cause of abnormal heart rhythms (arrhythmias). Our EP specialists use advanced catheter-based techniques to map electrical pathways and perform ablation procedures to correct rhythm disorders including atrial fibrillation, SVT, and ventricular tachycardia.",
    icon: "Zap",
    image: "/images/services/electrophysiology.jpg",
  },
  {
    id: "3",
    title: "Interventional Cardiology",
    slug: "interventional-cardiology",
    category: "procedure",
    shortDescription: "Patients with decreased blood flow to the heart may require cardiac catheterization and advanced interventional procedures.",
    fullDescription: "Interventional cardiology involves catheter-based treatment of heart diseases. Our interventional cardiologists perform coronary angioplasty, stent placement, and other minimally invasive procedures to restore blood flow to the heart muscle. These techniques often provide alternatives to open-heart surgery with shorter recovery times.",
    icon: "HeartPulse",
    image: "/images/services/interventional.jpg",
  },
  {
    id: "4",
    title: "Peripheral Vascular Disease",
    slug: "peripheral-vascular",
    category: "procedure",
    shortDescription: "Patients with decreased blood flow in their legs or arms may require peripheral angiography and vascular interventions.",
    fullDescription: "Our vascular specialists diagnose and treat conditions affecting blood vessels outside the heart and brain. Using advanced imaging and catheter-based techniques, we address peripheral artery disease, venous disorders, and other vascular conditions to restore proper circulation and prevent complications.",
    icon: "GitBranch",
    image: "/images/services/vascular.jpg",
  },
  {
    id: "5",
    title: "PET/CT Imaging",
    slug: "pet-ct",
    category: "procedure",
    shortDescription: "Advanced cardiac PET/CT imaging provides the most accurate assessment of blood flow to the heart muscle.",
    fullDescription: "Cardiac PET/CT combines positron emission tomography with computed tomography to provide the most accurate non-invasive assessment of coronary artery disease. This advanced imaging technology measures blood flow to the heart muscle with exceptional precision, helping our cardiologists make informed treatment decisions.",
    icon: "Scan",
    image: "/images/services/pet-ct.jpg",
  },
  {
    id: "6",
    title: "CT Calcium Scoring",
    slug: "ct-calcium-scoring",
    category: "procedure",
    shortDescription: "A non-invasive CT scan that measures the amount of calcified plaque in the coronary arteries to assess heart disease risk.",
    fullDescription: "Coronary calcium scoring uses a specialized CT scan to detect and measure calcium deposits in the walls of the coronary arteries. This quick, painless test is one of the most effective tools for assessing your risk of future heart attack or coronary artery disease, even before symptoms develop.",
    icon: "Shield",
    image: "/images/services/calcium-scoring.jpg",
  },
  {
    id: "7",
    title: "Atrial Fibrillation",
    slug: "atrial-fibrillation",
    category: "condition",
    shortDescription: "AFib is the most common type of heart arrhythmia, causing irregular and often rapid heartbeat that increases stroke risk.",
    fullDescription: "Atrial fibrillation (AFib) is an irregular, often rapid heart rhythm that can lead to blood clots, stroke, heart failure, and other complications. Our electrophysiologists and cardiologists offer comprehensive AFib management including medication therapy, cardioversion, catheter ablation, and the WATCHMAN device for stroke prevention.",
    icon: "HeartPulse",
    image: "/images/conditions/afib.jpg",
  },
  {
    id: "8",
    title: "Aortic Stenosis, AVR & TAVR",
    slug: "aortic-stenosis-avr-tavr",
    category: "condition",
    shortDescription: "Aortic stenosis is a narrowing of the aortic valve opening that can be treated with advanced valve replacement procedures.",
    fullDescription: "Aortic stenosis occurs when the heart's aortic valve narrows, restricting blood flow. Our structural heart specialists offer both surgical aortic valve replacement (AVR) and transcatheter aortic valve replacement (TAVR), a minimally invasive approach ideal for patients who may be at higher risk for traditional surgery.",
    icon: "Heart",
    image: "/images/conditions/aortic-stenosis.jpg",
  },
  {
    id: "9",
    title: "Bradycardia & Tachycardia",
    slug: "bradycardia-and-tachycardia",
    category: "condition",
    shortDescription: "Heart rhythm disorders where the heart beats too slowly (bradycardia) or too fast (tachycardia) requiring specialized care.",
    fullDescription: "Bradycardia (slow heart rate) and tachycardia (fast heart rate) are common rhythm disorders that can significantly impact quality of life. Our team provides comprehensive diagnosis and treatment including pacemaker implantation, medication management, catheter ablation, and implantable defibrillators.",
    icon: "Zap",
    image: "/images/conditions/rhythm.jpg",
  },
  {
    id: "10",
    title: "Peripheral Artery Disease",
    slug: "peripheral-artery-disease",
    category: "condition",
    shortDescription: "PAD occurs when narrowed arteries reduce blood flow to the limbs, causing pain, numbness, and risk of serious complications.",
    fullDescription: "Peripheral artery disease (PAD) is a circulatory condition in which narrowed blood vessels reduce blood flow to your limbs. Our vascular specialists offer comprehensive PAD management including lifestyle modifications, medication therapy, angioplasty and stenting, and atherectomy procedures.",
    icon: "GitBranch",
    image: "/images/conditions/pad.jpg",
  },
  {
    id: "11",
    title: "Preventive Cardiology & Lipid Management",
    slug: "preventive-cardiology",
    category: "condition",
    shortDescription: "Proactive cardiovascular risk assessment and lipid management to prevent heart disease before it develops.",
    fullDescription: "Our preventive cardiology program focuses on identifying and managing cardiovascular risk factors before heart disease develops. This includes advanced lipid testing, genetic risk assessment, lifestyle counseling, and personalized treatment plans to optimize cholesterol levels and reduce long-term cardiac risk.",
    icon: "ShieldCheck",
    image: "/images/conditions/preventive.jpg",
  },
  {
    id: "12",
    title: "Intensive Cardiac Rehab Center",
    slug: "cardiac-rehab",
    category: "rehab",
    shortDescription: "Recover with confidence in our brand-new Intensive Cardiac Rehab Center combining supervised exercise, nutrition, and emotional support.",
    fullDescription: "Our Intensive Cardiac Rehabilitation Center provides a comprehensive recovery program that combines medically supervised exercise, personalized nutrition counseling, stress management, and emotional support. This evidence-based program helps patients recover from cardiac events and procedures while building lasting heart-healthy habits.",
    icon: "Dumbbell",
    image: "/images/services/rehab.jpg",
  },
];

export const procedures = services.filter((s) => s.category === "procedure");
export const conditions = services.filter((s) => s.category === "condition");
