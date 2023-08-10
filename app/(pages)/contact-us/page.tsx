//== Components
import { PageHeader, ContactForm } from "@/components";

interface ContactProps { }

export const metadata = {
  title: 'Hawas | Contact Us',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      <PageHeader title="تواصل معنا" />
      <ContactForm />
    </>
  );
}

export default Contact;