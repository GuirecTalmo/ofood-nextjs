import NavDashboard from "./navDashboard";
import Footer from "./footer";
import "normalize.css";

// How to do this in your case?

// Well, the best way is to use a CSS base, lets take normalize.css for example.

// Run yarn add normalize.css or npm i normalize.css, depending on whichever you are using.

// Add import 'normalize.css'; in each of the page you want to use the base on. Official Docs.

export default function DashboardLayout({ children }) {
  return (
    <div className="main-container">
      <NavDashboard />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
