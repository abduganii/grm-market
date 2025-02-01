import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import NextTopLoader from 'nextjs-toploader';
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
      <NextTopLoader
      color="#2299DD"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
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
