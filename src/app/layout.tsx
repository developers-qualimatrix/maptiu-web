import { Navigation } from "@/components/navigation"
import { fontSans, fontHeading } from "../lib/fonts"
import { PageTransition } from "@/components/page-transition"
import { Footer } from "@/components/footer"
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${fontSans.variable} ${fontHeading.variable} font-sans`}>
        <Navigation />
        <PageTransition>
          <main>{children}</main>
          <Toaster />
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
