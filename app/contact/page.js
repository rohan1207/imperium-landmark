import ContactView from "@/components/ContactView";
import { CONTACT_PAGE, IMPERIUM } from "@/lib/imperium";

export const metadata = {
  title: "Contact",
  description: CONTACT_PAGE.body || `Enquire about boutique offices and retail at ${IMPERIUM.name}.`,
};

export default function ImperiumContactPage() {
  return <ContactView />;
}
