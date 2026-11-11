import AboutHero from "@/components/AboutHero";
import Highlights from "@/components/Highlights";
import Legacy from "@/components/Legacy";
import { ABOUT, IMPERIUM } from "@/lib/imperium";

export const metadata = {
  title: "About",
  description: ABOUT.lead,
};

export default function ImperiumAboutPage() {
  return (
    <>
      <AboutHero />
      <Highlights layout="grid" />
      <Legacy variant="band" />
    </>
  );
}
