export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "What to Expect During Pacemaker Recovery: Timeline, Tips, and Restrictions",
    slug: "pacemaker-recovery-timeline-tips",
    excerpt: "Hearing that you need a pacemaker can be a relief. But at the same time, knowing you need a procedure can also be frightening. Knowing what the entire process looks like can help ease your concerns.",
    content: "Hearing that you need a pacemaker can be a relief — it means there's a clear solution to help your heart beat more regularly. But at the same time, knowing you need a procedure can also be frightening. Understanding what recovery looks like can help you feel more prepared and confident as you move forward.",
    date: "2026-01-15",
    author: "Vireo Cardiology",
    category: "Procedures",
    image: "/images/blog/pacemaker-recovery.jpg",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "AFib Treatment Options: Medications, Procedures, and Lifestyle Adjustments",
    slug: "afib-treatment-options",
    excerpt: "An irregular heartbeat is hard to ignore. Some people notice a flutter in their chest. Others feel more tired than usual or short of breath. Understanding your treatment options is the first step.",
    content: "An irregular heartbeat is hard to ignore. Some people notice a flutter in their chest. Others feel more tired than usual or short of breath. However the symptoms show up, atrial fibrillation (AFib) affects millions of Americans each year. The good news is there are effective treatment options available.",
    date: "2025-12-30",
    author: "Vireo Cardiology",
    category: "Conditions",
    image: "/images/blog/afib-treatment.jpg",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "Controlling AFib: Lifestyle, Medication, and Procedural Options",
    slug: "controlling-afib",
    excerpt: "Every year, millions of adults develop atrial fibrillation, a condition that increases the risk of stroke fivefold. For many, flutters or skipped beats feel unsettling but manageable.",
    content: "Every year, millions of adults develop atrial fibrillation, a condition that increases the risk of stroke fivefold, according to the CDC. For many, the flutters or skipped beats feel unsettling but manageable. Understanding your full range of options is key to taking control.",
    date: "2025-12-15",
    author: "Vireo Cardiology",
    category: "Conditions",
    image: "/images/blog/controlling-afib.jpg",
    readTime: "7 min read",
  },
  {
    id: "4",
    title: "Heart-Healthy New Year's Goals for a Stronger Heart",
    slug: "heart-healthy-new-years-goals",
    excerpt: "The new year is the perfect time to commit to heart-healthy habits. Small, sustainable changes can have a significant impact on your cardiovascular health over time.",
    content: "The new year is the perfect time to commit to heart-healthy habits. Whether you're looking to improve your diet, start an exercise routine, or better manage stress, small sustainable changes can have a significant impact on your cardiovascular health over time.",
    date: "2025-12-01",
    author: "Vireo Cardiology",
    category: "Wellness",
    image: "/images/blog/heart-healthy-goals.jpg",
    readTime: "4 min read",
  },
  {
    id: "5",
    title: "Understanding Your Heart: How the Cardiovascular System Works",
    slug: "understanding-cardiovascular-system",
    excerpt: "Around 100,000 times a day, your heart beats, pushing blood through your body. Understanding how this remarkable organ works is the first step in maintaining its health.",
    content: "Around 100,000 times a day, while you work, sleep, eat and exercise, a sophisticated muscle in your chest is flexed, pushing blood into your lungs to be suffused with oxygen, and circulating freshly oxygenated blood from the lungs back into your organs.",
    date: "2025-11-15",
    author: "Vireo Cardiology",
    category: "Education",
    image: "/images/blog/heart-anatomy.jpg",
    readTime: "8 min read",
  },
  {
    id: "6",
    title: "When to See a Cardiologist: Signs You Shouldn't Ignore",
    slug: "when-to-see-cardiologist",
    excerpt: "Many heart conditions develop gradually, making it easy to dismiss early warning signs. Knowing when to seek specialized cardiac care can be lifesaving.",
    content: "Many heart conditions develop gradually, making it easy to dismiss early warning signs. Chest discomfort, shortness of breath, dizziness, and unexplained fatigue are all symptoms that warrant evaluation by a cardiologist.",
    date: "2025-11-01",
    author: "Vireo Cardiology",
    category: "Education",
    image: "/images/blog/see-cardiologist.jpg",
    readTime: "5 min read",
  },
];
