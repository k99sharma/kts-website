// importing custom components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// layout component
export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__navbar">
        <Navbar />
      </div>
      {children}
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}
