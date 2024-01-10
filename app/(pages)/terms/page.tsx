//== Components
import { PageHeader, Terms as TermsComponent } from "@/components";
//= Api
import { getTerms } from '@/API/pages';
//= Types
import type { TermsData } from "@/types";

interface TermsProps { }

const Terms: React.FC<TermsProps> = async () => {
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