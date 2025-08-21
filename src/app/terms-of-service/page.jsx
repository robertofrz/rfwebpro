import CallToAction from "@/components/CallToAction";

export default function TermsOfService() {
  return (
    <main className="bg-blue text-white">
      <div className="section-width py-20 pt-36 flex flex-col items-start">
        <h1 className="max-w-full md:max-w-xl oswald text-center uppercase leading-[1] tracking-[-0.0625rem] text-4xl sm:text-5xl font-semibold text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-white/70 mb-6">Last Updated: August, 2025</p>

        <section className="space-y-2 mb-8">
          <h2 className="text-3xl oswald uppercase font-semibold mb-4">
            1. Services Provided
          </h2>
          <p>RF Web Pro offers the following services:</p>
          <ul className="list-disc list-inside">
            <li>Website design</li>
            <li>Website development</li>
            <li>Landing pages</li>
            <li>Maintenance</li>
          </ul>
          <p>
            We work primarily with <strong>custom code</strong>, using{" "}
            <strong>Next.js</strong> for development and{" "}
            <strong>Figma / Canva</strong> for design.
          </p>
        </section>

        <section className="space-y-2 mb-8">
          <h2 className="text-3xl oswald uppercase font-semibold mb-4">
            2. Payment & Fees
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Payment Terms:</strong> 50% upfront upon signing the
              Agreement Letter/Contract, 50% upon project delivery.
            </li>
            <li>
              <strong>Payment Methods:</strong> Wise (preferred).
            </li>
            <li>
              <strong>Refund Policy:</strong> Refunds are only available if the
              client cancels the project <strong>before work begins</strong>,
              after initial payment.
            </li>
          </ul>
        </section>

        <section className="space-y-2 mb-8">
          <h2 className="text-3xl oswald uppercase font-semibold mb-4">
            3. Deliverables & Timeline
          </h2>
          <p>
            Project timelines and milestones are defined in the individual
            contract.
          </p>
        </section>

        <section className="space-y-2 mb-8">
          <h2 className="text-3xl oswald uppercase font-semibold mb-4">
            4. Client Responsibilities
          </h2>
          <p>
            Clients must provide all necessary information, content, and access
            required to complete the project in a timely manner.
          </p>
        </section>

        <section className="space-y-2 mb-8">
          <h2 className="text-3xl oswald uppercase font-semibold mb-4">
            5. Governing Law
          </h2>
          <p>
            These Terms of Service are governed by{" "}
            <strong>Brazilian law</strong>, in compliance with{" "}
            <strong>LGPD</strong>, and respecting <strong>GDPR</strong>{" "}
            requirements.
          </p>
        </section>

        <section className="space-y-2 mb-8">
          <h2 className="text-3xl oswald uppercase font-semibold mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            RF Web Pro will make reasonable efforts to deliver services as
            agreed, but is{" "}
            <strong>
              not liable for indirect, incidental, or consequential damages
            </strong>{" "}
            arising from the use of our services or website.
          </p>
        </section>
      </div>
      <CallToAction />
    </main>
  );
}
