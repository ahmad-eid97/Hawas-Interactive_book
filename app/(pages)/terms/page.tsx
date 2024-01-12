//== Components
import { PageHeader, Terms as TermsComponent } from "@/components";
//= Api
import { getTerms } from '@/API/pages';
//= Types
import type { TermsData } from "@/types";

export async function generateMetadata() {
  return {
    title: `حواس - الشروط و الاحكام`,
    description: 'شروط الاستخدام لحواس - اطلع على البنود والشروط التي تحكم استخدام موقعنا والتفاعل مع خدماتنا'
  }
}

const Terms: React.FC = async () => {
  let termsData: TermsData | null = null;

  try {
    const data = await getTerms();
    if (data) termsData = data;
  } catch (err) { }

  return (
    <>
      <PageHeader title="الشروط والأحكام" />
      <TermsComponent data={termsData} />
    </>
  );
}

export default Terms;