import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"
import { AppSidebar } from "@/components/ui/app-sidebar";
import Header from "@/components/ui/Header";
import { SidebarProvider } from "@/components/ui/sidebar";



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

export const metadata: Metadata = {
  title: "Track Music",
  description: "Music for the soul",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-hidden`}>
        <SidebarProvider>
          <div className="flex h-screen overflow-hidden">
            <AppSidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header />
              <main className="flex-1 overflow-auto">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
