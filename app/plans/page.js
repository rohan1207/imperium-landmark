import FloorPlans from "@/components/FloorPlans";
import { IMPERIUM, PLANS } from "@/lib/imperium";

export const metadata = {
  title: "Plans",
  description: PLANS.body,
};

export default function ImperiumPlansPage() {
  return (
    <div className="pt-[4.75rem] sm:pt-[5.5rem] lg:pt-[6rem]">
      <FloorPlans />
    </div>
  );
}
