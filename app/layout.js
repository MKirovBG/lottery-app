import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import coinIcon from "../images/coinIcon.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lottery App",
  description: "Add some description as you look dumb!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar">
            <ul>
              <Link href="/">
                <Image
                  src={coinIcon}
                  width={25}
                  height={25}
                  alt="Coin Icon"
                />
              </Link>
              <li className={inter.className}>
                <Link href="/competitions">Completitions</Link>
              </li>
              <li className={inter.className}>
                <Link href="/about">About</Link>
              </li>
              <li className={inter.className}>
                <Link href="/login">Login</Link>
              </li>
              <li className={inter.className}>
                <Link href="/register">Register</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="flex flex-col items-center justify-between">
          <div className="copyRight">
            Copyright ©<span>2024</span>. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
