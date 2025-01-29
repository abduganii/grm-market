import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import "../globals.css";
import FixedLayout from "../../components/fixed-layout";
import StoreProvider from "./store-provider";


export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
          {children}
          <FixedLayout/>
        </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
