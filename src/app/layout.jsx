import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  metadataBase: new URL("https://rfwebpro.com"),

  title: "Small Business Web Designer | RF Web Pro",
  description:
    "Custom-built, modern, fast, and SEO-friendly websites to help your business grow.",
  openGraph: {
    title: "Small Business Web Designer | RF Web Pro",
    description:
      "Custom-built, modern, fast, and SEO-friendly websites to help your business grow.",
    url: "https://rfwebpro.com",
    siteName: "RF Web Pro",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "RF Web Pro - Big websites for small businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Web Designer | RF Web Pro",
    description:
      "Custom-built, modern, fast, and SEO-friendly websites to help your business grow.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
