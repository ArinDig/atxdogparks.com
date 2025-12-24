import { Metadata } from 'next'
import Link from 'next/link'
import { FaQuestionCircle, FaDog, FaMapMarkedAlt, FaClock, FaShieldAlt, FaPaw, FaThermometerHalf } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions About Austin Dog Parks | ATX Dog Parks',
  description: 'Get answers to common questions about visiting Austin dog parks, including rules, safety tips, best times to visit, what to bring, and more.',
  alternates: {
    canonical: 'https://atxdogparks.com/faq',
  },
  openGraph: {
    title: 'FAQ - Austin Dog Parks | ATX Dog Parks',
    description: 'Get answers to common questions about visiting Austin dog parks, including rules, safety tips, best times to visit, and more.',
    type: 'website',
    url: 'https://atxdogparks.com/faq',
  },
}

interface FAQItem {
  question: string
  answer: string
  category: string
  icon: any
}

const faqs: FAQItem[] = [
  // Getting Started
  {
    category: "Getting Started",
    icon: FaDog,
    question: "Is my dog ready for dog park visits?",
    answer: "Your dog should have reliable recall (comes when called), current vaccinations, basic socialization skills, and be comfortable around other dogs. Dogs should be at least 4 months old with complete vaccinations. If your dog shows aggression, extreme fear, or ignores all commands, they may need more training before visiting public dog parks."
  },
  {
    category: "Getting Started",
    icon: FaDog,
    question: "What vaccinations does my dog need?",
    answer: "Dogs should be current on rabies, distemper, parvovirus, and bordetella (kennel cough) vaccines before visiting dog parks. Consult your veterinarian about your dog's vaccination status and any additional recommendations based on local disease prevalence."
  },
  {
    category: "Getting Started",
    icon: FaDog,
    question: "Should I bring my puppy to dog parks?",
    answer: "Puppies under 4 months old should not visit public dog parks until they complete their vaccination series. Even after vaccinations, young puppies may find busy parks overwhelming. Consider puppy socialization classes or controlled playdates with vaccinated dogs as safer alternatives until your puppy is older and more confident."
  },
  
  // Park Rules & Etiquette
  {
    category: "Park Rules & Etiquette",
    icon: FaShieldAlt,
    question: "What are the basic rules at Austin dog parks?",
    answer: "Most Austin dog parks require: dogs must be leashed until inside the designated off-leash area, owners must clean up after their dogs, aggressive dogs must be removed immediately, dogs must be licensed and vaccinated, and owners must actively supervise their dogs at all times. Specific parks may have additional rules posted at entrances."
  },
  {
    category: "Park Rules & Etiquette",
    icon: FaShieldAlt,
    question: "Can I bring food or treats to dog parks?",
    answer: "Generally, food and treats should be avoided at dog parks as they can trigger resource guarding and fights. If you need treats for training during quiet times, use them discreetly and put them away if other dogs approach. Never scatter food or share treats with dogs you don't know."
  },
  {
    category: "Park Rules & Etiquette",
    icon: FaShieldAlt,
    question: "Should I bring toys to the dog park?",
    answer: "Bringing toys to busy dog parks is discouraged as they can cause conflicts over resources. During empty or nearly empty times, toys may be acceptable, but remove them immediately if other dogs arrive or tensions develop. Public tennis balls often appear at parks and can be used cautiously with awareness of possession issues."
  },
  {
    category: "Park Rules & Etiquette",
    icon: FaShieldAlt,
    question: "What is proper gate etiquette?",
    answer: "Use the double-gate system properly: enter the first gate, close it completely, unleash your dog, then open the second gate. Keep your dog from rushing at incoming dogs. Move away from the gate area quickly after entering so you don't block others or create crowding that can lead to conflicts."
  },
  
  // Timing & Conditions
  {
    category: "Timing & Conditions",
    icon: FaClock,
    question: "When are the best times to visit Austin dog parks?",
    answer: "Early weekday mornings (7-9 AM) typically offer calmer crowds with experienced owners and well-socialized dogs. Weekend mornings before 9 AM are also good. Avoid weekend afternoons (10 AM-4 PM) at popular parks if your dog prefers smaller groups. Summer visits should be early morning or evening to avoid dangerous heat."
  },
  {
    category: "Timing & Conditions",
    icon: FaClock,
    question: "How long should I stay at the dog park?",
    answer: "Visit length varies by individual dog. Watch for signs of tiredness, stress, or overstimulation including excessive panting, seeking isolated spots, or reduced responsiveness to commands. Most dogs benefit from 30-60 minutes, but some may need to leave after 20 minutes while others can happily play longer. Quality matters more than quantity."
  },
  {
    category: "Timing & Conditions",
    icon: FaThermometerHalf,
    question: "Is it safe to visit dog parks in Texas summer heat?",
    answer: "Summer visits require extra precautions. Go early morning (before 10 AM) or evening (after 6 PM). Bring extra water, watch for signs of overheating (excessive panting, drooling, lethargy), check ground temperature with your hand (if it's too hot for your hand, it's too hot for paws), and consider cooling vests for your dog. Avoid midday visits from May through September."
  },
  {
    category: "Timing & Conditions",
    icon: FaThermometerHalf,
    question: "Should I go to dog parks when it's raining?",
    answer: "Light rain doesn't necessarily prevent park visits if your dog enjoys water, but avoid parks after heavy rains until standing water drains and ground dries. Muddy conditions can make play difficult and messy. After storms, check for debris and damage before allowing off-leash play. Some parks may close temporarily after severe weather."
  },
  
  // Specific Parks
  {
    category: "Specific Parks",
    icon: FaMapMarkedAlt,
    question: "Which Austin dog park is best for swimming?",
    answer: "Red Bud Isle offers the best swimming access with multiple entry points to Lady Bird Lake and three-sided water access. Auditorium Shores also provides lake access, and West Austin Park has water features. Always supervise swimming dogs closely and be aware of water quality warnings that occasionally occur after heavy rains."
  },
  {
    category: "Specific Parks",
    icon: FaMapMarkedAlt,
    question: "Which park is best for small dogs?",
    answer: "Many Austin parks have separate small dog areas including Norwood Estate Dog Park and some sections of larger parks. However, parks like Mary Moore Searight and Emma Long tend to attract calmer crowds suitable for small dogs even in mixed areas. Visit during quiet times and always supervise small dogs closely around larger breeds."
  },
  {
    category: "Specific Parks",
    icon: FaMapMarkedAlt,
    question: "What is the biggest dog park in Austin?",
    answer: "Walnut Creek Metropolitan Park offers over 300 acres with extensive off-leash areas and trails, making it Austin's largest dog park space. The size provides room for exploration and rarely feels crowded even during busy times. It's ideal for high-energy dogs who need serious exercise."
  },
  {
    category: "Specific Parks",
    icon: FaMapMarkedAlt,
    question: "Are there any dog parks with skyline views?",
    answer: "Auditorium Shores Off-Leash Area provides stunning downtown Austin skyline views, particularly beautiful during golden hour before sunset. The location makes it popular for photos and offers a unique urban park experience with easy downtown access."
  },
  
  // Safety & Health
  {
    category: "Safety & Health",
    icon: FaShieldAlt,
    question: "What should I do if a fight breaks out?",
    answer: "Never reach into the middle of fighting dogs with your hands. Try loud noises (air horn, whistle), water from a hose or bottle, or if multiple people are present, simultaneously grab dogs' hind legs and pull them apart. After any incident, check your dog thoroughly for injuries including small puncture wounds that may not be immediately visible. Contact your vet if you have concerns."
  },
  {
    category: "Safety & Health",
    icon: FaShieldAlt,
    question: "How can I tell if play is too rough?",
    answer: "Healthy play includes role reversals (dogs take turns chasing), play bows, loose body language, frequent breaks, and both dogs appearing happy. Warning signs include one dog trying to escape, sustained pinning without release, continuous mounting, stiff bodies, and one-sided interactions. If uncertain, briefly interrupt and see if both dogs enthusiastically re-engage."
  },
  {
    category: "Safety & Health",
    icon: FaShieldAlt,
    question: "What are signs my dog is overheated?",
    answer: "Warning signs include excessive panting, drooling, bright red tongue and gums, lethargy, vomiting, diarrhea, stumbling, or collapse. If you suspect heat exhaustion, immediately move your dog to shade, offer water in small amounts, wet them with cool (not cold) water, and contact your veterinarian. Prevention through early morning visits and plenty of water is crucial in Texas summers."
  },
  {
    category: "Safety & Health",
    icon: FaPaw,
    question: "Can my dog get sick from dog parks?",
    answer: "Dog parks expose dogs to potential diseases including kennel cough, parasites, and occasionally more serious illnesses. Keeping vaccinations current, using monthly parasite prevention, and avoiding parks when your dog is ill or has compromised immunity reduces risks. Parks with good drainage and maintained surfaces pose lower disease risks."
  },
  
  // What to Bring
  {
    category: "What to Bring",
    icon: FaPaw,
    question: "What should I bring to dog parks?",
    answer: "Essential items include: fresh water and a bowl, waste bags (bring extra), your dog's leash for entry/exit, identification tags on your dog's collar, and a cell phone with emergency vet numbers. Optional items for Texas heat include towels, paw wax for hot surfaces, and cooling vests during summer months."
  },
  {
    category: "What to Bring",
    icon: FaPaw,
    question: "Do Austin dog parks provide water and waste bags?",
    answer: "Many parks have water fountains and waste bag dispensers, but these are frequently empty or non-functional. Always bring your own supplies rather than depending on park amenities. Bringing your own ensures you're prepared regardless of what the park provides that day."
  },
  
  // Fees & Access
  {
    category: "Fees & Access",
    icon: FaMapMarkedAlt,
    question: "Do Austin dog parks charge fees?",
    answer: "Most Austin public dog parks are free to use. Some private facilities or dog daycares may charge for access to their play areas. Public parks funded by Austin Parks and Recreation Department are free, though you may pay for parking at some locations."
  },
  {
    category: "Fees & Access",
    icon: FaMapMarkedAlt,
    question: "Do I need to register to use Austin dog parks?",
    answer: "Public dog parks do not require registration, but your dog must be licensed with the City of Austin (or your local municipality) and current on vaccinations. Some parks occasionally check for licensing and vaccination records, though routine enforcement varies by location."
  },
  {
    category: "Fees & Access",
    icon: FaClock,
    question: "What are dog park hours?",
    answer: "Most Austin dog parks are open from dawn to dusk, though specific hours vary by park. Some parks remain open 24 hours but have limited lighting for nighttime use. Check individual park information for specific hours, and be aware that parks may temporarily close for maintenance or after severe weather."
  },
  
  // Behavioral Issues
  {
    category: "Behavioral Issues",
    icon: FaDog,
    question: "My dog is shy or nervous at parks. What should I do?",
    answer: "Start with visits during very quiet times, begin by observing from outside the fence, and gradually work up to brief entries. Don't force interaction. Some dogs prefer small playgroups with familiar dogs rather than large public parks. Consider private playdates or quieter times at smaller parks. If anxiety persists, consult a professional trainer or veterinary behaviorist."
  },
  {
    category: "Behavioral Issues",
    icon: FaDog,
    question: "What if my dog won't come when called at the park?",
    answer: "If your dog doesn't have reliable recall, they're not ready for off-leash areas. Practice recall extensively in controlled environments before attempting dog parks. Use high-value treats, never repeat commands they ignore, and make coming to you the best choice. If recall fails consistently at parks, return to on-leash training areas until the skill strengthens."
  },
  {
    category: "Behavioral Issues",
    icon: FaDog,
    question: "Should I bring my reactive dog to dog parks?",
    answer: "Leash-reactive or dog-reactive dogs are generally not good candidates for off-leash dog parks without extensive behavior modification first. These dogs may do better with structured training classes, private playdates with known calm dogs, or working with a professional trainer. Using public parks as training grounds for reactive dogs is unfair to other park users and dangerous."
  },
]

const categories = Array.from(new Set(faqs.map(faq => faq.category)))

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <FaQuestionCircle className="text-5xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-center text-primary-100">
            Everything you need to know about visiting Austin dog parks
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        {categories.map((category) => {
          const categoryFaqs = faqs.filter(faq => faq.category === category)
          const Icon = categoryFaqs[0].icon
          
          return (
            <div key={category} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Icon className="text-3xl text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
              </div>
              
              <div className="space-y-6">
                {categoryFaqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-bold text-primary-600 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Can't find what you're looking for? Check out our comprehensive blog guides or get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Read Our Blog
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Helpful Resources
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/dog-park-safety-tips" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <FaShieldAlt className="text-3xl text-primary-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Safety Tips</h3>
            <p className="text-gray-600 text-sm">Essential safety guidelines for dog park visits</p>
          </Link>
          <Link href="/blog/best-off-leash-dog-parks-austin" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <FaMapMarkedAlt className="text-3xl text-primary-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Best Parks</h3>
            <p className="text-gray-600 text-sm">Discover the top dog parks in Austin</p>
          </Link>
          <Link href="/blog/dog-park-etiquette-guide" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <FaDog className="text-3xl text-primary-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Etiquette Guide</h3>
            <p className="text-gray-600 text-sm">Learn proper dog park etiquette and community standards</p>
          </Link>
        </div>
      </section>
    </main>
  )
}

