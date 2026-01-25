import Breadcrumb from "@/component/common/Bred";
import ServiceCards from "@/component/service/Servicelist";
export default function page() {
  return (
    <>
      <Breadcrumb
        title="Nos services informatiques"
        subtitle="SwitzerIT propose une gamme complète de services informatiques pour accompagner entreprises et particuliers dans tous leurs besoins IT."
        extra="Du simple dépannage à la gestion complète de votre infrastructure, notre équipe d'experts met son savoir-faire à votre service. Découvrez ci-dessous nos principaux services et contactez-nous pour toute demande spécifique."
      />
      <ServiceCards />
    </>
  )
}
