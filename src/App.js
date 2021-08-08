import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";
import { InfoData } from "./data/InfoData";
import GlobalStyle from "./globalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      {/* {isOpen && <Dropdown toggle ={toggle} isOpen={isOpen} />} */}
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
    </>
  );
}

export default App;
