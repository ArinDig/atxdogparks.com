import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ATX Dog Parks',
  description: 'Privacy Policy for ATX Dog Parks - Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: October 23, 2024</p>

          <div className="prose prose-blue max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to ATX Dog Parks. We are committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you visit our website atxdogparks.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information about your device, 
                including information about your web browser, IP address, time zone, and some of the cookies that 
                are installed on your device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain 
                information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
              </p>
              <p className="text-gray-700 mb-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Google AdSense</h2>
              <p className="text-gray-700 mb-4">
                We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve 
                ads based on your prior visits to our website or other websites. Google uses advertising cookies 
                to enable it and its partners to serve ads based on your visit to our site and other sites on the Internet.
              </p>
              <p className="text-gray-700 mb-4">
                You may opt out of personalized advertising by visiting{' '}
                <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                  Google Ads Settings
                </a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Google Analytics</h2>
              <p className="text-gray-700 mb-4">
                We use Google Analytics to analyze the use of our website. Google Analytics gathers information about 
                website use by means of cookies. The information gathered is used to create reports about the use of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites. We have no control over the content and practices 
                of these sites and cannot accept responsibility or liability for their respective privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our website does not knowingly collect any personally identifiable information from children under the 
                age of 13. If you are a parent or guardian and believe your child has provided us with personal information, 
                please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>The right to access your personal information</li>
                <li>The right to request correction of your personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to request restriction of processing your personal information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the Last Updated date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700">
                Email: privacy@atxdogparks.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">GDPR Compliance</h2>
              <p className="text-gray-700 mb-4">
                If you are located in the European Economic Area (EEA), you have certain data protection rights. 
                We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">California Privacy Rights (CCPA)</h2>
              <p className="text-gray-700 mb-4">
                If you are a California resident, you have specific rights regarding access to your personal information. 
                California Civil Code Section 1798.83 permits users who are California residents to request certain 
                information regarding our disclosure of personal information to third parties.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
