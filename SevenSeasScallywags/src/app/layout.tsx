import { Geist, Geist_Mono } from "next/font/google";
import ClientSideNav from '../app/ClientSideNav';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundImage: "url('/images/background.jpg')" }}>
        <nav style={{ backgroundColor: '#3c2222' }} className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md pirata">
          <div>
            <a href="/">
              <p className="text-4xl text-white">Scallywags Stash</p>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <ClientSideNav /> {/* Use the ClientSideNav component here */}
          </div>
        </nav>
        {children} {/* Render the page content here */}
      </body>
    </html>
  );
}
