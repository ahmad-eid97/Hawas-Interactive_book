//== Components
import { PageHeader, FAQsList } from '@/components';
//= Api
import { getAllFaqs } from '@/API/pages';
//= Types
import type { FAQItem } from "@/types";

export async function generateMetadata() {
  return {
    title: `حواس - الدورات`,
    description: 'الأسئلة الشائعة حول حواس - استفد من إجاباتنا على الأسئلة الشائعة حول الخدمات والموارد التي نقدمها'
  }
}

const FAQs: React.FC = async () => {
  let faqsData: FAQItem[] = [];

  try {
    const data = await getAllFaqs();
    if (data) faqsData = data;
  } catch (err) { }

  return (
    <>
      <PageHeader title='أكثر الأسئلة شيوعاَ' />
      <FAQsList data={faqsData} />
    </>
  );
}

export default FAQs;