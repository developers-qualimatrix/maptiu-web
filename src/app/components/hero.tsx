"use client"
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-white text-white py-12 md:py-20 h-[80vh] content-center items-center" style={{
      backgroundImage: `url("data:image/svg+xml;charset=utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
    <g mask="url(&quot;#SvgjsMask1107&quot;)" fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="url(&quot;#SvgjsLinearGradient1108&quot;)"></rect>
        <path d="M1440 0L958.54 0L1440 108.48z" fill="rgba(255, 255, 255, .1)"></path>
        <path d="M958.54 0L1440 108.48L1440 272.82L596.1099999999999 0z" fill="rgba(255, 255, 255, .075)"></path>
        <path d="M596.11 0L1440 272.82L1440 378.2L484.20000000000005 0z" fill="rgba(255, 255, 255, .05)"></path>
        <path d="M484.20000000000005 0L1440 378.2L1440 413.69L219.05000000000007 0z" fill="rgba(255, 255, 255, .025)"></path>
        <path d="M0 560L5.13 560L0 530.82z" fill="rgba(0, 0, 0, .1)"></path>
        <path d="M0 530.82L5.13 560L657.18 560L0 446.32000000000005z" fill="rgba(0, 0, 0, .075)"></path>
        <path d="M0 446.32L657.18 560L909.9599999999999 560L0 346.76z" fill="rgba(0, 0, 0, .05)"></path>
        <path d="M0 346.76L909.9599999999999 560L1103.8799999999999 560L0 118.38z" fill="rgba(0, 0, 0, .025)"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1107">
            <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <linearGradient x1="15.28%" y1="-39.29%" x2="84.72%" y2="139.29%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1108">
            <stop stop-color="#0e2a47" offset="0"></stop>
            <stop stop-color="rgba(0, 158, 153, 1)" offset="1"></stop>
        </linearGradient>
    </defs>
</svg>`)}")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      <div className="container mx-auto px-4 text-center my-auto ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Connecting Companies with Talent Innovatively</h1>
        <p className="text-lg md:text-xl mb-8">Discover our innovative solutions for workforce management and talent acquisition</p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/about-us" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-bold mb-2 md:mb-0">Learn More</Link>
          <Link href="/contact-us" className="inline-block bg-transparent border-2 border-white px-6 py-2 rounded-full font-bold">Get Started</Link>
        </div>
      </div>
    </section>
  )
}

