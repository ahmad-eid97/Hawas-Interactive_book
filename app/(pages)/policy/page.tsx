//== Components
import { PageHeader, Policy as PolicyComponent } from "@/components";

interface TermsProps { }

const Policy: React.FC<TermsProps> = () => {
  return (
    <>
      <PageHeader title="سياسة الخصوصية" />
      <PolicyComponent />
    </>
  );
}

export default Policy;