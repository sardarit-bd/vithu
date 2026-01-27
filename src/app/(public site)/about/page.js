import ValuesSection from "@/component/about/Values";
import Whoweare from "@/component/about/Whoweare";
import Bredcrubm from "@/component/common/Bred";
import MissionSection from "@/component/service/Mission";

export default function page() {
  return (
    <>
      <Bredcrubm title="À propos" subtitle="Votre partenaire de confiance pour tous vos besoins informatiques en Suisse" />
      <Whoweare />
      <ValuesSection />
      <MissionSection />
    </>
  )
}
