import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import bgImage from "../../assets/background.svg";
import bgMobileImage from "../../assets/background-mobile.svg";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <img src={bgImage} alt="background" className="background" />
      <img src={bgMobileImage} alt="background" className="mobile-background" />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
