//== Components
import { PageHeader, Policy as PolicyComponent } from "@/components";
//= Api
import { getPrivacy } from '@/API/pages';
//= Types
import type { PrivacyData } from "@/types";

export async function generateMetadata() {
  return {
    title: `حواس - سياسية الخصوصية`,
    description: 'سياسات حواس - اطلع على سياساتنا والالتزامات التي نلتزم بها لضمان تقديم خدمات ذات جودة وأمان'
  }
}

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