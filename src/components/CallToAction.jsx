import Link from "next/link";

export default function CallToAction() {
  return (
    <section className=" bg-blue text-white py-20 text-center scroll-mt-18 ">
      <div className="section-width max-w-2xl mx-auto flex flex-col items-center ">
        <p className="oswald uppercase text-lg text-neutral-500 tracking-widest mb-2">
          Now that you know…
        </p>
        <h2 className="max-w-full md:max-w-xl oswald uppercase leading-[1] tracking-[-0.0625rem] text-4xl sm:text-5xl font-semibold text-white mb-10">
          Ready to Launch the <br className="hidden md:block" />
          Website Your Business <br className="hidden md:block" /> Deserves?
        </h2>
        <Link
          href="/contact"
          className="text-blue oswald text-lg font-medium bg-lightblue tracking-[0.0625rem] py-3 px-9 rounded-lg uppercase shadow-md cursor-pointer hover:shadow-lg hover:scale-101 active:scale-99"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
