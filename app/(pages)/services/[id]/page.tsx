//== Components
import { PageHeader, Services as ServicesComponent } from "@/components";
//= Api
import { getServiceById } from "@/API/pages";
//= Types
import type { IService } from '@/types';

export async function generateMetadata() {
  return {
    title: `حواس - خدماتنا`,
    description: 'خدمات حواس لتنمية الصحة والأمان - استفد من مجموعة متنوعة من الخدمات المصممة لتعزيز صحتك وضمان سلامتك'
  }
}

interface ServicesProps {
  params: {
    id: number;
  }
}

const ServiceDetails: React.FC<ServicesProps> = async ({ params: { id } }) => {
  let serviceDetails: IService | null = null;

  try {
    const data = await getServiceById(id);
    if (data) serviceDetails = data;
  } catch (err) { }

  return (
    <>
      <PageHeader title={serviceDetails?.title ? 'خدمة ' + serviceDetails?.title : "خدمة حواس"} />
      <ServicesComponent data={serviceDetails} />
    </>
  );
}

export default ServiceDetails;