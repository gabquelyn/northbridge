import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { get_blog, get_all_blogs } from "@/app/lib/blog";
import moment from "moment";

interface BlogPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const { blogs } = await get_all_blogs();
  return blogs.map((blog: Blog) => ({ id: blog._id }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { id } = await params;
  const { blog } = await get_blog(id);
  if (!blog) return {};

  const ogImage = blog.images?.[0]?.url;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const { blog } = await get_blog(id);
  if (!blog) notFound();

  const heroImage = blog.images?.[0];

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-20">
      {heroImage && (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-100 mb-8 bg-gray-50">
          <Image
            src={heroImage.url}
            alt={blog.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      )}

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-darkBlue tracking-tight">
          {blog.title}
        </h1>
        <p className="mt-3 text-sm text-secondary">
          {moment(blog.createdAt).format("YYYY MMM D, h:mm A")}
        </p>
        <p className="mt-4 text-base text-secondary leading-relaxed">
          {blog.description}
        </p>
      </header>

      <div
        className={[
          "prose prose-neutral max-w-none",
          "prose-headings:text-darkBlue prose-headings:font-bold",
          "prose-strong:text-darkBlue",
          "prose-blockquote:border-l-primary prose-blockquote:text-secondary prose-blockquote:font-normal prose-blockquote:not-italic",
          "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
          "prose-img:rounded-xl prose-img:border prose-img:border-gray-100",
        ].join(" ")}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
}
