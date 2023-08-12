//== Components
import { PageHeader, Portfolio as PortfolioComponent } from "@/components";

interface PortfolioProps { }

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <>
      <PageHeader title="المشاريع" />
      <PortfolioComponent />
    </>
  );
}

export default Portfolio;