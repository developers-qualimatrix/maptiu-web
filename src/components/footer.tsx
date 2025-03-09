"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "./icons/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="container py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="font-heading text-2xl inline-block">
              <Image
                src="/assets/maptiu_logo_white.png"
                alt="Maptiu Logo"
                width={108}
                height={64}
              />
            </Link>
            <p className="mt-4 text-sm text-zinc-400">
              Connecting companies with talent innovatively.
            </p>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="font-heading text-lg mb-4">Solutions</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/mapIt"
                className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Map It
              </Link>
              <Link
                href="/hire-it"
                className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Hire It
              </Link>
              <Link
                href="/staffIt"
                className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Staff It
              </Link>
            </nav>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-heading text-lg mb-4">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about-us"
                className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                About
              </Link>
              <Link
                href="/careers"
                className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Careers
              </Link>
              <Link
                href="/leadership"
                className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Leaders
              </Link>
              <Link
                href="/contact-us"
                className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect with Us (Social Media Section) */}
          <div>
            <h3 className="font-heading text-lg mb-4">Connect with Us</h3>
            <div className="flex space-x-4 cursor-pointer z-50">
              <a
                href="https://www.facebook.com/people/Maptiu-Technologies/61572666852590/"
                aria-label="Facebook"
                target="_blank"
                className="cursor-pointer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/maptiu_technologies/"
                aria-label="Instagram"
                target="_blank"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/maptiu"
                aria-label="Linkedin"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://x.com/Maptiu_Tech"
                aria-label="Twitter"
                target="_blank"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="flex-grow text-center">
            <p className="text-sm text-zinc-400">
              © 2025 Maptiu. All rights reserved.
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-zinc-400 transition-all duration-300 hover:bg-white/20 hover:text-white hover:-translate-y-1"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}

// interface SocialLinkProps {
//   href: string;
//   icon: string | ReactNode; // Allow both strings and ReactNode (JSX elements)
// }

// function SocialLink({ href, icon }: SocialLinkProps) {
//   return (
//     <Link
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-[#7ED957] hover:text-[#7ED957]/80 transition-colors"
//     >
//       <span className="sr-only">{icon}</span>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-6 w-6 sm:h-8 sm:w-8"
//       >
//         {/* Check if the icon is a string, and render accordingly */}
//         {typeof icon === "string" && icon === "facebook" && (
//           <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//         )}
//         {typeof icon === "string" && icon === "twitter" && (
//           <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//         )}
//         {typeof icon === "string" && icon === "linkedin" && (
//           <>
//             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//             <rect width="4" height="12" x="2" y="9" />
//             <circle cx="4" cy="4" r="2" />
//           </>
//         )}
//         {typeof icon === "string" && icon === "instagram" && (
//           <>
//             <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//             <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//             <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//           </>
//         )}

//         {/* If the icon is a React component (e.g., <X />), render it directly */}
//         {typeof icon !== "string" && icon}
//       </svg>
//     </Link>
//   );
// }
