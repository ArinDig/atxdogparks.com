import type { Metadata } from 'next'
import Image from 'next/image'
import { FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Essential Dog Park Gear & Supplies',
  description: 'Discover the best gear and supplies for visiting Austin dog parks. From water bottles to safety equipment, find everything you need for a great dog park experience.',
  alternates: {
    canonical: 'https://atxdogparks.com/gear',
  },
  openGraph: {
    title: 'Essential Dog Park Gear & Supplies',
    description: 'The best gear for visiting Austin dog parks',
    type: 'website',
    url: 'https://atxdogparks.com/gear',
  },
}

interface Product {
  id: string
  name: string
  description: string
  category: string
  amazonLink: string
  imageUrl: string
  imageAlt: string
  whyRecommended: string
}

const products: Product[] = [
  {
    id: 'collapsible-bowl',
    name: 'Kurgo Collapsible Dog Bowl',
    description: 'Portable, lightweight bowl perfect for dog park visits',
    category: 'Hydration',
    amazonLink: 'https://www.amazon.com/Kurgo-Collapsible-Portable-Silicone-Accessories/dp/B005QZ4YZQ?crid=ANOXH6QZ3O58&dib=eyJ2IjoiMSJ9.8vAuh4dWY5bNFcvyY9Sy59Gc9Fal92-4D3miJJR3TjUPgOZQ4IolDnQEAA80kkyUMKTRuuey3TcpTLdE_791oSd71ulx9Y-VniUneplDzTMVIkG14BMpkEkMvPOhXwg9qS_MYCKG7A5COM4e9GEGEcbTKzQqRpmYKNe-2fgwvdemnTw-SpflRse-KaimAqJuxGX8yE8koYE5ZNwPQ8P_3_L-psH--IVl44aIGG6FYXJ3XhiYHYeW_6wlEEHVVfeE2kaOjKikuv-W6eP10kedPBlM8_YqMAnrGM_fvOl5AE8.s_Hfu7rvM39Rt1kigtuWwCYQD6CAakRpA-t4f6FPRyU&dib_tag=se&keywords=Kurgo%2Bcollapsible%2Bdog%2Bbowl&qid=1763843031&sprefix=kurgo%2Bcollapsible%2Bdog%2Bbowl%2Caps%2C181&sr=8-1&th=1&linkCode=ll1&tag=adiaustin-20&linkId=67ab1b077ab972354453e50382a1676e&language=en_US&ref_=as_li_ss_tl',
    imageUrl: 'https://m.media-amazon.com/images/I/81P2qSqLw5L._AC_SL1500_.jpg',
    imageAlt: 'Kurgo Collapsible Dog Water Bowl',
    whyRecommended: 'Essential for keeping your dog hydrated at any Austin dog park, especially during hot Texas summers.'
  },
  {
    id: 'portable-water-bottle',
    name: 'Cibaabo Dog Water Bottle',
    description: 'All-in-one hydration solution for active dogs',
    category: 'Hydration',
    amazonLink: 'https://www.amazon.com/Cibaabo-Container-Accessories-Essentials-Necessities/dp/B0BZQZZP7Q?content-id=amzn1.sym.1faeb6eb-d2b9-4948-986d-7ba2a5388a58%3Aamzn1.sym.1faeb6eb-d2b9-4948-986d-7ba2a5388a58&crid=1S45SHHXV1V21&cv_ct_cx=dog%2Bwater%2Bbottle%2Bwith%2Bbowl&keywords=dog%2Bwater%2Bbottle%2Bwith%2Bbowl&pd_rd_i=B0BZQZZP7Q&pd_rd_r=320bb95f-ddb4-4f07-a830-75002afc7e7c&pd_rd_w=oFZR0&pd_rd_wg=a5c9z&pf_rd_p=1faeb6eb-d2b9-4948-986d-7ba2a5388a58&pf_rd_r=4YJPJDV2KH4C8Z6Q5FNM&qid=1763843225&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=dog%2Bwater%2Bbottle%2Bwith%2Bbowl%2Caps%2C346&sr=1-2-543a432c-671c-4a3a-a15e-c8d9b2229043-spons&aref=eHQqIexrgZ&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll1&tag=adiaustin-20&linkId=4f2356d388edf8cd75b3d91bb0957e65&language=en_US&ref_=as_li_ss_tl',
    imageUrl: 'https://m.media-amazon.com/images/I/71O6qY+SXPL._AC_SL1500_.jpg',
    imageAlt: 'Cibaabo Dog Water Bottle with Built-in Bowl',
    whyRecommended: 'Convenient one-handed operation makes it easy to give your dog water during play sessions.'
  },
  {
    id: 'waste-bag-dispenser',
    name: 'Earth Rated Poop Bag Dispenser',
    description: 'Never forget waste bags again with this handy clip-on dispenser',
    category: 'Cleanup',
    amazonLink: 'https://www.amazon.com/Earth-Rated-Odor-Blocking-Guaranteed-Performance/dp/B0FSG8TBWG?crid=3ORECPWCXNFNJ&dib=eyJ2IjoiMSJ9.FhPPTowwHfkSbeXU_r8ZygQ57Uwn4BOYIQbSAS3iC-hH5NAAFQ8ROt-vvHAlB4woDzSgJNiDnBi9R_7mCS8c-arqg2-jqGP7o_SzHD0xsGfIulApsnF8pnz7KXfuYI6uTSPjYBNjDNXQxllpb87ztHyw0cbJL5vj-pYFb9cu4q2n266lZbE7v2XySvwBN1oeoNgJh7QZrOEro8MCsBwiwlwaXnytcHvpsfivWBIFEvqacGEXwCYv60fRQccOEFpq8avNwESvWuwXPdeZN7IBXwr7KnCObrrN5TDVn9CRzOY.WT3pS_OiwdO47_eDNtpHA0rKU6VUYrAWVY0Yb1c5814&dib_tag=se&keywords=Earth%2BRated%2Bpoop%2Bbag%2Bdispenser&qid=1763843337&s=pet-supplies&sprefix=earth%2Brated%2Bpoop%2Bbag%2Bdispenser%2Cpets%2C192&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=adiaustin-20&linkId=fbacd8420741a32a3c8ae07ba823e864&language=en_US&ref_=as_li_ss_tl',
    imageUrl: 'https://m.media-amazon.com/images/I/71mNZmx55EL._AC_SL1500_.jpg',
    imageAlt: 'Earth Rated Dog Waste Bag Dispenser',
    whyRecommended: 'Attaches to any leash for easy access. Essential dog park etiquette!'
  },
  {
    id: 'first-aid-kit',
    name: 'Pet First Aid Kit',
    description: 'Comprehensive first aid supplies for minor injuries',
    category: 'Safety',
    amazonLink: 'https://www.amazon.com/Dog-First-Aid-Kit-Cat-Pet-Emergency/dp/B0B1W5R11Y?crid=1ARCGUUL48UHX&dib=eyJ2IjoiMSJ9.YdpbypPoNrJNbWo_PMlBdyTCWNS_JGjV2AjPjMpKwC34uAG_t3rlNVdAwV5mrJFEmiYcFdAH3Dj5i9RUe04obDmB8Ff2Rx3yyK_CmUrCQH1xnG8i6zEAVnu6yKFg5VdkJZCEBoYwRnwHDxgppvnJmy4oa1IPZjCOJJ9J9c6If-dOlWDIj2tWqKq8mtLqv7j7E9_WANV8vRYfgGh0TJLuMnG1oS_eYmNS_WsS2ck1c0sbNdynh4os5F33bjcsxBT4fvSO8ri9dITOOVf_FuTyyFvXEfjajdx1WS8A4JC1Vhc.rd0c_kzPQ7cVO31sYFsqN_Co80y_m_CVe-mhHYWDhRs&dib_tag=se&keywords=Pet%2BFirst%2BAid%2BKit&qid=1763843408&s=pet-supplies&sprefix=pet%2Bfirst%2Baid%2Bkit%2Cpets%2C128&sr=1-5&th=1&linkCode=ll1&tag=adiaustin-20&linkId=803f3c954f73a8d03fb531faff03208d&language=en_US&ref_=as_li_ss_tl',
    imageUrl: 'https://m.media-amazon.com/images/I/91VYOVDf61L._AC_SL1500_.jpg',
    imageAlt: 'Pet First Aid Kit for Dogs',
    whyRecommended: 'Be prepared for minor scrapes, cuts, or bee stings at the dog park.'
  },
  {
    id: 'high-vis-leash',
    name: 'Joytale Reflective Dog Leash',
    description: 'Strong, durable leash with reflective stitching for early morning or evening visits',
    category: 'Safety',
    amazonLink: 'https://www.amazon.com/Joytale-Reflective-Leashes-Walking-Training/dp/B08573BRLS?crid=31G6V0GYA9QH7&dib=eyJ2IjoiMSJ9.m8NLg8JMyZmhS-dwUnTP4OYrsh97hXMMj7HP92kOAXc3IlGXZJn-GiSUtwve5sKq0cwB4gkSHbVs9_nGC3SvVXLthmhBkK0FAB10t6PwPmoSmqPdIXSYAGkfA7YjAKf9ZNlbLLGn3SpxTUBWPDvtZ_vwGSH-KQWNjKHpZoNAPQt7kYhRYimew63R7bG6ab0k03eOIsJFrUriGhJnEViOTzlrncPUGqADkR1p8zpFK8XSRNJZ9TrXdqXoXs-Fkwh1e3o4kfvoaFB2H3plD_ghkE5HKImsWnVccginYVw0AGU.-AusFpmmeZRPjqogM1LyJokRVNiE2MO7q3lwuQWeDUI&dib_tag=se&keywords=reflective%2Bdog%2Bleash%2B6%2Bfoot&qid=1763843473&s=pet-supplies&sprefix=reflective%2Bdog%2Bleash%2B6%2Bfoot%2Cpets%2C126&sr=1-7&th=1&linkCode=ll1&tag=adiaustin-20&linkId=64f0d81a80695a66bb7781306be7a408&language=en_US&ref_=as_li_ss_tl',
    imageUrl: 'https://m.media-amazon.com/images/I/71aEqPuN1gL._AC_SL1500_.jpg',
    imageAlt: 'Joytale Reflective High-Visibility Dog Leash',
    whyRecommended: 'Perfect for early morning or evening dog park visits when visibility is low.'
  },
  {
    id: 'cooling-vest',
    name: 'SGODA Dog Cooling Vest',
    description: 'Evaporative cooling vest for hot Texas summers',
    category: 'Summer Gear',
    amazonLink: 'https://www.amazon.com/SGODA-Cooling-Harness-Cooler-X-Large/dp/B072LSJ6YX?crid=8U8V8HAG9HN9&dib=eyJ2IjoiMSJ9.-1uEfcygIVgpSbUDhKXePxqRpko9RgH8ZtNUW_EkFRCe2nvNUch2AgUOdrl5QGCkpEy4Uh4U-P_1UBJO8wT2pRQQmEdzzsTYSJtIpZTTAioNwlbNV27-xsuoCyp5DAqzyotfvzpx3M3w_CecHGcQKQJLNl6OwGF9sDS1I2qXMzMnj2_uzb4TUmljDao6heJe-2Y-AS4EDGZGeohynCRLmbkuA9a8rmYzQF7Mol2PmBjMNmd-DGFP7Vog3gWE1plnSna5MGyAcnEpMwx6JgZ2i22Y8Lkldj7kC9nIn2SF0KE.ZVPaHMt9QtX6uhujZ9VqRUek4GiIcyjVvw3YFH-1V1g&dib_tag=se&keywords=dog%2Bcooling%2Bvest&qid=1763843536&s=pet-supplies&sprefix=dog%2Bcooling%2Bvest%2Cpets%2C136&sr=1-10&th=1&linkCode=ll1&tag=adiaustin-20&linkId=b76bc2b6bf121105ece012e01baf1daa&language=en_US&ref_=as_li_ss_tl',
    imageUrl: 'https://m.media-amazon.com/images/I/71NvOTdAjuL._AC_SL1500_.jpg',
    imageAlt: 'SGODA Dog Cooling Vest for Summer',
    whyRecommended: 'Essential for Austin summers. Keeps your dog cool during outdoor play in 95°+ heat.'
  },
  {
    id: 'paw-protector',
    name: "Musher's Secret Paw Wax",
    description: 'Protects paws from hot pavement and rough terrain',
    category: 'Paw Care',
    amazonLink: 'https://www.amazon.com/Mushers-Secret-Pet-Protection-60-Gram/dp/B0002IJQDC?crid=2TU3DVYINGYFZ&dib=eyJ2IjoiMSJ9.vlKrsBY8kwCoXlPemXqqF4leHlIb70xB7_FraB2xTXvYdpOrFhszGMBVd36C6CauKD4uqyrWmTWAB2UF8pkBKmwlWadgUlHpXeKVvQo7zIP7kko_Xn2e1QYHaeH5YKoefdac-dgntlj74r2dbjkTjCY4GIAVM0IrXJscNihppZqMhiB3zB4rW7L6V3m-IASAv6MpoUb_C63EUKwPd18Pdyxj-rX9othNHxUxe-WEiv-CPUIVTkjrejdCh1DPHJ_rPEJDa5HCJPL5f1I1FmnU0K-Cwki3mLx4dmDvUsoTYjM.DbMmnmWvzisMVgZgemYhMOAwx3evU50gG83MungeHcw&dib_tag=se&keywords=Musher%27s%2BSecret%2Bpaw%2Bwax&qid=1763843591&s=pet-supplies&sprefix=musher%27s%2Bsecret%2Bpaw%2Bwax%2Cpets%2C162&sr=1-4&th=1&linkCode=ll1&tag=adiaustin-20&linkId=9b2fc838d8f8d5a29a716e4e01f1c033&language=en_US&ref_=as_li_ss_tl',
    imageUrl: 'https://m.media-amazon.com/images/I/61e4E1GigsL._AC_SL1500_.jpg',
    imageAlt: "Musher's Secret Paw Protection Wax",
    whyRecommended: 'Prevents burns from hot Austin pavement and protects against rough, rocky park surfaces.'
  },
  {
    id: 'dog-towel',
    name: 'Bone Dry Microfiber Dog Towel',
    description: 'Super absorbent towel for water-loving dogs',
    category: 'Cleanup',
    amazonLink: 'https://www.amazon.com/Bone-Dry-Microfiber-Embroidered-Ultra-Absorbent/dp/B00T7W30IG?crid=3RL54QAYAIT0H&dib=eyJ2IjoiMSJ9.tLXf-yjoe-9reVP02QH5yOtr95aipy-9P8aei4dnLIyvVXy4PZdLASurV0fU2-Mz6C9e_8ZRC4R1J9i0ufjrgKrRv62i0jLOPMv_bw8QbxEPPm1PZyyyPjnhJ2mY9ZFKvkJJOHh3UQiM5W0gpLfFpJ8QR598dkHX5_IWOimETlfOJEKmYaXLEmQRHxyT95poM_182zPHYalP7v6YWeFYFStKw1F9QKUS1AgD2pL1PwATeFM4v62bcRPWlMouO8WdX43YYf69ep_pPuMsdLqoBPW_t8DddFybI8zVbpY8QqY.m6hC5_mZvukz2hHu0_KZMjKtOKapm8-Rt1wO7mkhBdQ&dib_tag=se&keywords=microfiber%2Bdog%2Btowel%2Bquick%2Bdry&qid=1763843651&s=pet-supplies&sprefix=microfiber%2Bdog%2Btowel%2Bquick%2Bdry%2Cpets%2C158&sr=1-4&th=1&linkCode=ll1&tag=adiaustin-20&linkId=12587f183a35b9e7637418d54e8d13dc&language=en_US&ref_=as_li_ss_tl',
    imageUrl: 'https://m.media-amazon.com/images/I/915rS8W7mDL._AC_SL1500_.jpg',
    imageAlt: 'Bone Dry Quick-Dry Microfiber Dog Towel',
    whyRecommended: 'Perfect for parks with water access like Red Bud Isle or Zilker. Dries quickly and fits in any car.'
  },
  {
    id: 'training-treats',
    name: "Zuke's Mini Naturals Training Treats",
    description: 'Small, low-calorie treats perfect for recall training',
    category: 'Training',
    amazonLink: 'https://www.amazon.com/ZukeS-Naturals-Chicken-Recipe-Treats/dp/B000H0ZJHW?crid=1WFYVHSZTAVU9&dib=eyJ2IjoiMSJ9.ZW75bNUHgRwK0xONOvAjpDS8qruO2VeIoKwchHuBTqVpaCfSud-Kib689AQsj16IDJEcJtbKicy2UXl-BiB5CwAP3zG7nVNzGcKtvEI4Hgwh6J-RDvU61GyetO_1HZMRTVCscZmThPRFTgfeEAvvqVaxRG05Lgd3xEkewzilti49Ho_a2eOYvWOmMbwOZHHVN6em4CXMXuNiuT_H-S2tQ8otmC6OKBWl-KyUXb26kvegI2MvUoPBhQ1DqMXILkekR0vXp3sXRg_hYwiTU-0es9uGkm9JIoSEiziYVkueMtI.jd6dEVSkPDdlK3WFW8G5yBLdG-lj3ciGcw6c5s3ta4s&dib_tag=se&keywords=Zuke%27s%2Bmini%2Bnaturals%2Btraining%2Btreats&qid=1763843698&rdc=1&s=pet-supplies&sprefix=zuke%27s%2Bmini%2Bnaturals%2Btraining%2Btreats%2Cpets%2C184&sr=1-1&th=1&linkCode=ll1&tag=adiaustin-20&linkId=a459ab8244e39071819eb0cc0f85d0c9&language=en_US&ref_=as_li_ss_tl',
    imageUrl: 'https://m.media-amazon.com/images/I/81rg5mZqs-L._AC_SL1500_.jpg',
    imageAlt: "Zuke's Mini Naturals Dog Training Treats",
    whyRecommended: 'Essential for practicing recall commands at off-leash areas. Keep your dog focused and responsive.'
  },
]

const categories = ['All', 'Hydration', 'Safety', 'Summer Gear', 'Paw Care', 'Cleanup', 'Training']

export default function GearPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Essential Dog Park Gear
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Everything you need for safe, fun, and comfortable visits to Austin dog parks. 
            Recommended by experienced Austin dog owners.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why the Right Gear Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Visiting Austin dog parks with the right gear makes the experience safer, more enjoyable, 
            and more convenient for both you and your dog. Whether you are heading to Red Bud Isle for a 
            swim or Zilker Park for an off-leash run, being prepared ensures you can handle any situation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We have curated this list of essential gear based on recommendations from experienced Austin 
            dog owners and our own testing at local dog parks. All products are available on Amazon with 
            fast shipping to Austin.
          </p>
        </div>

        {/* Disclosure */}
        <div className="bg-blue-50 border-l-4 border-primary-600 p-6 mb-12 rounded">
          <p className="text-sm text-gray-700">
            <strong>Disclosure:</strong> As an Amazon Associate, ATX Dog Parks earns from qualifying purchases. 
            This helps us maintain and improve our free dog park directory. We only recommend products we believe 
            are valuable for Austin dog park visitors.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-12">
          {categories.filter(cat => cat !== 'All').map(category => {
            const categoryProducts = products.filter(p => p.category === category)
            if (categoryProducts.length === 0) return null

            return (
              <div key={category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                      {/* Product Image */}
                      <div className="relative h-64 bg-gray-100">
                        <Image
                          src={product.imageUrl}
                          alt={product.imageAlt}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {product.description}
                        </p>
                        
                        <div className="bg-primary-50 border-l-4 border-primary-600 p-4 mb-4">
                          <div className="flex items-start gap-2">
                            <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                            <p className="text-sm text-gray-700">
                              <strong>Why we recommend it:</strong> {product.whyRecommended}
                            </p>
                          </div>
                        </div>

                        <a
                          href={product.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg transition-colors"
                        >
                          View on Amazon
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Dog Park Packing Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Every Visit:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Fresh water and portable bowl</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Waste bags (bring extras!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Leash for transit to/from off-leash area</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Treats for recall training</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Summer Essentials:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Extra water (double the normal amount)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Cooling vest or bandana</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Paw protection wax or boots</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Towel for wet dogs at water parks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Back to Parks */}
        <div className="mt-12 text-center bg-primary-50 border-2 border-primary-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Visit an Austin Dog Park?
          </h3>
          <p className="text-gray-700 mb-6">
            Now that you have got your gear sorted, explore our complete directory of Austin dog parks 
            to find the perfect spot for your next adventure!
          </p>
          <a
            href="/"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Browse All Dog Parks
          </a>
        </div>
      </section>
    </div>
  )
}

