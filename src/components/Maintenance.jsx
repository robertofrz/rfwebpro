import Image from "next/image";

export default function Maintenance() {
  return (
    <section className="scroll-mt-14">
      <div className="section-width py-20 flex flex-col items-center justify-center text-neutral-800">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="oswald uppercase text-lg text-neutral-500 tracking-widest mb-2">
            Ongoing maintenance
          </h2>
          <h3 className="max-w-full md:max-w-xl oswald uppercase leading-[1] tracking-[-0.0625rem] text-4xl sm:text-5xl font-semibold mb-4">
            Worry-Free Website Maintenance for Just €50/month
          </h3>
          <p className="text-lg lg:text-base max-w-full md:max-w-xl text-neutral-600">
            The Monthly Plan is designed for those who want total peace of mind.
            We take care of everything for you, from maintenance and security to
            small updates and optimizations, so you can focus on running your
            business while I keep your website running flawlessly. And the best
            part? You can cancel the maintenance service at any time, with no
            hidden fees or long-term commitments.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-2">
          <div className="w-full lg:w-2/5">
            <Image
              src="/website-maintenance.png"
              width={500}
              height={320}
              alt="Illustration representing website maintenance."
              className="w-full h-auto"
            />
          </div>

          <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {/* 1 */}
            <div className="flex items-start gap-1">
              <Image
                src="/check.png"
                width={80}
                height={80}
                alt="Check icon."
                className="-mt-1"
              />
              <div>
                <h4 className="oswald uppercase font-semibold mb-3 text-xl leading-6">
                  Content Updates <br className="hidden lg:block" /> Made Easy
                </h4>
                <p className="text-lg lg:text-sm text-neutral-600">
                  Send me your changes and I’ll update your site within 24
                  hours, whether it’s new photos, text, blog posts, or special
                  offers.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-start gap-1">
              <Image
                src="/check.png"
                width={80}
                height={80}
                alt="Check icon."
                className="-mt-1"
              />
              <div>
                <h4 className="oswald uppercase font-semibold mb-3 text-xl leading-6">
                  Priority Support Whenever You Need
                </h4>
                <p className="text-lg lg:text-sm text-neutral-600">
                  Got a question or request? You get first-in-line support via
                  email or WhatsApp. No waiting, no stress.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-start gap-1">
              <Image
                src="/check.png"
                width={80}
                height={80}
                alt="Check icon."
                className="-mt-1"
              />
              <div>
                <h4 className="oswald uppercase font-semibold mb-3 text-xl leading-6">
                  Technical <br className="hidden lg:block" />
                  Maintenance
                </h4>
                <p className="text-lg lg:text-sm text-neutral-600">
                  I take care of all the behind-the-scenes work: bug fixes,
                  speed checks and security updates to keep your site stable.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-1">
              <Image
                src="/check.png"
                width={80}
                height={80}
                alt="Check icon."
                className="-mt-1"
              />
              <div>
                <h4 className="oswald uppercase font-semibold mb-3 text-xl leading-6">
                  Monthly SEO & Performance
                </h4>
                <p className="text-lg lg:text-sm text-neutral-600">
                  Your site gets monthly performance monitoring and small SEO
                  tweaks to stay fast, optimized, and search-friendly.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex items-start gap-1">
              <Image
                src="/check.png"
                width={80}
                height={80}
                alt="Check icon."
                className="-mt-1"
              />
              <div>
                <h4 className="oswald uppercase font-semibold mb-3 text-xl leading-6">
                  Hosting & Domain Management
                </h4>
                <p className="text-lg lg:text-sm text-neutral-600">
                  Never worry about renewals again. I manage your hosting and
                  domain for you so everything stays active and secure.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className="flex items-start gap-1">
              <Image
                src="/check.png"
                width={80}
                height={80}
                alt="Check icon."
                className="-mt-1"
              />
              <div>
                <h4 className="oswald uppercase font-semibold mb-3 text-xl leading-6">
                  Total Peace of
                  <br className="hidden lg:block" /> Mind
                </h4>
                <p className="text-lg lg:text-sm text-neutral-600">
                  Think of me as your website’s property manager. I handle
                  everything, so you can focus on your business.
                </p>
              </div>
            </div>

            {/* 6 */}
          </div>
        </div>
      </div>
    </section>
  );
}
