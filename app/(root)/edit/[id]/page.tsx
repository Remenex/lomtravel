import EditPage from "@/app/components/editPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Izmeni Putovanje | LomTravel",
  description:
    "Otkrijte najbolja jednodnevna putovanja sa našom turističkom agencijom. Nudimo širok izbor jednodnevnih tura u Srbiji. Posetite popularne destinacije, prirodne lepote i kulturne spomenike na nezaboravnim jednodnevnim izletima. Planirajte savršen vikend odmor ili jednodnevni izlet sa profesionalnom organizacijom, sigurnošću i personalizovanim uslugama. Rezervišite svoje idealno jednodnevno putovanje već danas i uživajte u vrhunskim destinacijama uz povoljne cene.",
  keywords:
    "jednodnevna putovanja Srbija, jednodnevni izleti, jednodnevna tura, turističke destinacije Srbija, vikend putovanja Srbija, putovanja za vikend, izleti u prirodu Srbija, kulturni izleti Srbija, popularne destinacije Srbija, jednodnevne ture Beograd, avanturistički izleti Srbija, organizovani izleti Srbija, porodična putovanja Srbija, prirodne lepote Srbije, jednodnevni izleti po Srbiji, putovanja sa vodičem, agencija za putovanja Srbija, planiranje putovanja Srbija, putovanje u Srbiji za 1 dan, destinacije za izlete u Srbiji",
};
export default function Edit() {
  return <EditPage />;
}
