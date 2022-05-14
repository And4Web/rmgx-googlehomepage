import React from "react";
import "./homepage.css";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";

export default function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
