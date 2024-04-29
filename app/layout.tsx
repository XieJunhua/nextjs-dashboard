import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
      {/* <body className={`${inter.className} antialiased`}>{children}</body> */}
      {/* <h1 className="text-blue-500">Hello</h1> */}
    </html>
  );
}
