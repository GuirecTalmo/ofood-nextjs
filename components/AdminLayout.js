import AdminNavDashboard from "./adminNavbar";
import AdminLeftNavBarDashboard from "./adminLeftNavbard";
import Footer from "./footer";
import "normalize.css";

export default function AdminLayout({ children }) {
  return (
    <div className="main-container">
      <AdminNavDashboard />
      <AdminLeftNavBarDashboard />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
