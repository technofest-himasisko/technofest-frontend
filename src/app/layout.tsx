import Providers from "@/app/providers";
import config from "@/config";
import { cn } from "@/lib/utils/common";
import { extatica } from "@/ui/fonts";
import "@/ui/globals.css";
import type { Metadata } from "next";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
