import type { Metadata } from "next";
import "@/ui/globals.css";
import { goodTimes } from "@/ui/fonts";
import { cn } from "@/lib/utils";
import config from "@/config";

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
      <body className={cn(goodTimes.className, "overflow-hidden")}>
        {children}
      </body>
    </html>
  );
}
