import Breadcrumb from "@/component/common/Bred";
import ContactSection from "@/component/contact/Contactform";

export default function page() {
    return (
        <div>
            <Breadcrumb
                title="Contactez-nous"
                subtitle="Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner"
                extra="Que vous ayez besoin d'un simple renseignement, d'une consultation gratuite ou d'un devis personnalisé, n'hésitez pas à nous contacter. Nous nous engageons à vous répondre dans les 24 heures ouvrées."
            />
            <ContactSection />
        </div>
    )
}
