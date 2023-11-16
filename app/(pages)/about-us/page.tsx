import { PageHeader, AboutDetails, Video, CountUp, Testimonials, Partners } from "@/components";

interface AboutProps { }

export const metadata = {
  title: 'Hawas | About Us',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <PageHeader title="من نحن !؟" />
      <AboutDetails />
      <Video />
      <CountUp />
      <Testimonials />
      <Partners />
    </>
  );
}

export default About;