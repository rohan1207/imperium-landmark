import LocationView from "@/components/LocationView";
import { LOCATION_PAGE } from "@/lib/imperium";

export const metadata = {
  title: "Location",
  description: LOCATION_PAGE.body,
};

export default function ImperiumLocationPage() {
  return <LocationView />;
}
