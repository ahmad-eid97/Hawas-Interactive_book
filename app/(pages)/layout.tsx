//== Components
import { Navbar, Footer } from '@/components';

interface PagesLayoutProps {
  children: React.ReactNode
}

const PagesLayout = ({ children }: PagesLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default PagesLayout