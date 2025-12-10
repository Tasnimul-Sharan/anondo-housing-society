import "../styles/index.css";
import { useLenis } from "../Hooks/useLenis";
import Layout from "@/components/Layout";
import TranslateBox from "@/components/TranslateBox";
function MyApp({ Component, pageProps }) {
  useLenis();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
