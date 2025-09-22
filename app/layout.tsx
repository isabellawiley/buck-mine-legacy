import type { Metadata } from "next";
import { Carrois_Gothic, Carrois_Gothic_SC, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/ui/sidenav";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";


const carroisGothic = Carrois_Gothic({
  variable: "--font-carrois-gothic",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  style: ["normal"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buck Mine Legacy",
  description: "Maintaining the legacy of the Buck Mine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${carroisGothic.className} bg-amber-50 flex`}>
        {/* <SideNav /> */}
        <SidebarProvider>
          <AppSidebar/>
          <main>
            {/* <SidebarTrigger /> */}
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
