import React from "react";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import AllReview from "../AllReview/AllReview";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <Header />
      <Banner></Banner>
      <Products/>
      <AllReview /> 
      <Faq />
      <Footer></Footer>
    </>
  );
};

export default Home;
