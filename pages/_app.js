import Layout from "../components/Layout";
import "../components/css/layout.scss";
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
