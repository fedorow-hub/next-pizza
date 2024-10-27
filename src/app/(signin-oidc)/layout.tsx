import { Header } from '@/components/shared/header';

export default async function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Header hasCart={false} hasSearch={false} className="border-gray-200" />
      {children}
    </main>
  );
}
