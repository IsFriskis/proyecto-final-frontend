import React from "react";
import { CustomFooter } from "src/components/footer/Footer";
import { HomeContent } from "src/components/homeContent/HomeContent";
import { CustomNavBar } from "../../components/navBar/NavBar";

export const HomePage = () => {
  return (
    <>
      <CustomNavBar />
      <HomeContent />
      <CustomFooter />
    </>
  );
};