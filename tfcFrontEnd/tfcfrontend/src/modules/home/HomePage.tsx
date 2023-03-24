import React from "react";
import { CustomFooter } from "src/components/footer/Footer";
import { HomeContent } from "src/components/homeContent/HomeContent";
import { CustomNavBar } from "../../components/navBar/NavBar";

/**
 * 
 * crear un fichero actions.ts con las acciones que se pueden realizar e implican un cambio en el estado de la aplicacion
 * usar los hooks de useDispatch y useSelector para procesar acciones y consultar partes de estado de redux respectivamente
 */
export const HomePage = () => {
  return (
    <>
      <CustomNavBar />
      <HomeContent />
      <CustomFooter />
    </>
  );
};
