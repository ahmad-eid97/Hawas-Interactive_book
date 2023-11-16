//== Components
import { PageHeader, FAQsList } from '@/components';

interface FAQsProps { }

const FAQs: React.FC<FAQsProps> = () => {
  return (
    <>
      <PageHeader title='أكثر الأسئلة شيوعاَ' />
      <FAQsList />
    </>
  );
}

export default FAQs;