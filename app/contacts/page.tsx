import { DevelopmentPage } from "@/components/development-page";
import { CallToActionSection } from "@/components/call-to-action-section";
import { AddressSection } from "@/components/address-section";

export default function ContactsPage() {
  return (
    <DevelopmentPage
      title="Контакты"
      description="Свяжитесь с нами, чтобы обсудить проект, получить консультацию и рассчитать стоимость работ."
      imageSrc="/images/contacts/contacts-root.png"
      imageAlt="Контакты"
    >
      <CallToActionSection
        text="ЗВОНИ, осуществи свою мечту о красивом заборе!"
        phoneNumber="8-965-938-33-73"
      />

      <AddressSection
        description="Наши офисы там, где работают наши монтажные бригады, а значит это вся Россия! Чтобы наши клиенты не тратили своё время, выездами в офис, из пригорода, или с отдаленных районов города, каждая бригада имеет полный комплект образцов и веер цветов, чтобы показать на объекте варианты жалюзи, штакетника и проконсультировать по наилучшему выбору"
        imageSrc="/images/contacts/worker.png"
        imageAlt="Специалист компании ЗАБОРСКИЙ"
      />
    </DevelopmentPage>
  );
}
