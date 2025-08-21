import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const phoneNumber = "5511937274647";
  const message = "Hi! I'd like to learn more about your web design services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <footer id="contact" className="bg-blue pb-8 text-white">
      <div className="section-width flex flex-col gap-8">
        {/* Divider */}
        <hr className="border-white/30" />
        {/* Top Section */}
        <div className="flex flex-row items-center justify-between gap-6">
          {/* Center (Logo) */}
          <div className="flex justify-center self-center">
            <Image
              src="/white-logo.webp"
              alt="RF Web Pro Logo"
              width={170}
              height={130}
              loading="lazy"
            />
          </div>

          {/* Right (Links + Contact) */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-lg oswald uppercase font-semibold mb-2">
              Contact Info
            </h2>
            <ul className="space-y-1 text-base lg:text-sm text-white/80">
              <li>
                <a href="mailto:info@rfwebpro.com" className="hover:underline">
                  info@rfwebpro.com
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="hover:underline"
                >
                  +55 11 93727-4647
                </a>
              </li>
              <li>
                <p>@rfwebpro</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm gap-2 text-white/70">
          <p>© {year} RF Web Pro. All rights reserved.</p>
          <p>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms-of-service" className="hover:underline">
              Terms Of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
