import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <main className="bg-blue text-white mt-15">
      <div className="section-width flex flex-col items-center justify-center gap-8 py-20">
        <div>
          <h1 className="oswald uppercase text-lg text-center text-neutral-400 tracking-widest mb-2">
            Who I Am
          </h1>
          <h2 className="max-w-full md:max-w-xl oswald text-center uppercase leading-[1] tracking-[-0.0625rem] text-4xl sm:text-5xl font-semibold text-white mb-4">
            Crafting Digital Experiences with Passion
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-white/90 mb-8">
          <Image
            src="/me.webp"
            width={400}
            height={500}
            alt="A photo of Roberto Ferraz, the designer."
            loading="lazy"
          />
          <div className="max-w-full md:max-w-xl text-lg lg:text-base space-y-6 lg:space-y-4">
            <p>
              My name is Roberto, I'm a web developer and web designer with a
              passion for creating websites that help small businesses shine
              online. I discovered coding a few years ago and realized it was
              the perfect way to combine my creativity with my love for design,
              all while giving me the freedom to work from anywhere in the
              world.
            </p>
            <p>
              I’ve always been a creative person, and building websites is just
              one of the ways I express that. I also love languages, English has
              been a part of my life since I was 15, and it helps me connect
              with people from all over the globe. Outside of work, I meditate
              regularly, which keeps me grounded and helps me approach every
              project with focus and balance.
            </p>
            <p>
              What drives me most is helping small businesses succeed online. I
              know the challenges of finding someone trustworthy to create a
              quality website within budget, and that’s where I step in:
              delivering web solutions that are professional, affordable, and
              tailored to each client’s vision.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="text-blue oswald font-medium bg-lightblue tracking-[0.0625rem] text-lg py-3 px-9 rounded-lg uppercase shadow-md cursor-pointer hover:shadow-lg  hover:scale-101 transition-colors duration-300 active:scale-99"
        >
          Work With Me
        </Link>
      </div>
    </main>
  );
}
