import React from "react";
import ViewAllCustomers from "../ViewAllCustomers/ViewAllCustomers";
import AddUser from "../Header/Header";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <AddUser />
      <ViewAllCustomers />
    </div>
  );
}

export default Home;
