//== Components
import { PageHeader } from "@/components";
import GameShow from "@/components/Books/GameShow";
//== API
import { getAllGames } from "@/API/lessons";

export const metadata = {
  title: 'حواس - الالعاب التفاعلية',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
}

const Game = async ({ params: { title } }: { params: { title: string } }) => {
  const gamesList = await getAllGames();

  return (
    <>
      <PageHeader title="الالعاب التفاعلية" />
      <GameShow game={gamesList} title={title} />
    </>
  )
}

export default Game;