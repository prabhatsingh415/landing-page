import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import List from "./components/List";
import AddYourOwn from "./components/AddYourOwn";
import Testimonial from "./components/Testimonial";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="mt-[64px] md:mt-[88px] flex flex-col justify-center items-center">
        <Home />
        <List />
        <AddYourOwn />
        <Testimonial />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}

export default App;
