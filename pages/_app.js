import "../components/css/layout.scss";
import "../components/css/dashboard.scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3E8Ugz3EyJuC_vSAGwwzLfWGY3DjJ2_I",
  authDomain: "ofood-433eb.firebaseapp.com",
  projectId: "ofood-433eb",
  storageBucket: "ofood-433eb.appspot.com",
  messagingSenderId: "862597896066",
  appId: "1:862597896066:web:d576ab213f757797a7619b",
  measurementId: "G-TSND1TNWVE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
