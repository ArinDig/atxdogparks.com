import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaDog, FaBrain } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Dog Park Training & Behavior Guide | Master Off-Leash Skills',
  description: 'Complete training guide for dog park success. Learn recall training, socialization techniques, handling aggression, and building positive behaviors.',
  alternates: {
    canonical: 'https://atxdogparks.com/guides/training-and-behavior',
  },
}

export default function TrainingAndBehavior() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <FaBrain className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">Training & Behavior Guide</h1>
          </div>
          <p className="text-xl text-primary-100">
            Build the skills your dog needs for safe, successful dog park visits
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <Image
            src="https://images.unsplash.com/photo-1554224311-beee415c201f?w=1200&q=80"
            alt="Dog training at park"
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg mb-8"
            priority
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Non-Negotiable: Reliable Recall</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your dog MUST come when called, even with distractions. This is the single most important safety skill for off-leash dog parks.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Building Bulletproof Recall (4-Week Training Plan)</h3>
            
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Week 1: Foundation at Home</h4>
                <ul className="space-y-2">
                  <li>• Practice 5-10 times per day in your home with zero distractions</li>
                  <li>• Use a unique recall word (&quot;Come,&quot; &quot;Here,&quot; or even your dog&apos;s name)</li>
                  <li>• Reward EVERY successful recall with high-value treats (chicken, cheese)</li>
                  <li>• Start from 5 feet away, gradually increase distance to 20 feet</li>
                  <li>• Never call your dog for something negative (bath, nail trim)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Week 2: Backyard Distractions</h4>
                <ul className="space-y-2">
                  <li>• Practice with mild distractions (toys, family members walking by)</li>
                  <li>• Add a 30-foot long lead for safety</li>
                  <li>• Practice 3-5 times per day</li>
                  <li>• Introduce the &quot;emergency recall&quot; - a special word/sound for serious situations</li>
                  <li>• Continue rewarding every time</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Week 3: Public Spaces (Not Dog Parks Yet)</h4>
                <ul className="space-y-2">
                  <li>• Practice at regular parks, parking lots, quiet trails</li>
                  <li>• Keep the long lead attached for safety</li>
                  <li>• Add real-world distractions (people, squirrels, other dogs on leash)</li>
                  <li>• Practice 2-3 times per day</li>
                  <li>• Gradually increase distance to 50+ feet</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Week 4: Controlled Dog Park Intro</h4>
                <ul className="space-y-2">
                  <li>• Visit during off-peak hours with only 2-3 dogs present</li>
                  <li>• Practice recall every 5 minutes</li>
                  <li>• Keep visits short (15-20 minutes)</li>
                  <li>• Always reward successful recalls, even if it takes multiple calls</li>
                  <li>• Leave immediately if your dog stops responding</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Socialization: The Right Way</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dog parks are NOT the place to socialize an unsocialized dog. Proper socialization happens in controlled environments first:
            </p>
            <ul className="space-y-4 mb-8">
              <li>
                <strong>Start Young (8-16 Weeks):</strong> Puppy socialization classes with vaccinated puppies are ideal
              </li>
              <li>
                <strong>One-on-One Playdates:</strong> Arrange controlled meetups with friendly, vaccinated dogs before visiting dog parks
              </li>
              <li>
                <strong>Gradual Exposure:</strong> Let your dog observe dog parks from outside the fence several times before entering
              </li>
              <li>
                <strong>Positive Associations:</strong> Pair new dog encounters with treats and praise
              </li>
              <li>
                <strong>Never Flood:</strong> Throwing an unsocialized dog into a busy dog park can cause lifelong fear and aggression
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Reading Dog Body Language</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding body language prevents problems before they start:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-900 mb-4">Positive Play Signals</h3>
                <ul className="space-y-2">
                  <li>• Play bow (front down, rear up)</li>
                  <li>• Loose, wiggly body</li>
                  <li>• Open mouth, relaxed jaw</li>
                  <li>• Taking turns chasing/being chased</li>
                  <li>• Natural breaks in play</li>
                  <li>• Soft, bouncy movements</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-900 mb-4">Stress/Aggression Signals</h3>
                <ul className="space-y-2">
                  <li>• Stiff, rigid body</li>
                  <li>• Raised hackles (hair on back)</li>
                  <li>• Whale eye (whites of eyes showing)</li>
                  <li>• Tucked tail or tail straight up</li>
                  <li>• Prolonged staring</li>
                  <li>• Growling without play context</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Handling Aggression</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If your dog shows aggression at the dog park, address it immediately:
            </p>
            <ul className="space-y-4 mb-8">
              <li>
                <strong>Leave Immediately:</strong> Don&apos;t try to &quot;work through it&quot; at the park
              </li>
              <li>
                <strong>Consult a Professional:</strong> Work with a certified dog behaviorist or trainer who specializes in aggression
              </li>
              <li>
                <strong>Identify Triggers:</strong> Is it certain breeds, sizes, play styles, or situations?
              </li>
              <li>
                <strong>Consider Alternatives:</strong> Structured playgroups, hiking, or doggy daycare may be better fits
              </li>
              <li>
                <strong>Don&apos;t Punish:</strong> Aggression is usually fear-based. Punishment makes it worse
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Training Games for the Dog Park</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Keep training fun and engaging with these dog park exercises:
            </p>
            <ul className="space-y-4 mb-8">
              <li>
                <strong>Random Recalls:</strong> Call your dog every 5-10 minutes for a treat, then release them back to play. This teaches that coming when called doesn&apos;t mean fun ends.
              </li>
              <li>
                <strong>Touch and Go:</strong> Practice having your dog return to you, touch your hand with their nose, then release. Builds check-in behavior.
              </li>
              <li>
                <strong>Parallel Walking:</strong> Walk around the park with your dog following nearby. This reinforces your role as the leader.
              </li>
              <li>
                <strong>Duration Sits:</strong> Ask your dog to sit for 10-15 seconds while play happens around them. Builds impulse control.
              </li>
            </ul>

            <div className="bg-primary-50 border-2 border-primary-300 rounded-lg p-6 mt-12">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Training Never Stops</h3>
              <p className="text-gray-700 leading-relaxed">
                Even experienced dog park dogs need regular training reinforcement. Practice recall at home weekly, 
                maintain boundaries, and never take good behavior for granted. The most enjoyable dog park visits 
                come from dogs who are well-trained, confident, and responsive to their owners.
              </p>
            </div>
          </div>
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
            <Link href="/guides/dog-park-etiquette" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Etiquette Guide</span>
            </Link>
            <Link href="/gear" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Essential Gear</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
