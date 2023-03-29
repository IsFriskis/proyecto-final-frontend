import { CustomFooter } from "src/components/footer/Footer";
import { CustomNavBar } from "src/components/navBar/NavBar";

export const Layout = ({ children }:any) => {
    return (
      <div>
        <CustomNavBar />
        <div>{children}</div>
        <CustomFooter />
      </div>
    );
  };