import { fontSans, fontHeading } from "@/lib/fonts"
import { Navigation } from "./navigation"
import { Footer } from "./footer"
import { PageTransition } from "./page-transition"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen ${fontSans.variable} ${fontHeading.variable} font-sans`}>
      <Navigation />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
    </div>
  )
}

