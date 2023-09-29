import './globals.css'

export const metadata = {
  title: 'Productos',
  description: 'Productores líderes en flores y hortalizas cortadas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
