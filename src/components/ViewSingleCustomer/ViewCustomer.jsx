import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddUser from "../Header/Header";
import './ViewCustomer.css'

function ViewCustomer() {
  const users = useSelector((state) => state.users);
  const { id } = useParams();

  const existingUser = users.find((user) => user.id === parseInt(id, 10));

  return (
    <div className="container ">
      <AddUser />
      <div className="main-div card mb-3 ">
        <div className="card-body">
        <div className="info-heading">
          <h4 className="card-title">Customer Details</h4>
        </div>
          <div className="row mb-3">
            <div className="col">
              <p className="card-text">
                <strong>Name:</strong> {existingUser.name}
              </p>
            </div>
            <div className="col">
              <p className="card-text">
                <strong>ID:</strong> {existingUser.id}
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <p className="card-text">
                <strong>Contact Number:</strong> {existingUser.contactNumber}
              </p>
            </div>
            <div className="col">
              <p className="card-text">
                <strong>Alternate Number:</strong>{" "}
                {existingUser.alternateNumber}
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <p className="card-text">
                <strong>Email:</strong> {existingUser.email}
              </p>
            </div>
            <div className="col">
              <p className="card-text">
                <strong>Registered On:</strong> {existingUser.registeredOn}
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <p className="card-text">
                <strong>Status:</strong> {existingUser.status}
              </p>
            </div>
            <div className="col">
              <p className="card-text">
                <strong>Booking History:</strong> {existingUser.bookingHistory}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCustomer;
