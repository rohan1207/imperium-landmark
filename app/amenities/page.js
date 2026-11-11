import AmenitiesView from "@/components/AmenitiesView";
import { AMENITIES, IMPERIUM } from "@/lib/imperium";

export const metadata = {
  title: "Amenities & Specs",
  description: AMENITIES.body || AMENITIES.title,
};

export default function ImperiumAmenitiesPage() {
  return <AmenitiesView />;
}
