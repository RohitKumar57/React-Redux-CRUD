import React, { useState } from "react";
import { addUser } from "../UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddUser from "../Header/Header";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [alternateNumber, setAlternateNumber] = useState("");
  const [registeredOn, setRegisteredOn] = useState("");
  const [status, setStatus] = useState("");
  const [bookingHistory, setBookingHistory] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      name,
      email,
      contactNumber,
      alternateNumber,
      registeredOn,
      status,
      bookingHistory,
    };
    dispatch(addUser(newUser));
    navigate("/");
  };

  return (
    <div className="container">
    <AddUser/>
      <div className="d-flex justify-content-center align-items-center">
        <div className="main-div">
          <div className="info-heading">
            <h4>Add New User</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    placeholder="Enter name"
                    type="text"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    placeholder="Enter email"
                    type="email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="contactNumber" className="form-label">
                    Contact Number:
                  </label>
                  <input
                    placeholder="Enter contact number"
                    type="text"
                    name="contactNumber"
                    className="form-control"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="alternateNumber" className="form-label">
                    Alternate Number:
                  </label>
                  <input
                    placeholder="Enter alternate number"
                    type="text"
                    name="alternateNumber"
                    className="form-control"
                    value={alternateNumber}
                    onChange={(e) => setAlternateNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="registeredOn" className="form-label">
                    Registered On:
                  </label>
                  <input
                    type="date"
                    name="registeredOn"
                    className="form-control"
                    value={registeredOn}
                    onChange={(e) => setRegisteredOn(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="status" className="form-label">
                    Status:
                  </label>
                  <select
                    name="status"
                    className="form-control"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">Select status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="bookingHistory" className="form-label">
                Booking History:
              </label>
              <input
                placeholder="Enter booking history"
                type="text"
                name="bookingHistory"
                className="form-control"
                value={bookingHistory}
                onChange={(e) => setBookingHistory(e.target.value)}
              />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <button className="btn add-btn">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
