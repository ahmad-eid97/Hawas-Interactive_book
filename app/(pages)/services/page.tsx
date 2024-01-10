//== Components
import { PageHeader, ServicesList } from "@/components";
//= Api
import { getAllServices } from "@/API/pages";
//= Types
import type { IService } from '@/types';

interface ServicesProps { }

const Services: React.FC<ServicesProps> = async () => {
  let services: IService[] = [];

  try {
    const data = await getAllServices();
    if (data) services = data;
  } catch (err) { }

  return (
    <>
      <PageHeader title="خدماتنا" />
      <ServicesList data={services} />
    </>
  );
}

export default Services;