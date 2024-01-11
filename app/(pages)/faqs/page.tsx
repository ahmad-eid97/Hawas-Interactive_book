//== Components
import { PageHeader, FAQsList } from '@/components';
//= Api
import { getAllFaqs } from '@/API/pages';
//= Types
import type { FAQItem } from "@/types";

interface FAQsProps { }

const FAQs: React.FC<FAQsProps> = async () => {
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