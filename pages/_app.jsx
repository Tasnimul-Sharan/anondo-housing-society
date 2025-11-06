import "../styles/index.css";
import { useLenis } from "../Hooks/useLenis";
import Layout from "@/components/Layout";
function MyApp({ Component, pageProps }) {
  useLenis();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
