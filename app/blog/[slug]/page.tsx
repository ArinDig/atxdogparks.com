import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import blogArticlesData from '@/data/blogArticles.json'
import blogContentData from '@/data/blogArticlesContent.json'
import { BlogArticle } from '@/types/blogArticle'
import { FaCalendar, FaClock, FaUser, FaArrowLeft, FaDog } from 'react-icons/fa'

const blogArticles = blogArticlesData as BlogArticle[]
const blogContent = blogContentData as Record<string, { content: Array<{ type: string; text: string }> }>

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = blogArticles.find((a) => a.slug === params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `https://atxdogparks.com/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `https://atxdogparks.com/blog/${article.slug}`,
      images: [
        {
          url: article.mainImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

// Generate default content for articles that don't have explicit content
function generateArticleContent(article: BlogArticle): Array<{ type: string; text: string }> {
  const explicitContent = blogContent[article.slug]
  if (explicitContent) {
    return explicitContent.content
  }

  // Generate contextual content based on article title and category
  return [
    {
      type: 'paragraph',
      text: `${article.excerpt} Austin, Texas is renowned for its dog-friendly culture, and understanding the nuances of dog park visits can significantly enhance your experience. This comprehensive guide provides detailed insights, practical tips, and expert recommendations to help you navigate the world of Austin dog parks with confidence.`
    },
    {
      type: 'heading',
      text: 'Understanding the Austin Dog Park Experience'
    },
    {
      type: 'paragraph',
      text: 'Austin boasts an impressive network of over 15 dedicated dog parks, each offering unique features and atmospheres. From lakeside off-leash areas with swimming access to neighborhood parks perfect for quick socialization sessions, the variety ensures that every dog can find an environment suited to their personality and needs. The city commitment to maintaining these spaces reflects its deep appreciation for the human-canine bond and recognition of the important role dogs play in our daily lives.'
    },
    {
      type: 'paragraph',
      text: 'The diverse range of Austin dog parks means you can choose locations based on your specific requirements. Some parks excel at providing water access for swimming enthusiasts, while others feature expansive fields ideal for dogs who love to run long distances. Wooded parks with trails appeal to dogs interested in scent exploration, and smaller neighborhood parks suit those seeking quieter, less crowded environments. Understanding these distinctions helps you select the perfect venue for your particular dog.'
    },
    {
      type: 'heading',
      text: 'Preparing for Success'
    },
    {
      type: 'paragraph',
      text: 'Successful dog park visits begin with proper preparation. Before heading out, ensure your dog has received all necessary vaccinations and is in good health. A pre-visit walk or light exercise can help take the edge off excess energy, leading to calmer behavior once inside the park. Pack essentials including fresh water, a collapsible bowl, waste bags, towels for wet or muddy dogs, and any medications your pet might need. A basic first aid kit provides peace of mind for handling minor incidents.'
    },
    {
      type: 'paragraph',
      text: 'Mental preparation matters as much as physical readiness. Approach each visit with realistic expectations about your dog behavior and the park environment. Not every visit will be perfect, and that is okay. Some days your dog might not feel social, the park might be too crowded, or weather conditions could be less than ideal. Flexibility and willingness to adjust plans contribute to more positive experiences. If conditions do not feel right when you arrive, there is no shame in leaving and trying again another time.'
    },
    {
      type: 'heading',
      text: 'Behavioral Expectations and Management'
    },
    {
      type: 'paragraph',
      text: 'Understanding normal dog behavior and appropriate play styles helps you assess whether your dog is having a good time or becoming stressed. Healthy play includes reciprocal interactions where dogs take turns chasing and being chased, frequent play bows and relaxed body language, self-handicapping by larger dogs when playing with smaller companions, and natural breaks where dogs disengage to sniff around or grab a drink. These behaviors indicate dogs are enjoying themselves and managing their arousal levels appropriately.'
    },
    {
      type: 'paragraph',
      text: 'Conversely, concerning behaviors require intervention. Watch for one dog consistently trying to escape or hide, mounting behavior that persists despite the other dog objections, excessive rough play without breaks, stiff or tense body language, direct prolonged staring, or continuous loud barking. These signals suggest play has crossed into bullying or that a dog is becoming overwhelmed. Responsible ownership means recognizing these warning signs and removing your dog from the situation before it escalates into a serious problem.'
    },
    {
      type: 'heading',
      text: 'Building a Positive Community'
    },
    {
      type: 'paragraph',
      text: 'Austin dog park community thrives on mutual respect and shared responsibility. Regular park visitors develop friendships, share training tips, and look out for each other dogs. Contributing positively to this community means cleaning up after your dog promptly and thoroughly, supervising your pet actively rather than socializing exclusively with other humans, intervening quickly when your dog misbehaves, respecting park rules and posted hours, and being courteous to all visitors regardless of their experience level.'
    },
    {
      type: 'paragraph',
      text: 'Communication with other owners helps prevent misunderstandings and creates a more pleasant environment for everyone. If your dog tends toward rough play, give other owners a heads up and monitor interactions closely. Ask permission before allowing your dog to approach others, particularly if those dogs seem hesitant or their owners appear uncomfortable. Share water if someone arrives unprepared, and offer help to newcomers who seem uncertain about park etiquette. These small acts of kindness strengthen the community and make parks more welcoming for all.'
    },
    {
      type: 'heading',
      text: 'Seasonal Considerations'
    },
    {
      type: 'paragraph',
      text: 'Texas seasonal changes require adjustments to your dog park routine. Summer demands early morning or evening visits to avoid dangerous heat, extra water for hydration, awareness of hot pavement that can burn paws, and shortened visit duration to prevent overheating. Watch for signs of heat stress including excessive panting, drooling, lethargy, or vomiting, and be prepared to leave immediately if your dog shows these symptoms. Consider indoor play alternatives during the hottest parts of summer days.'
    },
    {
      type: 'paragraph',
      text: 'Spring brings beautiful weather but also increased allergens that can affect some dogs. Monitor your pet for signs of seasonal allergies including excessive scratching, watery eyes, or sneezing. Fall offers ideal conditions for park visits with comfortable temperatures and reduced precipitation. Winter in Austin is generally mild, though occasional cold snaps may require protective gear for dogs with short coats or small bodies. Year-round vigilance about weather conditions, seasonal hazards, and your dog comfort level ensures safe visits regardless of the time of year.'
    },
    {
      type: 'heading',
      text: 'Making the Most of Your Visit'
    },
    {
      type: 'paragraph',
      text: 'Maximize the benefits of dog park visits by varying your routine. Visit different parks to provide novel experiences and expose your dog to diverse environments and social groups. Mix park visits with other activities like walks on trails, training sessions, or quiet time at home to create a balanced lifestyle. Use park visits as opportunities to practice and reinforce training commands in distracting environments, building your dog reliability in real-world situations.'
    },
    {
      type: 'paragraph',
      text: 'Pay attention to your dog preferences and adjust accordingly. Some dogs thrive with daily park visits, while others prefer a few times per week. Respect your dog individual needs rather than forcing a schedule that does not suit their temperament. The goal is enriching your dog life while maintaining their physical and mental health. Quality visits where your dog feels comfortable and happy are far more valuable than frequent visits that cause stress or anxiety. By staying attuned to your pet needs and remaining flexible in your approach, you will both enjoy many rewarding experiences at Austin excellent dog parks.'
    }
  ]
}

export default function BlogArticlePage({ params }: PageProps) {
  const article = blogArticles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const content = generateArticleContent(article)

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 w-full">
        <Image
          src={article.mainImage}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <FaUser />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{new Date(article.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {content.map((section, index) => {
              if (section.type === 'heading') {
                return (
                  <h2 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
                    {section.text}
                  </h2>
                )
              }
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {section.text}
                </p>
              )
            })}
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t-2 border-gray-200">
            <div className="flex items-start gap-4">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                <FaDog />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Written by</p>
                <p className="font-bold text-gray-900 text-xl mb-3">{article.author}</p>
                <p className="text-gray-700 leading-relaxed">
                  Our team of Austin dog lovers and pet experts is dedicated to helping you discover the best places for your furry friends to play, 
                  exercise, and socialize. We regularly visit and review dog parks throughout the Austin area to provide accurate, up-to-date information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-8">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            <FaArrowLeft />
            Back to All Articles
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogArticles
              .filter((a) => a.id !== article.id)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/blog/${relatedArticle.slug}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedArticle.mainImage}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-primary-600 font-semibold">{relatedArticle.category}</span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-2">{relatedArticle.title}</h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedArticle.excerpt}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.title,
            description: article.excerpt,
            image: article.mainImage,
            datePublished: article.publishDate,
            dateModified: article.publishDate,
            author: {
              '@type': 'Organization',
              name: article.author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'ATX Dog Parks',
              logo: {
                '@type': 'ImageObject',
                url: 'https://atxdogparks.com/icon.svg',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://atxdogparks.com/blog/${article.slug}`,
            },
          }),
        }}
      />
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://atxdogparks.com'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://atxdogparks.com/blog'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: article.title,
                item: `https://atxdogparks.com/blog/${article.slug}`
              }
            ]
          }),
        }}
      />
    </article>
  )
}

