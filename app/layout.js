// app/layout.js

import { Providers } from 'app/providers'
import Navbar from './components/Navbar'
import Carousel
 from './components/Carousel'

export const metadata = {
  title: 'Dan\'s Blog',
  description: 'The personal blog of Dan Kennedy, web developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <Carousel />
          {children}
        </Providers>
      </body>
    </html>
  )
}