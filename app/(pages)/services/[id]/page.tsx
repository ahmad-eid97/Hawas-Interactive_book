//== Components
import { PageHeader, Services as ServicesComponent } from "@/components";
//= Api
import { getServiceById } from "@/API/pages";
//= Types
import type { IService } from '@/types';

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