//== Components
import { Navbar, Footer, Banner, MainSections, Events, Video, Courses, EventsList, CountUp, News, Gallery } from "@/components";

export const metadata = {
  title: 'Hawas',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <MainSections />
      <Events />
      <Video />
      <Courses />
      <EventsList />
      <CountUp />
      <News />
      <Gallery />
      <Footer />
    </>
  )
}
