//== Components
import { PageHeader, Policy as PolicyComponent } from "@/components";
//= Api
import { getPrivacy } from '@/API/pages';
//= Types
import type { PrivacyData } from "@/types";

const Policy: React.FC = async () => {
  let privacyData: PrivacyData | null = null;

  try {
    const data = await getPrivacy();
    if (data) privacyData = data;
  } catch (err) { }

  return (
    <>
      <PageHeader title="سياسة الخصوصية" />
      <PolicyComponent data={privacyData} />
    </>
  );
}

export default Policy;