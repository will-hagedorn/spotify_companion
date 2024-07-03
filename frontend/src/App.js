import React from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import NavItem from "./components/NavItem"
import Dropdown from "./components/Dropdown";
import Card from "./components/Card"
import { ReactComponent as CaretIcon } from './icons/caret.svg';

function App() {
  
  return (
    <>
    <Navbar>
      <NavItem icon={<CaretIcon />}>
        <Dropdown></Dropdown>
      </NavItem>
    </Navbar>

    <Card/>
    </>
  );
}

export default App;