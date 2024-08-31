import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { isUserConnected } from "@/lib/utils";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import AuthLayout from "@/components/admin/AuthLayout";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raed Rdhaounia",
  description: "portfolio for  a software developer Raed Rdhaounia",
};

export default async function RootLayout({
  backOffice,
  children,
}: {
  readonly children: React.ReactNode;
  readonly backOffice: React.ReactNode;
}) {
  const isConnected = await isUserConnected();
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
      <NextIntlClientProvider messages={messages}>
      <section>{isConnected ? 
            <AuthLayout>{backOffice}</AuthLayout>: children}</section>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
