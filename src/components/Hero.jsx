import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="w-full min-h-screen
        bg-cover bg-left bg-no-repeat
        bg-[url('/bg/hero-mobile.webp')]
        lg:bg-[url('/bg/hero-desktop2.webp')] flex items-center justify-center "
    >
      <div className="pt-24 md:pt-32 lg:pt-32 section-width flex flex-col lg:flex-row items-center justify-center gap-4 lg:justify-between ">
        <div className=" flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-1">
          <h1 className="oswald uppercase text-blue  font-bold pb-4 leading-[1] tracking-[-0.0625rem]">
            <span
              className="text-4xl sm:text-5xl whitespace-nowrap
"
            >
              Small Business.
            </span>
            <br />
            <span
              className="text-6xl sm:text-7xl whitespace-nowrap
"
            >
              Big Websites.
            </span>
          </h1>
          <p className="text-neutral-700 text-lg lg:text-base pb-10 max-w-full md:max-w-xl">
            Build a powerful online presence without breaking the bank. Fast,
            modern websites designed to help small businesses grow big.
          </p>
          <div className="flex gap-3 oswald text-blue">
            <Link
              href="/contact"
              className="bg-lightblue tracking-[0.0625rem] cursor-pointer  rounded-lg shadow-md py-3 px-9 text-lg uppercase font-medium hover:bg-blue hover:text-white hover:shadow-lg transition-colors duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/about-me"
              className="border-2 border-blue cursor-pointer rounded-lg shadow-md py-3 px-9 uppercase tracking-[0.0625rem] text-lg font-medium hover:bg-blue hover:text-white hover:shadow-lg transition-colors duration-300"
            >
              About Me
            </Link>
          </div>
        </div>
        <div className="mx-1">
          <Image
            src="/mockups/hero-mockup.webp"
            width={1400}
            height={950}
            alt="A laptop and mobile mockup displaying a Pet Shop website."
            priority={true}
          ></Image>
        </div>
      </div>
    </section>
  );
}
