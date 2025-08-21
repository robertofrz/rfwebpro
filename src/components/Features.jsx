import FeatureCard from "./ui/FeatureCard";

export default function Features() {
  const features = [
    {
      title: "I Study Your Business First",
      description:
        "I research your industry and competitors to ensure your website stands out, connects with ideal customers, builds trust, and encourages confident action.",
      image: "/icons/competition.png",
    },
    {
      title: "Fully Responsive",
      description:
        "Your website will work perfectly on any device (phone, tablet, or desktop) ensuring you don’t lose customers due to poor mobile or tablet experience.",
      image: "/icons/devices.png",
    },
    {
      title: "No Generic Templates",
      description:
        "I write custom code for your business, avoiding generic templates and themes, so your site is faster, more secure, and uniquely tailored to your brand.",
      image: "/icons/coding.png",
    },
    {
      title: "Fast Loading & SEO-Friendly",
      description:
        "Your website loads in under a second, keeping visitors engaged. I optimize for search engines so more customers find and trust your business online.",
      image: "/icons/performance.png",
    },
    {
      title: "Clear Process, No Surprises",
      description:
        "I provide clear proposals, timelines, and regular reviews so you always know what’s happening. No hidden fees, surprises, or confusion.",
      image: "/icons/proposal.png",
    },
    {
      title: "With You After Launch",
      description:
        "After launch, I’m here to fix issues and answer questions, giving you peace of mind with expert support just a message away.",
      image: "/icons/support.png",
    },
  ];

  return (
    <section className="section-width py-20 scroll-mt-14">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="oswald uppercase text-lg text-neutral-500 tracking-widest mb-2">
            What Sets Me Apart
          </h2>
          <h3 className="max-w-full md:max-w-xl oswald uppercase leading-[1] tracking-[-0.0625rem] text-4xl sm:text-5xl font-semibold text-neutral-800 mb-4">
            Websites That Help Small Businesses Look Big
          </h3>
          <p className="text-lg lg:text-base max-w-full md:max-w-xl text-neutral-600">
            I craft custom, high-performing websites tailored for small
            businesses that want to stand out. Every design is built with clean
            code, fast load times, and SEO in mind, helping you attract more
            customers and turn your site into a real growth tool for your
            business.
          </p>
        </div>
        <div className="grid gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, image }, index) => (
            <FeatureCard
              key={index}
              title={title}
              description={description}
              image={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
