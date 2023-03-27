import React from "react";
import { CustomFooter } from "src/components/footer/Footer";
import { CustomNavBar } from "../../components/navBar/NavBar";

export const NotFoundPage = () => {
  return (
    <>
      <CustomNavBar />
      <div className="NotFound">
        <h1> NOT FOUND 404</h1>
        <h2> CHECK URL </h2>
      </div>
      <CustomFooter />
    </>
  );
};
