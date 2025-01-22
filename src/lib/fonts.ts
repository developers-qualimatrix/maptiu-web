import { Poppins, Mona_Sans as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontHeading = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
})

