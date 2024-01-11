//== Components
import { PageHeader, ContactForm } from "@/components";
//= Api
import { getAllSettings } from '@/API/pages';

export async function generateMetadata() {
  return {
    title: `حواس - تواصل معنا`,
    description: 'تواصل مع حواس - اتصل بنا للحصول على المزيد من المعلومات أو للإبلاغ عن أي استفسارات أو مقترحات'
  }
}

const ContactUs: React.FC = async () => {
  let settingsData: Awaited<ReturnType<typeof getAllSettings>> | null = null;

  try {
    const data = await getAllSettings();
    if (data) settingsData = data;
  } catch (err) { }

  return (
    <>
      <PageHeader title="تواصل معنا" />
      <ContactForm data={settingsData} />
    </>
  );
}

export default ContactUs;