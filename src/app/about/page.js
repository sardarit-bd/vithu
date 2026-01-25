import Bredcrubm from "@/component/common/Bred";
import ValuesSection from "@/component/about/Values";
import Whoweare from "@/component/about/Whoweare";
import MissionSection from "@/component/service/Mission";

export default function page() {
  return (
    <>
    <Bredcrubm title="Titre par défaut" subtitle="Votre partenaire de confiance pour tous vos besoins informatiques en Suisse"/>
    <Whoweare/>
    <ValuesSection/>
    <MissionSection/>
    </>
  )
}
