import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import bgImage from "../../assets/background.svg";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <img src={bgImage} alt="background" />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
