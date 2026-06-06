import "../styles/index.css";
import { useLenis } from "../Hooks/useLenis";
import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import EventPopup from "@/components/EventPopup";
import EidOfferPopup from "@/components/EidOfferPopup";
function MyApp({ Component, pageProps }) {
  useLenis();
  return (
    <Layout>
      <Script
        src="//code.tidio.co/ajdkwkyf6xekmj1gsudb5gljmvuswyyc.js"
        strategy="afterInteractive"
      />
      {/* <EventPopup /> */}
      {/* <EidOfferPopup /> */}
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
export default MyApp;
