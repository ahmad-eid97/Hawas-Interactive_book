//== Components
import { PageHeader, Terms as TermsComponent } from "@/components";

interface TermsProps { }

const Terms: React.FC<TermsProps> = () => {
  return (
    <>
      <PageHeader title="الشروط والأحكام" />
      <TermsComponent />
    </>
  );
}

export default Terms;