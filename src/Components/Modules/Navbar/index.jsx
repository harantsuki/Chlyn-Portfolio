import React, { useState } from "react";
import { NavigationLG, NavigationSM } from "./Navigation";
import BarIcons from "./BarIcons";

const Navbar = () => {
  const [isBar, setIsBar] = useState(false);

  return (
    <nav className="nb-container fixed flex justify-between items-center px-72 py-10 text-neutral-200 text-lg inset-x-0">
      <h1 className="font-bold text-3xl">Chlyn.</h1>
      <NavigationLG />
      <NavigationSM isBar={isBar} />
      <BarIcons isBar={isBar} setIsBar={setIsBar} />
    </nav>
  );
};

export default Navbar;
