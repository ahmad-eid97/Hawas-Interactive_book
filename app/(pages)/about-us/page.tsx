import { PageHeader, AboutDetails, Video, CountUp, Testimonials, Partners } from "@/components";
//= Api
import { getWhyChooseUsSection, getCounters, getAllTestimonials, getAboutSection } from '@/API/pages';
//= Types
import type { Testimonial } from "@/types";

interface AboutProps { }

export const metadata = {
  title: 'Hawas | About Us',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
}

const About: React.FC<AboutProps> = async () => {
  let aboutData: Awaited<ReturnType<typeof getAboutSection>> | null = null;
  let videoData: Awaited<ReturnType<typeof getWhyChooseUsSection>> | null = null;
  let countersData: Awaited<ReturnType<typeof getCounters>> | null = null;
  let testimonialsData: Testimonial[] = [];

  try {
    const data = await getAboutSection();
    if (data) aboutData = data;
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
    const data = await getAllTestimonials({ limit: 6 });
    if (data) testimonialsData = data;
  } catch (err) { }

  return (
    <>
      <PageHeader title="من نحن !؟" />
      <AboutDetails data={aboutData} />
      <Video data={videoData} />
      <CountUp data={countersData} />
      <Testimonials data={testimonialsData} />
    </>
  );
}

export default About;