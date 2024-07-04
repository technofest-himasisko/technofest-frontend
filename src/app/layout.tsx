import type { Metadata } from "next";
import "@/ui/globals.css";
import { extatica } from "@/ui/fonts";
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

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang={config.appLang} className="scroll-smooth">
      <body className={cn(extatica.className, "flex min-h-dvh flex-col")}>
        {children}
      </body>
    </html>
  );
}
