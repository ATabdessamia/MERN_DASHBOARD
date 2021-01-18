import React from "react";
import { Route, Switch } from "react-router-dom";

import Teacher from "../components/teachers/Teacher";
import Class from "../components/classes/Class";
import Student from "../components/students/Student";

const Screen = () => {
  return (
    <img
      src="/images/undraw_Business_decisions_re_84ag.svg"
      alt="login"
      className="object-fill max-w-full h-full"
    />
  );
};

const Section = () => {
  return (
    <section className="bg-purple-200 flex-1 relative overflow-hidden">
      <div className="md:mt-28 mt-10 lg:px-24 min-h-screen">
        <Switch>
          <Route path="/dashboard" exact component={Screen} />
          <Route path="/dashboard/teachers" exact component={Teacher} />
          <Route path="/dashboard/students" exact component={Student} />
          <Route path="/dashboard/classes" exact component={Class} />
        </Switch>
      </div>
    </section>
  );
};

export default Section;
