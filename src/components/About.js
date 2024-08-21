import React, { useState } from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is About Page</h2>
      {/* <User name={"Rikesh Bohara (Function)"} /> */}
      <UserClass name={"Rikesh Bohara (Class)"} />
    </div>
  );
};

export default About;
