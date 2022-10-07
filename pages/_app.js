import "../components/css/layout.scss";
import "../components/css/dashboard.scss";
import { motion } from "framer-motion";

export default function MyApp({ Component, pageProps, router }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}
