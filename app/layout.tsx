// import { Tajawal } from 'next/font/google'
//== Utils
import Providers from './providers';
//== Modules
import ThemeContextProvider from '@/styles/theme/theme';
import StoreProvider from '@/store/provider';
import { Toaster } from 'react-hot-toast';
//== Styles
import '@/styles/global.scss';
import '/node_modules/react-modal-video/scss/modal-video.scss';

export const metadata = {
  title: 'Hawas',
  description: 'Experience the power of a dynamic book designed specifically for primary school children, offering an immersive journey filled with captivating visuals, hands-on exercises, and vibrant storytelling to foster a love for learning',
}

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ar">
      <head>
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans+Arabic:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{
            zIndex: 999999999
          }}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
              background: '#fff',
              color: '#000'
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
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 99999,
                background: '#111827',
                color: '#e5e7eb',
                fontSize: '13px',
                fontFamily: '"Playpen Sans Arabic", sans-serif',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '7px 16px',
                textAlign: 'center',
              }}>
                <span>
                  .This is a <strong style={{ color: '#fff' }}>demo</strong> for portfolio — the real website is offline. All content is static placeholder data
                </span>
                <span style={{
                  background: '#f59e0b',
                  color: '#111827',
                  fontWeight: 700,
                  fontSize: '11px',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  letterSpacing: '0.05em',
                  flexShrink: 0,
                }}>DEMO</span>
              </div>
              <div style={{ paddingTop: '33px' }}>
                {children}
              </div>
            </ThemeContextProvider>
          </StoreProvider>
        </Providers>
      </body>
    </html>
  )
}
