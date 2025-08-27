import ContactForm from "@/components/ui/ContactForm";

export default function Contact() {
  const phoneNumber = "5511937274647";
  const message =
    "Hello! I'm interested in your web design and development services. Could you provide more information and a quote for my project?";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <main className="bg-blue text-white">
      <div className="section-width py-20 flex flex-col items-center justify-center gap-16 pt-35">
        <div className="flex flex-col items-center text-center">
          <h1 className="oswald uppercase text-lg text-neutral-400 tracking-widest mb-2">
            Contact Me
          </h1>
          <h2 className="max-w-full md:max-w-xl oswald uppercase leading-[1] tracking-[-0.0625rem] text-4xl sm:text-5xl font-semibold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg lg:text-base max-w-full md:max-w-xl text-white/80">
            You can email me, start a chat on WhatsApp, or simply fill out the
            contact form with your details, and I will reach out to you. I
            respond to every message in less than 24 hours, so you’ll never be
            left waiting.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-evenly gap-20 w-full">
          <div className="flex flex-col items-start justify-center gap-12">
            <div className="flex items-center gap-4">
              <a href="mailto:info@rfwebpro.com" className="flex-shrink-0">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-13 h-13 icon-sgv"
                >
                  <title>Email</title>
                  <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12" />
                </svg>
              </a>
              <div className="flex flex-col items-start justify-center gap-2">
                <a
                  href="mailto:info@rfwebpro.com"
                  className="oswald uppercase font-semibold text-2xl hover:text-lightblue"
                >
                  Send Email
                </a>

                <p className="text-white/80">info@rfwebpro.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href={whatsappLink} target="_blank" className="flex-shrink-0">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-13 h-13 icon-sgv"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <div className="flex flex-col items-start justify-center gap-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="oswald uppercase font-semibold text-2xl hover:text-lightblue whitespace-nowrap"
                >
                  Chat On WhatsApp
                </a>
                <p className="text-white/80">+55 11 937274647</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
