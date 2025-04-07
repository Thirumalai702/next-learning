export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      <h1 style={{backgroundColor:"lightskyblue"}}>Header</h1>
        {children}
        <h1 style={{backgroundColor:"lightskyblue"}}>Footer</h1>
      </body>
    </html>
  );
}
