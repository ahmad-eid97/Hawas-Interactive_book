//== Components
import { Navbar, Footer } from '@/components';
//= Api
import { getAllMenus, getFooterLinks, getFooterSocialLinks } from '@/API/pages';
//= Types
import type { FooterItem, FooterSocialLinks, MenuItem } from "@/types";

interface PagesLayoutProps {
  children: React.ReactNode
}

const PagesLayout = async ({ children }: PagesLayoutProps) => {
  let menus: MenuItem[] = [];
  let footerLinksData: FooterItem[] = [];
  let footerSocialLinksData: FooterSocialLinks | null = null;

  try {
    const data = await getAllMenus();
    if (data) menus = data;
  } catch (err) { }

  try {
    const data = await getFooterLinks();
    if (data) footerLinksData = data;
  } catch (err) { }

  try {
    const data = await getFooterSocialLinks();
    if (data) footerSocialLinksData = data;
  } catch (err) { }

  return (
    <>
      <Navbar menus={menus} />
      {children}
      <Footer data={{ links: footerLinksData, socialLinks: footerSocialLinksData }} />
    </>
  )
}

export default PagesLayout