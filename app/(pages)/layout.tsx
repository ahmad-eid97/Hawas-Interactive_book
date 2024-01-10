//== Components
import { Navbar, Footer } from '@/components';
//= Api
import { getAllMenus } from '@/API/pages';
//= Types
import type { MenuItem } from "@/types";

interface PagesLayoutProps {
  children: React.ReactNode
}

const PagesLayout = async ({ children }: PagesLayoutProps) => {
  let menus: MenuItem[] = [];

  try {
    const data = await getAllMenus();
    if (data) menus = data;
  } catch (err) { }

  return (
    <>
      <Navbar menus={menus} />
      {children}
      <Footer />
    </>
  )
}

export default PagesLayout