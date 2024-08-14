import React from "react";
import Navabar from "../components/Navabar";
import Footer from "../components/Footer";
import Details from "../components/Details";

const DetailsData = () => {
  return (
    <div>
      <Navabar />
      <div className="min-h-screen">
        <Details />
      </div>
      <Footer />
    </div>
  );
};

export default DetailsData;
