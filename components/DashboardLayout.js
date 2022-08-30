import NavDashboard from "./navDashboard";
import LeftNavBarDashboard from "./leftNavDashboard";
import Footer from "./footer";
import "normalize.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="main-container">
      <NavDashboard />
      <LeftNavBarDashboard />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
