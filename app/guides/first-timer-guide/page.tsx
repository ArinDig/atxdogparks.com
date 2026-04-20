import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaDog, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'First-Timer\'s Guide to Dog Parks | Austin Dog Park Tips',
  description: 'Your complete guide to visiting an Austin dog park for the first time. Learn what to bring, how to prepare your dog, and what to expect on your first visit.',
  alternates: {
    canonical: 'https://atxdogparks.com/guides/first-timer-guide',
  },
}

export default function FirstTimerGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <FaDog className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">First-Timer&apos;s Guide to Dog Parks</h1>
          </div>
          <p className="text-xl text-primary-100">
            Everything you need to know for a successful first visit to an Austin dog park
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <Image
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=1200&q=80"
            alt="Dogs playing at dog park"
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg mb-8"
            priority
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Is Your Dog Ready?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Before visiting your first dog park, make sure your dog meets these requirements:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" />
                  Must Have
                </h3>
                <ul className="space-y-2">
                  <li>✓ Current vaccinations (rabies, DHPP, bordetella)</li>
                  <li>✓ At least 6 months old</li>
                  <li>✓ Spayed or neutered</li>
                  <li>✓ Basic commands (come, sit, stay)</li>
                  <li>✓ Comfortable around other dogs</li>
                  <li>✓ Good health (no illness or injury)</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                  <FaTimesCircle className="text-red-600" />
                  Not Ready If
                </h3>
                <ul className="space-y-2">
                  <li>✗ Aggressive toward people or dogs</li>
                  <li>✗ Fearful or extremely shy</li>
                  <li>✗ In heat (females)</li>
                  <li>✗ Recovering from illness or surgery</li>
                  <li>✗ Under 4 months old (incomplete vaccines)</li>
                  <li>✗ No recall or obedience training</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What to Bring</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pack these essentials for your first dog park visit:
            </p>
            <ul className="space-y-3 mb-8">
              <li><strong>Water and Bowl</strong> - Collapsible bowl and at least 32 oz of fresh water</li>
              <li><strong>Leash</strong> - Required until inside the off-leash area</li>
              <li><strong>Waste Bags</strong> - Even if the park provides them, bring extras</li>
              <li><strong>Treats</strong> - For recall training and positive reinforcement</li>
              <li><strong>Towel</strong> - To wipe muddy paws or dry off after swimming</li>
              <li><strong>First Aid Kit</strong> - Basic supplies for minor injuries</li>
              <li><strong>Phone</strong> - Keep emergency vet numbers saved</li>
              <li><strong>Paw Protection</strong> - Balm or booties for hot pavement</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">What NOT to Bring</h3>
              <ul className="space-y-2">
                <li>• Food or treats that cause resource guarding</li>
                <li>• Your dog&apos;s favorite toy (can trigger jealousy)</li>
                <li>• Aggressive or reactive dogs</li>
                <li>• Children under 8 without close supervision</li>
                <li>• Glass containers or dangerous objects</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Choosing the Right Park for Your First Visit</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Not all dog parks are created equal. For your first time, choose a park that matches your dog&apos;s size and energy:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">For Small Dogs (Under 25 lbs)</h3>
                <p className="text-gray-700">Look for parks with separate small dog areas like West Austin Dog Park or Emma Long Metropolitan Park. This prevents accidental injuries from larger dogs.</p>
                <Link href="/parks/west-austin-dog-park" className="text-primary-600 font-semibold hover:underline">→ View Small Dog Parks</Link>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">For Water-Loving Dogs</h3>
                <p className="text-gray-700">Start at Red Bud Isle or Auditorium Shores where your dog can swim and cool off. Water play is excellent for nervous dogs.</p>
                <Link href="/parks/red-bud-isle" className="text-primary-600 font-semibold hover:underline">→ View Lake Parks</Link>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">For High-Energy Dogs</h3>
                <p className="text-gray-700">Visit Zilker Metropolitan Park or Walnut Creek where there&apos;s plenty of space to run and play fetch.</p>
                <Link href="/parks/zilker-metropolitan-park" className="text-primary-600 font-semibold hover:underline">→ View Large Parks</Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The First 10 Minutes: Step by Step</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your first 10 minutes set the tone for the entire visit. Follow this proven approach:
            </p>
            
            <ol className="space-y-6 mb-8 list-decimal list-inside">
              <li className="text-gray-700">
                <strong>Arrive During Off-Peak Hours</strong> - Visit on a weekday morning (7-9 AM) or early evening (5-6 PM) when the park is less crowded.
              </li>
              <li className="text-gray-700">
                <strong>Observe Through the Fence (5 minutes)</strong> - Watch how dogs interact. Look for play styles, energy levels, and owner attentiveness.
              </li>
              <li className="text-gray-700">
                <strong>Use the Double-Gate Properly</strong> - Enter the first gate, close it completely, remove your dog&apos;s leash, then open the second gate.
              </li>
              <li className="text-gray-700">
                <strong>Stay Near the Entrance (5 minutes)</strong> - Don&apos;t venture far. Let your dog acclimate to the sights, sounds, and smells.
              </li>
              <li className="text-gray-700">
                <strong>Allow Greetings But Don&apos;t Force Them</strong> - Let dogs approach naturally. If your dog seems overwhelmed, create space by walking away.
              </li>
              <li className="text-gray-700">
                <strong>Keep Your Eyes On Your Dog</strong> - Put your phone away. Constant supervision is critical for the first visit.
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Reading the Room</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pay attention to these signs that indicate a good (or bad) dog park environment:
            </p>

            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">Green Flags - Good Environment</h3>
              <ul className="space-y-2">
                <li>• Owners actively watching and engaging with their dogs</li>
                <li>• Dogs taking breaks from play to drink water</li>
                <li>• Balanced mix of play styles and energy levels</li>
                <li>• Owners cleaning up after their dogs</li>
                <li>• Dogs respecting space when others want to be alone</li>
                <li>• Calm, friendly atmosphere</li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4">Red Flags - Consider Leaving</h3>
              <ul className="space-y-2">
                <li>• Owners on phones, not watching their dogs</li>
                <li>• Multiple fights or tense confrontations</li>
                <li>• One dog being bullied or chased relentlessly</li>
                <li>• Uncleaned waste piles</li>
                <li>• Aggressive dogs with owners who don&apos;t intervene</li>
                <li>• Chaos and overstimulation</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Your First Visit Checklist</h2>
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span>Confirmed vaccinations are current</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span>Packed water, bowl, leash, waste bags, and treats</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span>Chose off-peak time for less crowded visit</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span>Saved emergency vet numbers in phone</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span>Read park rules and regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span>Planned to stay for only 20-30 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span>Reviewed dog body language warning signs</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Common First-Timer Mistakes</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Avoid these common errors that new dog park visitors make:
            </p>
            <ul className="space-y-4 mb-8">
              <li>
                <strong className="text-red-600">Staying Too Long:</strong> First visits should be 20-30 minutes max. Your dog will be mentally exhausted even if they seem energetic.
              </li>
              <li>
                <strong className="text-red-600">Not Intervening Fast Enough:</strong> If your dog is being bullied or is bullying others, step in immediately. Don&apos;t wait for it to &quot;work itself out.&quot;
              </li>
              <li>
                <strong className="text-red-600">Bringing Toys or Food:</strong> These trigger resource guarding and fights. Leave them at home for the first few visits.
              </li>
              <li>
                <strong className="text-red-600">Assuming All Dogs Are Friendly:</strong> Not all dogs at the park are well-socialized. Stay vigilant and trust your instincts.
              </li>
              <li>
                <strong className="text-red-600">Using Your Phone:</strong> Your attention should be 100% on your dog during the first visit. Put your phone away.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">After Your First Visit</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Once you leave the park, here&apos;s what to do:
            </p>
            <ul className="space-y-3 mb-8">
              <li><strong>Check for Injuries:</strong> Inspect your dog for cuts, scratches, or sore spots</li>
              <li><strong>Tick Check:</strong> Carefully examine for ticks, especially between toes and around ears</li>
              <li><strong>Hydrate:</strong> Offer fresh water at home</li>
              <li><strong>Monitor Behavior:</strong> Watch for signs of soreness, limping, or unusual behavior over the next 24 hours</li>
              <li><strong>Reflect:</strong> Did your dog enjoy it? Were they stressed? Use this to plan your next visit</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Building Up to Regular Visits</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Don&apos;t rush into daily dog park visits. Build gradually:
            </p>
            <ul className="space-y-3 mb-8">
              <li><strong>Week 1:</strong> One 20-30 minute visit during off-peak hours</li>
              <li><strong>Week 2:</strong> Two visits, same duration, different times of day</li>
              <li><strong>Week 3:</strong> Experiment with slightly busier times (still not peak)</li>
              <li><strong>Week 4+:</strong> Assess your dog&apos;s comfort level and adjust frequency accordingly</li>
            </ul>

            <div className="bg-primary-50 border-2 border-primary-300 rounded-lg p-6 mt-12">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Final Advice</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every dog is different. Some take to dog parks immediately, while others need months of gradual exposure. 
                Don&apos;t compare your dog to others, and never force the experience if your dog is showing signs of stress.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It&apos;s perfectly okay if dog parks aren&apos;t right for your dog. There are plenty of other ways to socialize 
                and exercise your dog in Austin, including hiking trails, doggy daycare, and structured playgroups.
              </p>
            </div>
          </div>
        </div>

        {/* Great Parks for First-Timers */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Great Parks for First-Timers</h2>
          <p className="text-gray-600 mb-6">These parks are welcoming, well-maintained, and easy to navigate on a first visit.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Link href="/parks/norwood-estate-dog-park" className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <span className="text-2xl">🐕</span>
              <div>
                <div className="font-semibold text-gray-900">Norwood Estate Dog Park</div>
                <div className="text-sm text-gray-600">Fenced, well-maintained, separate areas for large and small dogs.</div>
              </div>
            </Link>
            <Link href="/parks/auditorium-shores-off-leash-area" className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <span className="text-2xl">🌊</span>
              <div>
                <div className="font-semibold text-gray-900">Auditorium Shores</div>
                <div className="text-sm text-gray-600">Scenic Lady Bird Lake views, popular with locals, open and spacious.</div>
              </div>
            </Link>
            <Link href="/parks/red-bud-isle" className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <span className="text-2xl">🌿</span>
              <div>
                <div className="font-semibold text-gray-900">Red Bud Isle</div>
                <div className="text-sm text-gray-600">Off-leash island park with water access. A true Austin dog park classic.</div>
              </div>
            </Link>
            <Link href="/parks/bartholomew-district-park" className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
              <span className="text-2xl">🏞️</span>
              <div>
                <div className="font-semibold text-gray-900">Bartholomew District Park</div>
                <div className="text-sm text-gray-600">Large park with dedicated off-leash area and good amenities.</div>
              </div>
            </Link>
          </div>
          <Link href="/" className="text-primary-600 font-semibold hover:underline text-sm">View all 17 Austin dog parks →</Link>
        </div>

        {/* Related Guides */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/guides/dog-park-safety" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Safety Guide</span>
            </Link>
            <Link href="/guides/dog-park-etiquette" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Etiquette Guide</span>
            </Link>
            <Link href="/guides/training-and-behavior" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Training Guide</span>
            </Link>
            <Link href="/" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Browse All Parks</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
