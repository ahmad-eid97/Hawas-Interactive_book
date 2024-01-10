//== Components
import { Navbar, Footer, Banner, MainSections, Experince, Video, Courses, EventsList, CountUp, News, Gallery } from "@/components";
//= Api
import { getAllCourses, getAllSliders, getAllMenus, getAllBlogs, getExperinceSection, getWhyChooseUsSection, getCounters, getAllGalleries, getAllEvents } from '@/API/pages';
//= Types
import type { Course, Slider, MenuItem, Blog, GalleryItem, IEvent } from "@/types";

export const metadata = {
  title: 'Hawas',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
}

export default async function Home() {
  let menus: MenuItem[] = [];
  let headerData: Slider | null = null;
  let coursesData: Course[] = [];
  let blogsData: Blog[] = [];
  let eventsData: IEvent[] = [];
  let videoData: Awaited<ReturnType<typeof getWhyChooseUsSection>> | null = null;
  let experinceData: Awaited<ReturnType<typeof getExperinceSection>> | null = null;
  let countersData: Awaited<ReturnType<typeof getCounters>> | null = null;
  let galleryData: GalleryItem[] = [];

  try {
    const data = await getAllMenus();
    if (data) menus = data;
  } catch (err) { }

  try {
    const data = await getAllSliders();
    if (data) headerData = data;
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

  return (
    <>
      <Navbar menus={menus} />
      <Banner data={headerData} />
      <MainSections />
      <Experince data={experinceData} />
      <Video data={videoData} />
      <Courses data={coursesData} />
      <EventsList data={eventsData} />
      <CountUp data={countersData} />
      <News data={blogsData} />
      <Gallery data={galleryData} />
      <Footer />
    </>
  )
}
