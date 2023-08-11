//== Components
import { PageHeader, ServicesList } from "@/components";

interface ServicesProps { }

const Services: React.FC<ServicesProps> = () => {
  return (
    <>
      <PageHeader title="خدماتنا" />
      <ServicesList />
    </>
  );
}

export default Services;