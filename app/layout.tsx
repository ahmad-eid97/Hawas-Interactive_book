//== Utils
import Providers from './providers';
//== Modules
import ThemeContextProvider from '@/styles/theme/theme';
import StoreProvider from '@/store/provider';
//== Styles
import '@/styles/global.scss';

export const metadata = {
  title: 'Hawas',
  description: 'Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="icon" href="/book.png" />
      </head>
      <body>
        <Providers>
          <StoreProvider>
            <ThemeContextProvider>
              {children}
            </ThemeContextProvider>
          </StoreProvider>
        </Providers>
      </body>
    </html>
  )
}
