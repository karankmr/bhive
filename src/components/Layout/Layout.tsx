import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.scss";

const Layout = ({ children }: any) => {
  return (
    <div className="bhive-app">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
