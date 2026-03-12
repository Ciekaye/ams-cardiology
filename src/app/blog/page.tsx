import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog";
import { getBlogImage } from "@/data/images";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay informed with the latest cardiology insights, heart health tips, and educational content from the AMS Cardiology team.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-accent-light">
            Stay Informed
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AMS Blog</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Expert insights and educational content from our cardiology team to help you stay
            heart-healthy.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Post */}
          <div className="mb-16">
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="group grid md:grid-cols-2 gap-8 bg-white rounded-xl border border-border-light overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-64 md:h-auto relative overflow-hidden">
                <Image
                  src={getBlogImage(blogPosts[0].id, "hero")}
                  alt={blogPosts[0].title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wide text-accent">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-xs text-text-muted">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors mb-3">
                  {blogPosts[0].title}
                </h2>
                <p className="text-text-muted leading-relaxed mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-muted">
                    {new Date(blogPosts[0].date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                    Read Article <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* All Posts Grid */}
          <SectionHeading title="All Articles" align="left" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl border border-border-light overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={getBlogImage(post.id, "card")}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wide text-accent">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-light">
                    <span className="text-xs text-text-muted">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                      Read <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
