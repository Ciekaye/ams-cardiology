import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, ChevronRight, CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/data/blog";
import { getBlogImage } from "@/data/images";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-light">
              {post.category}
            </span>
            <span className="text-xs text-white/50">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src={getBlogImage(post.id, "hero")}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-text-secondary leading-relaxed mb-6">{post.content}</p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  At AMS Cardiology, our team of board-certified cardiologists is committed to providing
                  the highest level of cardiovascular care. With over 40 years of experience serving the
                  Greater Philadelphia area, we combine cutting-edge medical expertise with compassionate,
                  patient-centered care.
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Whether you&apos;re seeking preventive care, managing a chronic condition, or recovering from
                  a cardiac event, our comprehensive team is here to support you every step of the way.
                  We believe that education is a key component of heart health, which is why we regularly
                  publish articles like this one to keep our patients and community informed.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  If you have questions about this topic or would like to schedule an appointment with one
                  of our cardiologists, please don&apos;t hesitate to contact our office. Your heart health
                  is our priority.
                </p>
              </div>

              {/* CTA within article */}
              <div className="mt-12 p-8 bg-bg-blue rounded-xl border border-border-light text-center">
                <h3 className="text-xl font-bold text-primary-dark mb-3">Have Questions?</h3>
                <p className="text-text-muted mb-6">
                  Our cardiologists are here to help. Schedule a consultation today.
                </p>
                <Button href="/contact" variant="secondary">
                  <CalendarCheck className="w-4 h-4 mr-2" />
                  Request an Appointment
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-bg-warm rounded-xl border border-border-light p-6">
                  <h3 className="font-bold text-primary-dark mb-4">Related Articles</h3>
                  <ul className="space-y-4">
                    {relatedPosts.map((related) => (
                      <li key={related.id}>
                        <Link
                          href={`/blog/${related.slug}`}
                          className="group block"
                        >
                          <span className="text-xs font-bold uppercase tracking-wide text-accent">
                            {related.category}
                          </span>
                          <h4 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors mt-1 line-clamp-2">
                            {related.title}
                          </h4>
                          <span className="inline-flex items-center text-xs text-text-muted mt-1">
                            {related.readTime}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary text-white rounded-xl p-6">
                  <h3 className="font-bold mb-3">Need Heart Care?</h3>
                  <p className="text-sm text-white/70 mb-4">
                    Schedule an appointment with one of our expert cardiologists.
                  </p>
                  <Button href="/contact" variant="white" size="sm" className="w-full">
                    Request Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
