import "bootstrap/dist/css/bootstrap.css"
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/body/about-me";
import Contact from "./components/body/contact";
import Portfolio from "./components/body/portfolio";
import Resume from "./components/body/resume";

import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    if (currentPage === "about") {
      return <About />;
    }
    if (currentPage === "contact") {
      return <Contact />;
    }
    if (currentPage === "portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div className="">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <Footer />
    </>
  );
}
export default App;
