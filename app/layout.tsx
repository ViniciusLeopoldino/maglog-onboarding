import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onboarding Maglog | Rota de Sucesso",
  description: "Trilha de boas-vindas para colaboradores Maglog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-maglog-gray min-h-screen font-sans">
        <main>{children}</main>
      </body>
    </html>
  );
}