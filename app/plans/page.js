import FloorPlans from "@/components/FloorPlans";
import { IMPERIUM, PLANS } from "@/lib/imperium";

export const metadata = {
  title: "Plans",
  description: PLANS.body,
};

export default function ImperiumPlansPage() {
  return (
    <div className="pt-[5.25rem] sm:pt-[6rem] lg:pt-[6.5rem]">
      <FloorPlans />
    </div>
  );
}
