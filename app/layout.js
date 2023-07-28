import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Context from '@/Components/context';
export const metadata = {
  title: 'Chryst Nelson Porfolio',
  description: 'Kindly check my porfolio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Context>

        {children}
        </Context>
        
        </body>
    </html>
  )
}
