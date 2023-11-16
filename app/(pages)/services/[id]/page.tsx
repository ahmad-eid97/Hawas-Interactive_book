//== Components
import { PageHeader, Services as ServicesComponent } from "@/components";

interface ServicesProps { }

const ServiceDetails: React.FC<ServicesProps> = () => {
  return (
    <>
      <PageHeader title="خدمة حواس" />
      <ServicesComponent />
    </>
  );
}

export default ServiceDetails;