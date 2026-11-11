import HomeHero from "@/components/HomeHero";
import Highlights from "@/components/Highlights";
import FloorPlans from "@/components/FloorPlans";
import Proximity from "@/components/Proximity";
import LocationMap from "@/components/LocationMap";
import Legacy from "@/components/Legacy";

export default function ImperiumHomePage() {
  return (
    <>
      <HomeHero />
      <Highlights />
      <FloorPlans />
      <Proximity />
      <LocationMap />
      <Legacy />
    </>
  );
}
