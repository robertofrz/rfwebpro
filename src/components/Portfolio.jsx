import Image from "next/image";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex items-center justify-center py-20 scroll-mt-15 lg:scroll-mt-14 bg-neutral-100"
    >
      <div className="section-width flex flex-col items-center justify-center text-neutral-800">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="oswald uppercase text-lg text-neutral-500 tracking-widest mb-2">
            portfolio
          </h2>
          <h3 className="max-w-full md:max-w-xl oswald uppercase leading-[1] tracking-[-0.0625rem] text-4xl sm:text-5xl font-semibold  mb-4">
            A Look at my Past Projects
          </h3>
          <p className="text-lg lg:text-base max-w-full md:max-w-xl text-neutral-600">
            Regardless of your industry, I design websites that combine
            aesthetics, functionality, and high performance, customized to meet
            your specific needs. Throughout our journey, I’ve worked with a
            variety of clients, crafting solutions that foster growth and
            deliver results.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-22 w-full">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/mockups/vitalia-mockup.webp"
              width={400}
              height={200}
              alt="A laptop and a mobile mockup displaying Vitalia website."
              loading="lazy"
              className="mb-4"
            />
            <h4 className="oswald uppercase text-2xl font-semibold mb-4 tracking-[-0.0625rem]">
              vitalia
            </h4>
            <p className=" text-lg lg:text-base max-w-full text-center lg:text-left md:max-w-md text-neutral-600 mb-6">
              I created a clean, professional website for this healthcare
              insurance company, focusing on lead generation. With custom images
              and persuasive copy, the result was a significant boost in
              qualified leads.
            </p>
            <a
              href="https://vitalia-rfwebpro.vercel.app/"
              target="_blank"
              className="text-white oswald font-medium bg-blue tracking-[0.0625rem] py-3 px-9 text-lg rounded-lg uppercase shadow-md cursor-pointer hover:shadow-lg hover:scale-101 transition-colors duration-300 active:scale-99"
            >
              View Project
            </a>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/mockups/gringos-mockup.webp"
              width={400}
              height={200}
              alt="A laptop and a mobile mockup displaying Gringo's barbershop website."
              loading="lazy"
              className="mb-4"
            />
            <h4 className="oswald uppercase text-2xl font-semibold mb-4 tracking-[-0.0625rem]">
              gringo’s
            </h4>
            <p className=" text-lg lg:text-base max-w-full md:max-w-md text-center lg:text-left  text-neutral-600 mb-6">
              For this barbershop, I built a bold dark-mode website that
              reflects its masculine brand. With Google Maps and booking
              platform integration, clients can easily find and schedule their
              appointments.
            </p>
            <a
              href="https://gringos-rfwebpro.vercel.app/"
              target="_blank"
              className="text-white font-medium oswald bg-blue tracking-[0.0625rem] py-3 px-9 text-lg rounded-lg uppercase shadow-md cursor-pointer hover:shadow-lg hover:scale-101 transition-colors duration-300 active:scale-99"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
