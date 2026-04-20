import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaHandsHelping, FaDog } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Dog Park Etiquette Guide | Austin Dog Park Community Standards',
  description: 'Learn the unwritten rules and proper etiquette for Austin dog parks. Be a responsible dog owner and create positive experiences for the entire community.',
  alternates: {
    canonical: 'https://atxdogparks.com/guides/dog-park-etiquette',
  },
}

export default function DogParkEtiquette() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <FaHandsHelping className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">Dog Park Etiquette</h1>
          </div>
          <p className="text-xl text-primary-100">
            Unwritten rules and community standards for Austin dog parks
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <Image
            src="https://images.unsplash.com/photo-1422565096762-bdb997a56a84?w=1200&q=80"
            alt="Dogs playing together at park"
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg mb-8"
            priority
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Golden Rule</h2>
            <p className="text-gray-700 leading-relaxed mb-8 text-xl italic">
              &quot;Your dog is YOUR responsibility. Not the park&apos;s. Not other owners&apos;. Yours.&quot;
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Entry and Exit Etiquette</h2>
            <ul className="space-y-4 mb-8">
              <li>
                <strong>Use the Double-Gate System Correctly:</strong> Always close the first gate completely before opening the second. Don&apos;t hold gates open for others - this increases escape risk.
              </li>
              <li>
                <strong>Remove Your Leash Inside:</strong> Leashed dogs in off-leash areas can become defensive and trigger aggression.
              </li>
              <li>
                <strong>Don&apos;t Crowd the Entrance:</strong> Move away from the gate immediately after entering so new dogs can enter without feeling cornered.
              </li>
              <li>
                <strong>Greet Calmly:</strong> Don&apos;t let your dog rush new arrivals. Give newcomers space to acclimate.
              </li>
              <li>
                <strong>Leave Promptly:</strong> When it&apos;s time to go, leash up in a quiet area away from the gate and exit quickly.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Supervision and Attention</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The number one complaint from experienced dog park visitors is inattentive owners. Here&apos;s what&apos;s expected:
            </p>
            <ul className="space-y-4 mb-8">
              <li>
                <strong>Eyes On Your Dog At All Times:</strong> Put your phone away. Conversations are fine, but you should always know where your dog is and what they&apos;re doing.
              </li>
              <li>
                <strong>Stay Mobile:</strong> Don&apos;t sit on a bench for your entire visit. Move around and stay close to your dog.
              </li>
              <li>
                <strong>Intervene When Needed:</strong> If your dog is humping, bullying, or playing too rough - step in immediately. Don&apos;t wait for other owners to correct your dog.
              </li>
              <li>
                <strong>Know Your Dog&apos;s Triggers:</strong> If your dog guards toys, gets possessive over you, or dislikes certain breeds - manage these issues proactively.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Play Behavior</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Good play has natural breaks, role reversals, and mutual enjoyment. Manage these situations:
            </p>
            <ul className="space-y-4 mb-8">
              <li>
                <strong>Mounting/Humping:</strong> This is dominance behavior, not play. Redirect your dog immediately if they&apos;re doing it. If another dog is mounting yours excessively, politely ask the owner to intervene or leave.
              </li>
              <li>
                <strong>Overly Rough Play:</strong> If play escalates (no pauses, one dog trying to leave, yelping), separate the dogs for a 2-3 minute break.
              </li>
              <li>
                <strong>Chasing Games:</strong> Great when both dogs take turns being chased. Not okay when one dog is relentlessly pursuing another who wants to stop.
              </li>
              <li>
                <strong>Resource Guarding:</strong> If your dog guards toys, water bowls, or even you - the dog park may not be the right environment. Work with a trainer first.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cleanliness and Maintenance</h2>
            <ul className="space-y-4 mb-8">
              <li>
                <strong>Pick Up Your Dog&apos;s Waste - Always:</strong> No exceptions. Even if it&apos;s diarrhea. Even if other owners don&apos;t. Bring extra bags.
              </li>
              <li>
                <strong>Dispose Properly:</strong> Place waste bags in designated trash cans, not on the ground next to them.
              </li>
              <li>
                <strong>Fill Holes:</strong> If your dog digs a hole, fill it in before leaving to prevent tripping hazards.
              </li>
              <li>
                <strong>Report Issues:</strong> If you see broken fences, dangerous debris, or maintenance issues, report them to Austin Parks (512-974-6700).
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Social Etiquette with Other Owners</h2>
            <ul className="space-y-4 mb-8">
              <li>
                <strong>Friendly But Focused:</strong> It&apos;s okay to chat, but your primary focus should be your dog, not socializing.
              </li>
              <li>
                <strong>Respectful Communication:</strong> If another dog is bothering yours, politely ask the owner to call their dog. Use phrases like &quot;Could you grab your dog for a minute?&quot;
              </li>
              <li>
                <strong>Don&apos;t Give Unsolicited Advice:</strong> Unless there&apos;s an immediate safety concern, keep training tips to yourself.
              </li>
              <li>
                <strong>Respect Personal Space:</strong> Not everyone wants to chat. If someone is focused on their dog or gives short responses, take the hint.
              </li>
              <li>
                <strong>Share Contact Info After Incidents:</strong> If dogs fight or injuries occur, exchange names and phone numbers for veterinary follow-up.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What NOT to Do</h2>
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8">
              <ul className="space-y-3">
                <li>✗ Bring food, treats, or your dog&apos;s favorite toys</li>
                <li>✗ Bring dogs in heat, aggressive dogs, or sick dogs</li>
                <li>✗ Let your dog bully, hump, or harass other dogs repeatedly</li>
                <li>✗ Discipline or touch other people&apos;s dogs without permission</li>
                <li>✗ Bring young children who might get knocked over or scared</li>
                <li>✗ Smoke, drink alcohol, or bring glass containers</li>
                <li>✗ Leave waste bags on the ground &quot;to pick up later&quot;</li>
                <li>✗ Let your dog jump on people or bark excessively</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Peak Hours and Crowds</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Popular Austin dog parks can get crowded, especially on weekends. Here&apos;s how to navigate:
            </p>
            <ul className="space-y-3 mb-8">
              <li><strong>Peak Times:</strong> Saturday/Sunday 9 AM - 12 PM and 4-6 PM</li>
              <li><strong>Best for Crowds:</strong> If your dog loves chaos, embrace peak hours</li>
              <li><strong>Best for Calm Dogs:</strong> Visit weekday mornings (7-9 AM) or late evenings (after 7 PM)</li>
              <li><strong>Too Crowded?:</strong> If the park feels overwhelming, it&apos;s okay to leave and come back later</li>
            </ul>

            <div className="bg-primary-50 border-2 border-primary-300 rounded-lg p-6 mt-12">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Be Part of the Solution</h3>
              <p className="text-gray-700 leading-relaxed">
                Austin&apos;s dog parks thrive because of responsible owners who follow these guidelines. By being attentive, 
                respectful, and proactive, you help create a safe and enjoyable environment for all dogs and owners. 
                When you see good behavior, model it. When you see problems, address them politely. Together, we keep 
                Austin&apos;s dog parks some of the best in the country.
              </p>
            </div>
          </div>
        </div>

        {/* Parks Known for Great Community */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Austin Parks with Great Communities</h2>
          <p className="text-gray-600 mb-6">These parks are known for friendly regulars who take etiquette seriously.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Link href="/parks/auditorium-shores-off-leash-area" className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <span className="text-2xl">🌊</span>
              <div>
                <div className="font-semibold text-gray-900">Auditorium Shores</div>
                <div className="text-sm text-gray-600">One of Austin&apos;s most popular off-leash areas with an active, respectful community.</div>
              </div>
            </Link>
            <Link href="/parks/norwood-estate-dog-park" className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <span className="text-2xl">🐕</span>
              <div>
                <div className="font-semibold text-gray-900">Norwood Estate Dog Park</div>
                <div className="text-sm text-gray-600">Dedicated, fenced park with regulars who set the tone for good etiquette.</div>
              </div>
            </Link>
            <Link href="/parks/red-bud-isle" className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <span className="text-2xl">🌿</span>
              <div>
                <div className="font-semibold text-gray-900">Red Bud Isle</div>
                <div className="text-sm text-gray-600">Popular off-leash island — a great place to see Austin dog culture at its best.</div>
              </div>
            </Link>
            <Link href="/parks/zilker-metropolitan-park" className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <span className="text-2xl">🏞️</span>
              <div>
                <div className="font-semibold text-gray-900">Zilker Metropolitan Park</div>
                <div className="text-sm text-gray-600">Austin&apos;s iconic park — busy, social, and a good place to practice park manners.</div>
              </div>
            </Link>
          </div>
          <Link href="/" className="text-primary-600 font-semibold hover:underline text-sm">Browse all Austin dog parks →</Link>
        </div>

        {/* Related Guides */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/guides/first-timer-guide" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">First-Timer&apos;s Guide</span>
            </Link>
            <Link href="/guides/dog-park-safety" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Safety Guide</span>
            </Link>
            <Link href="/guides/training-and-behavior" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Training Guide</span>
            </Link>
            <Link href="/faq" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">FAQ</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
