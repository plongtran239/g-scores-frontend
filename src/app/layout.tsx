import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import AppHeader from '@/components/app-header';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import QueryProvider from '@/providers/query.provider';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: 'G-Scores',
  description: 'G-Scores',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        <QueryProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <AppHeader />
              {children}
            </SidebarInset>
          </SidebarProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
