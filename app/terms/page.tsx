import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ATX Dog Parks',
  description: 'Terms of Service for ATX Dog Parks - Read our terms and conditions for using our website.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: October 23, 2024</p>

          <div className="prose prose-blue max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using ATX Dog Parks (atxdogparks.com), you accept and agree to be bound by the 
                terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Our Service</h2>
              <p className="text-gray-700 mb-4">
                ATX Dog Parks is a directory website providing information about dog parks in Austin, Texas. 
                The information is provided for informational purposes only.
              </p>
              <p className="text-gray-700 mb-4">
                You agree to use our website only for lawful purposes and in a way that does not infringe the 
                rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-700 mb-4">
                The information provided on ATX Dog Parks is for general informational purposes only. While we 
                strive to keep the information up to date and correct, we make no representations or warranties 
                of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or 
                availability of the information.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Important:</strong> Always verify park hours, fees, and policies directly with the park 
                before visiting. Park information, rules, and amenities may change without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                ATX Dog Parks, its owners, employees, and affiliates will not be liable for any loss or damage 
                arising from your use of our website or the information provided herein. This includes, but is 
                not limited to, injuries to you or your pet while visiting any dog park listed on our website.
              </p>
              <p className="text-gray-700 mb-4">
                You visit dog parks at your own risk. Please ensure your dog is properly vaccinated, supervised, 
                and under your control at all times.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">External Links</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to external websites that are not provided or maintained by us. 
                We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on 
                these external websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Advertising</h2>
              <p className="text-gray-700 mb-4">
                We use Google AdSense to display advertisements on our website. Third-party vendors, including 
                Google, use cookies to serve ads based on your prior visits to our website or other websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Unless otherwise stated, ATX Dog Parks owns the intellectual property rights for all material 
                on this website. All intellectual property rights are reserved.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                When visiting dog parks, you are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Ensuring your dog is up to date on vaccinations</li>
                <li>Following all posted rules and regulations</li>
                <li>Supervising your dog at all times</li>
                <li>Cleaning up after your dog</li>
                <li>Respecting other park visitors and their pets</li>
                <li>Complying with leash policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting to the website. Your continued use of the website following the posting of changes 
                constitutes acceptance of those changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms shall be governed by and construed in accordance with the laws of the State of Texas, 
                United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-700">
                Email: info@atxdogparks.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

