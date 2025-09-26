import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="section-width py-20 scroll-mt-14 ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="oswald uppercase text-lg text-neutral-500 tracking-widest mb-2">
            My Pricing
          </h2>
          <h3 className="max-w-full md:max-w-xl oswald uppercase leading-[1] tracking-[-0.0625rem] text-4xl sm:text-5xl font-semibold text-neutral-800 mb-4">
            Affordable Websites That Deliver Results
          </h3>
          <p className="text-lg lg:text-base max-w-full md:max-w-xl text-neutral-600">
            I offer straightforward, competitive pricing designed to give small
            businesses high-quality websites without breaking the budget. Every
            package is tailored to your needs, ensuring you get a website that
            looks professional, functions seamlessly, and helps your business
            grow.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-4 w-full">
          <div className="bg-neutral-50 p-8 rounded-lg shadow-lg flex flex-col items-start justify-start text-neutral-800 w-full max-w-md mx-auto border border-neutral-200">
            <h4 className="oswald uppercase font-semibold text-4xl text-center mb-6 leading-[1] tracking-[-0.0625rem] self-center mt-2 ">
              Essential
            </h4>
            <ul className="text-base lg:text-sm list-disc list-inside space-y-3 mb-8 text-neutral-600">
              <li>1-page website</li>
              <li>Client-provided content</li>
              <li>Responsive design</li>
              <li>SEO-friendly</li>
              <li>
                Essential sections (About, Products/Services, Location &
                Contact)
              </li>
              <li>Contact form</li>
              <li>1 revision round</li>
              <li>7 days support after launch</li>
              <li>Domain (1 year) and free lifetime hosting included</li>
            </ul>
            <div className="flex items-end justify-between w-full oswald uppercase mt-auto">
              <div>
                <p className="text-sm">Starting From</p>
                <p className="text-5xl font-semibold">$300</p>
              </div>
              <Link
                href="/contact"
                className="text-white font-medium bg-blue tracking-[0.0625rem] py-3 px-9 text-lg rounded-lg uppercase shadow-md cursor-pointer hover:shadow-lg hover:scale-101 transition-colors duration-300 active:scale-99"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="bg-blue p-8 rounded-lg shadow-lg relative text-white flex flex-col items-start justify-start w-full max-w-md mx-auto">
            <span className="bg-orange px-5 py-2 rounded-lg absolute -top-4 left-1/2 -translate-x-1/2 font-semibold oswald uppercase">
              Most Popular
            </span>

            <h4 className="oswald uppercase font-semibold text-4xl text-center mb-6 leading-[1] tracking-[-0.0625rem] mt-3 self-center">
              Professional
            </h4>
            <p className="font-bold mb-4 text-base lg:text-sm">
              Everything in Essential Package, plus:
            </p>
            <ul className="text-base lg:text-sm list-disc list-inside space-y-3 mb-8">
              <li>Up to 5 pages website</li>
              <li>Content creation & persuasive copywriting</li>
              <li>Social media links</li>
              <li>WhatsApp for direct contact</li>
              <li>Google Maps for easy navigation</li>
              <li>Testimonials section</li>
              <li>3 revision rounds</li>
              <li>15 days support after launch</li>
              <li>Domain (1 year) and free lifetime hosting include</li>
            </ul>
            <div className="flex items-end justify-between w-full oswald uppercase mt-auto">
              <div>
                <p className="text-sm">Starting From</p>
                <p className="text-5xl font-semibold">$500</p>
              </div>
              <Link
                href="/contact"
                className="text-blue font-medium bg-lightblue text-lg tracking-[0.0625rem] py-3 px-9 rounded-lg uppercase shadow-md cursor-pointer hover:shadow-lg hover:scale-101 transition-colors duration-300 active:scale-99"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="bg-neutral-50 p-8 rounded-lg shadow-lg flex flex-col items-start justify-start text-neutral-800 w-full max-w-md mx-auto border border-neutral-200">
            <h4 className="oswald uppercase font-semibold text-4xl text-center mb-6 leading-[1] tracking-[-0.0625rem] self-center mt-2 ">
              Complete
            </h4>
            <p className="font-bold text-base lg:text-sm mb-4">
              Everything in Professional Package, plus:
            </p>
            <ul className="text-base lg:text-sm list-disc list-inside space-y-3 mb-8 text-neutral-600">
              <li>Content Management System</li>
              <li>Training included</li>
              <li>Easy updates</li>
              <li>1-month support after launch</li>
              <li>Domain (1 year) and free lifetime hosting included</li>
            </ul>
            <div className="flex items-end justify-between w-full oswald uppercase mt-auto ">
              <div>
                <p className="text-sm">Starting From</p>
                <p className="text-5xl font-semibold">$800</p>
              </div>
              <Link
                href="/contact"
                className="text-white font-medium bg-blue tracking-[0.0625rem] py-3 px-9 text-lg rounded-lg uppercase shadow-md cursor-pointer hover:shadow-lg hover:scale-101 transition-colors duration-300 active:scale-99"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
