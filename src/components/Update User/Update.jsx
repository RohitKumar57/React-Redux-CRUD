import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../UserReducer";
import AddUser from "../Header/Header";
import "./Update.css";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id === parseInt(id, 10));

  const [name, setName] = useState(existingUser.name);
  const [email, setEmail] = useState(existingUser.email);
  const [contactNumber, setContactNumber] = useState(
    existingUser.contactNumber
  );
  const [alternateNumber, setAlternateNumber] = useState(
    existingUser.alternateNumber
  );
  const [registeredOn, setRegisteredOn] = useState(existingUser.registeredOn);
  const [status, setStatus] = useState(existingUser.status);
  const [bookingHistory, setBookingHistory] = useState(
    existingUser.bookingHistory
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: parseInt(id, 10),
        name,
        email,
        contactNumber,
        alternateNumber,
        registeredOn,
        status,
        bookingHistory,
      })
    );
    navigate("/");
  };

  return (
    <div className="container">
      <AddUser />
      <div className="d-flex justify-content-center align-items-center">
        <div className="main-div">
          <div className="info-heading">
            <h4>Update User</h4>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="form-group row mb-3">
              <div className="col">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  placeholder="enter name"
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  placeholder="enter email"
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <div className="col">
                <label htmlFor="contactNumber" className="form-label">
                  Contact Number:
                </label>
                <input
                  placeholder="enter contact number"
                  type="text"
                  name="contactNumber"
                  className="form-control"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="alternateNumber" className="form-label">
                  Alternate Number:
                </label>
                <input
                  placeholder="enter alternate number"
                  type="text"
                  name="alternateNumber"
                  className="form-control"
                  value={alternateNumber}
                  onChange={(e) => setAlternateNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <div className="col">
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
              <div className="col">
                <label htmlFor="status" className="form-label">
                  Status:
                </label>
                <select
                  name="status"
                  className="form-control"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="bookingHistory" className="form-label">
                Booking History:
              </label>
              <input
                placeholder="enter booking history"
                type="text"
                name="bookingHistory"
                className="form-control"
                value={bookingHistory}
                onChange={(e) => setBookingHistory(e.target.value)}
              />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <button className="btn btn-update ">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
