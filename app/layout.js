import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/component/Layout/Header/Navbar/Navbar";
import HomeFooter from "@/component/Layout/Footer/HomeFooter";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Meta Motion",
  description: "Its A meta motion app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <Navbar />
        </header>
        <main className="home_main">
          {children}
        </main>
        <footer>
          <HomeFooter/>
        </footer>
      </body>
    </html>
  );
}
