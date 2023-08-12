//== Components
import { PageHeader, PortfolioDetails as PortfolioDetailsComponent } from '@/components';

interface PortfolioDetailsProps { }

const PortfolioDetails: React.FC<PortfolioDetailsProps> = () => {
  return (
    <>
      <PageHeader title='تفاصيل المشروع' />
      <PortfolioDetailsComponent />
    </>
  );
}

export default PortfolioDetails;