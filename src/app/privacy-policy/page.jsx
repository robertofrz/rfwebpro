import CallToAction from "@/components/CallToAction";

export default function PrivacyPolicy() {
  return (
    <main className="bg-blue text-white">
      <div className="section-width py-20 pt-36 flex flex-col items-start">
        <h1 className="max-w-full md:max-w-xl oswald text-center uppercase leading-[1] tracking-[-0.0625rem] text-4xl sm:text-5xl font-semibold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-white/70 mb-6">Last Updated: August, 2025</p>

        <section className="space-y-2 mb-8">
          <h2 className="text-3xl oswald uppercase font-semibold mb-4">
            1. Data Controller
          </h2>
          <p>
            The website and services are provided by{" "}
            <strong>RF Web Pro (José Roberto Ferraz Junior)</strong>.
          </p>
          <p>
            For any questions regarding your personal data, you can contact:{" "}
            <a href="mailto:info@rfwebpro.com" className="text-white underline">
              info@rfwebpro.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-2 mb-8">
          <h2 className="text-3xl oswald uppercase font-semibold mb-4">
            2. Data Collected
          </h2>
          <p>
            When you use the contact form on our website, the following
            information may be collected:
          </p>
          <ul className="list-disc list-inside">
            <li>Name</li>
            <li>Email</li>
            <li>Phone number</li>
          </ul>
          <p>
            <strong>Cookies & Tracking:</strong> Currently, the website does{" "}
            <strong>not use cookies or tracking tools</strong> like Google
            Analytics or Facebook Pixel.
          </p>
        </section>

        <section className="space-y-2 mb-8">
          <h2 className="text-3xl oswald uppercase font-semibold mb-4">
            3. Use of Data
          </h2>
          <p>The collected data is used solely to:</p>
          <ul className="list-disc list-inside">
            <li>Respond to inquiries</li>
            <li>Provide quotes</li>
            <li>Deliver requested services</li>
          </ul>
          <p>
            Data will <strong>not</strong> be used for marketing campaigns.
          </p>
        </section>

        <section className="space-y-2 mb-8">
          <h2 className="text-3xl oswald uppercase font-semibold mb-4">
            4. Data Sharing
          </h2>
          <p>
            We may share your data with third-party service providers only as
            necessary to deliver our services, including:
          </p>
          <ul className="list-disc list-inside">
            <li>Web hosting services (e.g., Hostinger, Vercel, Netlify)</li>
            <li>Payment processors (e.g., Wise)</li>
            <li>Domain registration services (e.g., NameCheap)</li>
          </ul>
        </section>

        <section className="space-y-2 mb-8">
          <h2 className="text-3xl oswald uppercase font-semibold mb-4">
            5. Data Protection
          </h2>
          <p>
            We comply with applicable data protection regulations, including{" "}
            <strong>LGPD</strong> (Brazil) and <strong>GDPR</strong> (Europe),
            ensuring your data is stored securely and used only for the purposes
            stated.
          </p>
        </section>
      </div>
      <CallToAction />
    </main>
  );
}
