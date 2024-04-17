import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function AddUser() {
  const location = useLocation();

  let linkText = "Customer";

  // Determine link text and path based on the current URL
  if (location.pathname === "/") {
    linkText += " -> View All Customers";
  } else if (location.pathname.startsWith("/view")) {
    linkText += " -> View Customer";
  } else if (location.pathname.startsWith("/edit")) {
    linkText += " -> View All Customers -> Edit Customer Details";
  } else if(location.pathname.startsWith("/create")){
    linkText += " -> Add Customer";
  }
  return (
    <div>
      <div>
        <h2>RIDE EEVE ASSIGNMENT</h2>
      </div>
      <div>
        <div className="header-class">
          <div className="route-class mt-2">
            <p>{linkText}</p>
          </div>
          <div className="btn-class">
            <div>
              <Link to="/create" className="btn add-btn my-3">
                Add User
              </Link>
            </div>
            <div>
              <Link to="/" className="btn view-btn my-3 mx-1">
                View All Customers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
