import { Navbar } from "./p2/Navbar";
import TextForm from "./p2/TextForm";
import { Aboutus } from "./p2/Aboutus";
import { useState } from "react";
import { ThapaForm } from "./p2/ThapaForm";
//import  from "./src/comp/BookList";
// import {Ud} from './p1/data';

const App = () => {
  const [mode, setMode] = useState("light");

  const changemode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.background='gray'
    } else {
      setMode("light");
      document.body.style.background='tomato'
    }
  };

  return (
    <>
      <div className="container-fluid">
        <p className=" text-success text-center bg-info fs-1 p-2">
          Learning React
        </p>
        <header>
          {/* <Navbar home="home_Wellcome" mode={mode} toggler={changemode} /> */}
        </header>
        <section>
          {/* <TextForm heading="Enter the Text" /> */}
          {/* <Aboutus /> */}

          <ThapaForm/>
        </section>
      </div>
      ;
    </>
  );
};

export { App };
