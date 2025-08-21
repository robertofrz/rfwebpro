import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-width py-20 scroll-mt-14 ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="oswald uppercase text-lg text-neutral-500 tracking-widest mb-2">
            testimonials
          </h2>
          <h3 className="max-w-full md:max-w-xl oswald uppercase leading-[1] tracking-[-0.0625rem] text-4xl sm:text-5xl font-semibold text-neutral-800 mb-4">
            Why Clients Trust Me
          </h3>
          <p className="text-lg lg:text-base max-w-full md:max-w-xl text-neutral-600">
            I believe building a website is about more than code, it’s about
            understanding your goals and helping your business grow. I stay
            available throughout the process, listen with empathy, and guide you
            in the right direction. Your success is my priority, and I’m here to
            create solutions that truly make an impact.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex flex-col items-center bg-blue text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4 w-full">
              <Image
                src="/quote-marks.png"
                width={60}
                height={60}
                alt="Quote marks icon."
              />
              <Image
                src="/five-stars.png"
                width={150}
                height={15}
                alt="Five stars icon."
              />
            </div>
            <p className="text-lg lg:text-base leading-7 max-w-full md:max-w-md mb-4 italic">
              Roberto really understood what we needed from day one. He built a
              clean, professional site that clearly shows our plans and
              partners, and it’s already increased our leads by 30%. Super easy
              to work with, quick to respond, and always willing to make
              adjustments. Couldn’t recommend him more!
            </p>
            <p className="oswald uppercase font-semibold text-xl self-end">
              — KARINE M.
            </p>
          </div>
          <div className="flex flex-col items-center bg-blue text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between w-full mb-4">
              <Image
                src="/quote-marks.png"
                width={60}
                height={60}
                alt="Quote marks icon."
              />
              <Image
                src="/five-stars.png"
                width={150}
                height={15}
                alt="Five stars icon."
              />
            </div>
            <p className="text-lg lg:text-base leading-7 max-w-full md:max-w-md mb-4 italic">
              We wanted a strong online presence that matched our style, and
              Roberto nailed it. The site looks amazing, integrates perfectly
              with our booking system and WhatsApp, and even our clients are
              loving it. He made the whole process simple and stress-free.
              Highly recommend!
            </p>
            <p className="oswald uppercase font-semibold text-xl self-end">
              — vagner s.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
