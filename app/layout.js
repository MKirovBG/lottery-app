import { Roboto } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import coinIcon from "./images/coinIcon.png";
import Link from "next/link";

const inter = Roboto({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "Lottery App",
  description: "Add some description as you look dumb!!",
};

export default function RootLayout({ children }) {
  // Assuming currentUser represents the authentication status
  const currentUser = false;

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col max-h-screen">
          <header>
            <nav className="navbar">
              <ul>
                <li>
                  <Link href="/" className="logo">
                    <Image
                      src={coinIcon}
                      width={30}
                      height={30}
                      alt="Coin Icon"
                    />
                  </Link>
                </li>
              </ul>
              <ul>
                <li className={inter.className}>
                  <Link href="/competitions">Completitions</Link>
                </li>
                <li className={inter.className}>
                  <Link href="/about">About</Link>
                </li>
                {!currentUser ? (
                  <>
                    <li className={inter.className}>
                      <Link href="/login">Login</Link>
                    </li>
                    <li className={inter.className}>
                      <Link href="/register">Register</Link>
                    </li>
                  </>
                ) : (
                  <li className={inter.className}>
                    <Link href="/logout">Logout</Link>
                  </li>
                )}
              </ul>
            </nav>
          </header>
          {children}
          <footer className="flex flex-col items-center justify-between">
            <div className="copyRight">
              Copyright ©<span>2024</span>. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
