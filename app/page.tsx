import Link from "next/link";

export const metadata = {
  title: 'Hawas',
  description: "Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning"
}

export default function Home() {
  return (
    <main>
      <h1><i className="fa-regular fa-house"></i> Home Page</h1>
      <div>
        <Link href="/books">Books</Link>
      </div>
      <Link href="/login">Login</Link>
    </main>
  )
}
