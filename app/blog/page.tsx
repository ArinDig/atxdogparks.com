import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import blogArticlesData from '@/data/blogArticles.json'
import { BlogArticle } from '@/types/blogArticle'
import { FaCalendar, FaClock, FaFolder } from 'react-icons/fa'

const blogArticles = blogArticlesData as BlogArticle[]

export const metadata: Metadata = {
  title: 'Dog Park Tips & Guides',
  description: 'Expert advice, safety tips, training guides, and helpful articles about enjoying dog parks in Austin, Texas. Learn how to make the most of your dog park visits.',
  alternates: {
    canonical: 'https://atxdogparks.com/blog',
  },
  openGraph: {
    title: 'Dog Park Tips & Guides | ATX Dog Parks',
    description: 'Expert advice, safety tips, training guides, and helpful articles about enjoying dog parks in Austin, Texas.',
    type: 'website',
    url: 'https://atxdogparks.com/blog',
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dog Park Tips & Guides</h1>
          <p className="text-xl text-primary-100">
            Expert advice to help you and your dog make the most of Austin dog parks
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <Link href={`/blog/${article.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={article.mainImage}
                    alt={article.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-primary-600" />
                      <span>{new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-primary-600" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-12 bg-white mt-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Resource for Dog Park Success</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to the ATX Dog Parks blog, your comprehensive resource for everything related to visiting dog parks in Austin, Texas. 
            Whether you are a first-time dog owner or a seasoned park veteran, our articles provide valuable insights, practical tips, 
            and expert advice to help you and your dog have the best possible park experiences.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our content covers a wide range of topics including safety protocols, training techniques, seasonal considerations, etiquette 
            guidelines, and breed-specific advice. Each article is written by experienced dog owners and park enthusiasts who understand 
            the unique challenges and joys of the Austin dog park community.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe that well-informed dog owners create safer, more enjoyable environments for all park visitors. Browse our articles 
            to learn how to prepare for your first dog park visit, recognize important body language signals, protect your dog from seasonal 
            hazards, and become a responsible member of Austin vibrant dog-loving community.
          </p>
        </div>
      </section>
    </div>
  )
}

