import '../globals.css'

export const metadata = {
  title: 'Cadastrar',
  description: 'Parte de criação e login de usuário',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <body >
          {children}
      </body>
    </html>
  )
}