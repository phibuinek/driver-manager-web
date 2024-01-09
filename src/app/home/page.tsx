import React from "react";
import Header from "../components/Home/Header";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex">
        <Sidebar />
        <div> content</div>
      </main>
    </div>
  );
}

export default Home;
