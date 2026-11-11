import { Cormorant_Garamond, Inter_Tight } from "next/font/google";
import "./globals.css";
import ImperiumNav from "@/components/ImperiumNav";
import EnquirySection from "@/components/EnquirySection";
import ImperiumFooter from "@/components/ImperiumFooter";
import { IMPERIUM } from "@/lib/imperium";

const interTight = Inter_Tight({
  variable: "--font-tsk",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-lilasons-display",
  subsets: ["latin"],
  weight: "500",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: {
    default: `${IMPERIUM.name} | Boutique Offices & Retail | ${IMPERIUM.city}`,
    template: `%s | ${IMPERIUM.name}`,
  },
  description: IMPERIUM.subhead,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <div className="imperium-root min-h-dvh">
          <ImperiumNav />
          <main>{children}</main>
          <EnquirySection />
          <ImperiumFooter />
        </div>
      </body>
    </html>
  );
}
