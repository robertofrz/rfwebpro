import Link from "next/link";

export default function WorkProcess() {
  const steps = [
    {
      number: 1,
      title: "Discovery & Goals",
      description:
        "We start with a friendly chat about your business, goals and audience. This ensures your website is designed to connect with the people who matter most: your future customers.",
    },
    {
      number: 2,
      title: "Proposal & Agreement",
      description:
        "You’ll get a transparent proposal outlining pages, features, timeline, and cost. No surprises, just a clear plan and contract so you know exactly what to expect.",
    },
    {
      number: 3,
      title: "Website Blueprint",
      description:
        "I create a clear wireframe to map out your site’s structure and content flow. Together, we also define your visual identity (colors, fonts, and style) to be applied in the next phase.",
    },
    {
      number: 4,
      title: "Design Preview",
      description:
        "See a full visual mockup of your website before development starts. This is your chance to review, refine, and approve the design so there are no unexpected surprises.",
    },
    {
      number: 5,
      title: "Development & Launch",
      description:
        "Once the design is approved, I build your site with the latest technology. You only pay the final amount once you’re 100% happy, and then we launch your site to the world.",
    },
    {
      number: 6,
      title: "Post Launch Support",
      description:
        "Get peace of mind with included support after launch. Depending on your plan, enjoy 7 days, 15 days, or even 30 days of expert help to fix any issues and answer any questions.",
    },
  ];

  return (
    <section className="bg-blue min-h-screen scroll-mt-14">
      <div className="section-width py-20 flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="oswald uppercase text-lg text-neutral-400 tracking-widest mb-2">
            my work process{" "}
          </h2>
          <h3 className="max-w-full md:max-w-xl oswald uppercase leading-[1] tracking-[-0.0625rem] text-4xl sm:text-5xl font-semibold text-white mb-4">
            A simple, transparent, and results-driven process from start to
            finish
          </h3>
          <p className="text-lg lg:text-base max-w-full md:max-w-xl text-white/80">
            From the initial consultation to the final launch, I guide you
            through a clear, step-by-step process that makes building your
            website stress-free. By keeping everything transparent and focusing
            on your goals, I ensure a smooth experience and a website that truly
            delivers results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10">
          {steps.map(({ number, title, description }, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-start text-left border-2 border-lightblue relative"
            >
              <div className="flex items-center justify-center bg-lightblue w-18 h-18 absolute -top-10 text-white font-bold text-4xl rounded-lg">
                {number}
              </div>
              <h4 className="oswald font-semibold uppercase text-2xl mt-6 mb-3 text-neutral-800">
                {title}
              </h4>
              <p className="text-lg lg:text-base text-neutral-600">
                {description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-12 text-center self-center mt-8">
          <Link
            href="/contact"
            className="text-blue oswald font-medium bg-lightblue tracking-[0.0625rem] py-3 px-9 text-lg rounded-lg uppercase shadow-md cursor-pointer hover:shadow-lg  hover:scale-101 transition-colors duration-300 active:scale-99"
          >
            Start Step 1
          </Link>{" "}
          <p className="text-white text-xl oswald uppercase font-light ">
            Not sure about something?{" "}
            <Link
              href="/faq"
              className="font-semibold underline hover:text-lightblue"
            >
              Check the FAQ
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
