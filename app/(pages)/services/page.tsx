//== Components
import { PageHeader, ServicesList } from "@/components";
//= Api
import { getAllServices } from "@/API/pages";
//= Types
import type { IService } from '@/types';

export async function generateMetadata() {
  return {
    title: `حواس - خدماتنا`,
    description: 'خدمات حواس لتنمية الصحة والأمان - استفد من مجموعة متنوعة من الخدمات المصممة لتعزيز صحتك وضمان سلامتك'
  }
}

const Services: React.FC = async () => {
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