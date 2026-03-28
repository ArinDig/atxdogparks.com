import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaShieldAlt, FaExclamationTriangle, FaFirstAid, FaCheckCircle, FaSun, FaDog } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Dog Park Safety Guide | Essential Tips for Austin Dog Owners',
  description: 'Complete safety guide for Austin dog parks covering emergency preparedness, injury prevention, warning signs, first aid, and how to handle dangerous situations.',
  alternates: {
    canonical: 'https://atxdogparks.com/guides/dog-park-safety',
  },
}

export default function DogParkSafetyGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <FaShieldAlt className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">Dog Park Safety Guide</h1>
          </div>
          <p className="text-xl text-primary-100">
            Everything you need to know to keep your dog safe at Austin dog parks
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <Image
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&q=80"
            alt="Dog playing safely at park"
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg mb-8"
            priority
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FaExclamationTriangle className="text-yellow-500" />
              Before You Enter the Park
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Safety starts before you even open the gate. Here are the critical checks every responsible dog owner should perform:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Vaccinations Current:</strong> Ensure your dog is up-to-date on rabies, distemper, parvovirus, and bordetella (kennel cough) vaccines.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Observe Before Entering:</strong> Spend 2-3 minutes watching the park dynamics through the fence. Look for signs of aggressive play, overwhelmed dogs, or inattentive owners.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Check Your Dog&apos;s Mood:</strong> If your dog seems anxious, overly excited, or unwell, postpone the visit.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Remove Valuables:</strong> Take off any expensive collars, bandanas, or accessories that could get damaged or cause choking hazards.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Double-Gate Entry:</strong> Always use the double-gate system properly - close the first gate completely before opening the second.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Recognizing Warning Signs</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Learn to read dog body language to prevent incidents before they escalate:
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4">Danger Signs - Leave Immediately</h3>
              <ul className="space-y-2">
                <li>• Stiff body posture with raised hackles</li>
                <li>• Direct, prolonged staring between dogs</li>
                <li>• Growling without playful context</li>
                <li>• Mounting behavior that escalates despite correction</li>
                <li>• Pack mentality forming (multiple dogs targeting one)</li>
                <li>• Your dog hiding behind you or trying to leave</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">Caution Signs - Monitor Closely</h3>
              <ul className="space-y-2">
                <li>• Overly rough play that doesn&apos;t have breaks</li>
                <li>• One dog not respecting another&apos;s space</li>
                <li>• Dogs competing over toys or attention</li>
                <li>• Excessive barking or whining</li>
                <li>• Your dog drinking excessively or panting heavily</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 flex items-center gap-3">
              <FaSun className="text-yellow-500" />
              Austin Heat Safety (Critical!)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Austin&apos;s summer heat is dangerous for dogs. Heat exhaustion can happen quickly and become life-threatening.
            </p>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-orange-900 mb-4">Heat Exhaustion Symptoms</h3>
              <ul className="space-y-2 mb-4">
                <li>• Excessive panting and drooling</li>
                <li>• Bright red or purple tongue and gums</li>
                <li>• Lethargy or disorientation</li>
                <li>• Vomiting or diarrhea</li>
                <li>• Collapsing or inability to stand</li>
              </ul>
              <p className="text-orange-900 font-semibold">
                If you see these signs: Move to shade immediately, offer small amounts of cool (not cold) water, wet your dog&apos;s paws and belly, and seek emergency vet care.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Summer Safety Rules</h3>
              <ul className="space-y-2">
                <li>• <strong>Best Times:</strong> Visit before 9 AM or after 7 PM (May-September)</li>
                <li>• <strong>Limit Playtime:</strong> 20-30 minutes maximum in temperatures above 85°F</li>
                <li>• <strong>Bring Plenty of Water:</strong> At least 16-32 oz per dog</li>
                <li>• <strong>Test the Ground:</strong> If the pavement is too hot for your hand (7 seconds), it&apos;s too hot for paws</li>
                <li>• <strong>Seek Shade:</strong> Take frequent breaks in shaded areas</li>
                <li>• <strong>Watch for Signs:</strong> Monitor your dog constantly for overheating symptoms</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 flex items-center gap-3">
              <FaFirstAid className="text-red-600" />
              First Aid Essentials
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Always bring a basic first aid kit to the dog park. Here&apos;s what to include:
            </p>
            <ul className="space-y-3 mb-8">
              <li><strong>Gauze pads and bandages</strong> - For cuts and scrapes</li>
              <li><strong>Antiseptic wipes</strong> - Clean wounds before bandaging</li>
              <li><strong>Tweezers</strong> - Remove splinters, thorns, or ticks</li>
              <li><strong>Styptic powder</strong> - Stop bleeding from nail injuries</li>
              <li><strong>Benadryl</strong> - For allergic reactions (consult vet for dosage)</li>
              <li><strong>Emergency vet contact</strong> - Keep the number saved in your phone</li>
              <li><strong>Towel or blanket</strong> - For transporting injured dogs</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Common Injuries & How to Handle Them</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Cuts and Scrapes</h3>
                <p className="text-gray-700">Clean with antiseptic, apply pressure to stop bleeding, and bandage if needed. Seek vet care for deep cuts requiring stitches.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Torn or Broken Nails</h3>
                <p className="text-gray-700">Apply styptic powder to stop bleeding. If the nail is hanging, do not pull it - seek vet care.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Eye Injuries</h3>
                <p className="text-gray-700">Rinse with clean water or saline solution. Cover with a damp cloth and seek immediate vet care. Never let your dog paw at their eye.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bite Wounds</h3>
                <p className="text-gray-700">Even small punctures can be serious. Clean thoroughly, document the other dog&apos;s vaccination status, and visit the vet within 24 hours.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Limping or Lameness</h3>
                <p className="text-gray-700">Stop play immediately. Check paws for foreign objects, cuts, or burns. If limping persists for more than 10 minutes, leave the park and rest.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Handling Dog Fights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Despite best precautions, fights can happen. Here&apos;s how to safely intervene:
            </p>

            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4">DO NOT:</h3>
              <ul className="space-y-2">
                <li>• Grab collars or reach between fighting dogs - you will get bitten</li>
                <li>• Scream or panic - this escalates the situation</li>
                <li>• Hit or kick the dogs - this increases aggression</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-green-900 mb-4">DO:</h3>
              <ul className="space-y-2">
                <li>• Use the wheelbarrow method: Two people each grab the back legs of one dog and walk backward to separate them</li>
                <li>• Make loud noises (air horn, clapping) to startle and break focus</li>
                <li>• Spray water if available to distract the dogs</li>
                <li>• Once separated, create a physical barrier (person, object) to prevent re-engagement</li>
                <li>• Exchange contact info with the other owner and document injuries</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Water Safety at Lake Parks</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Many Austin dog parks like Red Bud Isle and Auditorium Shores offer lake access. Water adds unique risks:
            </p>
            <ul className="space-y-3 mb-8">
              <li><strong>Not all dogs can swim</strong> - Test your dog&apos;s swimming ability in shallow water first</li>
              <li><strong>Blue-green algae</strong> - Toxic algae blooms occur in Texas lakes. Check Austin Water quality reports before visiting</li>
              <li><strong>Current awareness</strong> - Lady Bird Lake has currents. Don&apos;t let your dog swim too far from shore</li>
              <li><strong>Water intoxication</strong> - Limit how much lake water your dog drinks. Bring fresh water</li>
              <li><strong>Ear infections</strong> - Dry your dog&apos;s ears after swimming to prevent infections</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Parasites and Diseases</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dog parks are social spaces where diseases can spread. Protect your dog with:
            </p>
            <ul className="space-y-3 mb-8">
              <li><strong>Year-round heartworm prevention</strong> - Mosquitoes are active 10+ months in Austin</li>
              <li><strong>Flea and tick medication</strong> - Essential for all Austin dogs</li>
              <li><strong>Kennel cough vaccine</strong> - Highly contagious in dog parks</li>
              <li><strong>Monthly parasite checks</strong> - Inspect for ticks after every park visit</li>
              <li><strong>Avoid puddles and standing water</strong> - Can harbor leptospirosis and giardia</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Emergency Vet Resources</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Save these numbers in your phone before visiting dog parks:
            </p>
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <ul className="space-y-3">
                <li><strong>Austin Emergency Animal Clinic:</strong> (512) 343-2837 (After hours)</li>
                <li><strong>Austin Veterinary Emergency & Specialty Center:</strong> (512) 343-2837</li>
                <li><strong>ASPCA Poison Control:</strong> (888) 426-4435</li>
                <li><strong>City of Austin Animal Services:</strong> (512) 978-0500</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">When to Leave the Park</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Know when to call it a day. Leave immediately if:
            </p>
            <ul className="space-y-3 mb-8">
              <li>• Your dog shows signs of fear, stress, or aggression</li>
              <li>• Another dog is consistently bothering or mounting your dog</li>
              <li>• Your dog is limping or showing signs of injury</li>
              <li>• The park becomes overcrowded or chaotic</li>
              <li>• You see signs of heat exhaustion (excessive panting, drooling, lethargy)</li>
              <li>• Aggressive dogs arrive with inattentive owners</li>
              <li>• Your dog has been playing hard for 30+ minutes in hot weather</li>
            </ul>

            <div className="bg-primary-50 border-2 border-primary-300 rounded-lg p-6 mt-12">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Remember: Prevention Is Everything</h3>
              <p className="text-gray-700 leading-relaxed">
                The best safety strategy is prevention. Stay alert, watch your dog constantly, and trust your instincts. 
                If something feels off, it probably is. It&apos;s always better to leave early and come back another day 
                than to risk an injury or traumatic incident.
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
            <Link href="/guides/training-and-behavior" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaDog className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Training & Behavior</span>
            </Link>
            <Link href="/guides/seasonal-tips" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaSun className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Seasonal Tips</span>
            </Link>
            <Link href="/gear" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaFirstAid className="text-2xl text-primary-600" />
              <span className="font-semibold text-gray-900">Essential Gear</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
