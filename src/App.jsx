import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import Mainbar from "./components/Navbar";
import Newsboard from "./components/Newsboard";

function App() {
  const [category, setCategory] = useState("business");
  return (
    <>
      <Mainbar setCategory={setCategory} />
      {/* <Newsboard category={category} /> */}
    </>
  );
}

export default App;
