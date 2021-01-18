import React from "react";

import Aside from "./Aside";
import Header from "./Header";
import Section from "./Section";

const Dashboard = () => {
  return (
    <div className="w-full h-full relative">
      <Header />
      <div className="md:flex h-screen">
        <Aside />
        <Section />
      </div>
    </div>
  );
};

export default Dashboard;
