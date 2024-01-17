//== Components
import { Navbar, Footer, Banner, MainSections, Experince, Video, Courses, EventsList, CountUp, News, Gallery } from "@/components";
//= Api
import { getAllCourses, getAllSliders, getAllMenus, getAllCategories, getAllBlogs, getExperinceSection, getWhyChooseUsSection, getCounters, getAllGalleries, getAllEvents, getFooterLinks, getFooterSocialLinks, getAllSettings } from '@/API/pages';
//= Types
import type { Course, Slider, MenuItem, Blog, GalleryItem, IEvent, FooterItem, FooterSocialLinks, ICategory } from "@/types";


export async function generateMetadata() {
  return {
    title: `حواس - الرئيسية`,
    description: 'استكشف عالم حواس لتنمية الصحة والأمان - اكتشف مواردنا المتنوعة لدعم حياة صحية وآمنة'
  }
}

export default async function Home() {
  let menus: MenuItem[] = [];
  let headerData: Slider | null = null;
  let coursesData: Course[] = [];
  let categoriesData: ICategory[] = [];
  let blogsData: Blog[] = [];
  let eventsData: IEvent[] = [];
  let videoData: Awaited<ReturnType<typeof getWhyChooseUsSection>> | null = null;
  let experinceData: Awaited<ReturnType<typeof getExperinceSection>> | null = null;
  let countersData: Awaited<ReturnType<typeof getCounters>> | null = null;
  let galleryData: GalleryItem[] = [];
  let footerLinksData: FooterItem[] = [];
  let footerSocialLinksData: FooterSocialLinks | null = null;
  let settingsData: Awaited<ReturnType<typeof getAllSettings>> | null = null;

  try {
    const data = await getAllMenus();
    if (data) menus = data;
  } catch (err) { }

  try {
    const data = await getAllSliders();
    if (data) headerData = data;
  } catch (err) { }

  try {
    const data = await getAllCategories({ limit: 6 });
    if (data) categoriesData = data;
  } catch (err) { }

  try {
    const data = await getAllCourses({ limit: 6 });
    if (data) coursesData = data;
  } catch (err) { }

  try {
    const data = await getAllBlogs({ limit: 3 });
    if (data) blogsData = data;
  } catch (err) { }

  try {
    const data = await getAllEvents({ limit: 4 });
    if (data) eventsData = data;
  } catch (err) { }

  try {
    const data = await getExperinceSection();
    if (data) experinceData = data;
  } catch (err) { }

  try {
    const data = await getWhyChooseUsSection();
    if (data) videoData = data;
  } catch (err) { }

  try {
    const data = await getCounters();
    if (data) countersData = data;
  } catch (err) { }

  try {
    const data = await getAllGalleries({ limit: 6 });
    if (data) galleryData = data;
  } catch (err) { }

  try {
    const data = await getFooterLinks();
    if (data) footerLinksData = data;
  } catch (err) { }

  try {
    const data = await getFooterSocialLinks();
    if (data) footerSocialLinksData = data;
  } catch (err) { }

  try {
    const data = await getAllSettings();
    if (data) settingsData = data;
  } catch (err) { }

  return (
    <>
      <Navbar menus={menus} settingsData={settingsData} />
      <Banner data={headerData} />
      <MainSections data={categoriesData} />
      <Experince data={experinceData} />
      <Video data={videoData} />
      <Courses data={coursesData} />
      <EventsList data={eventsData} />
      <CountUp data={countersData} />
      <News data={blogsData} />
      <Gallery data={galleryData} />
      <Footer data={{ links: footerLinksData, settingsData }} />
    </>
  )
}
