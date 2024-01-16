//== Utils
import Providers from './providers';
//== Modules
import ThemeContextProvider from '@/styles/theme/theme';
import StoreProvider from '@/store/provider';
import { Toaster } from 'react-hot-toast';
//== Styles
import '@/styles/global.scss';
import 'node_modules/react-modal-video/scss/modal-video.scss';

export const metadata = {
  title: 'Hawas',
  description: 'Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning',
}

export const dynamic = 'force-dynamic';

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
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
              background: '#fff',
              color: '#000',
            },

            // Default options for specific types
            success: {
              duration: 3000,
              // @ts-ignore
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
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
