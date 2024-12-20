import type { Metadata } from 'next';
import { Header } from '@/components/shared/header';

export const metadata: Metadata = {
  title: 'Next Pizza | Админка',
  description: 'Generated by create next app',
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[#DAD0C6]">
      <Header hasCart={false} hasSearch={false} className="border-gray-200" />
      {children}
    </main>
  );
}