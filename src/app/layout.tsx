import type { Metadata } from "next";
import "@/ui/globals.css";
import { extatica } from "@/ui/fonts";
import { cn } from "@/lib/utils";
import config from "@/config";
import Header from "@/ui/organisms/header";
import Footer from "@/ui/organisms/footer";

export const metadata: Metadata = {
  metadataBase: new URL(config.baseUrl),
  title: {
    template: `%s | ${config.baseMetadata.title}`,
    default: config.baseMetadata.title,
  },
  description: config.baseMetadata.description,
  keywords: config.baseMetadata.keywords,
  openGraph: {
    title: config.appName,
    url: config.baseUrl,
    description: config.baseMetadata.description,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={config.appLang}>
      <body className={cn(extatica.className)}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
