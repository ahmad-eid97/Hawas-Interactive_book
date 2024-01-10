//== Components
import { PageHeader, ContactForm } from "@/components";
//= Api
import { getAllSettings } from '@/API/pages';

interface ContactProps { }

export const metadata = {
  title: 'Hawas | Contact Us',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
}

const ContactUs: React.FC<ContactProps> = async () => {
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