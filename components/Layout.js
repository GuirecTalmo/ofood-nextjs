import Navbar from "./navbar";
import Footer from "./footer";
import "normalize.css";

export default function Layout({ children }) {
  return (
    <div className="main-container">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
