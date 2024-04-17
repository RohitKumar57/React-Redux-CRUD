import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../UserReducer";
import { FaEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import './ViewAllCustomers.css'

function ViewAllCustomers() {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  console.log(users);
  return (
    <div>
      <div className="container">
        <table className="table-main" >
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Customer Name</th>
              <th>Contact Number</th>
              <th>Alternate Number</th>
              <th>Email</th>
              <th>Registered On</th>
              <th>Status</th>
              <th>Booking History</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.contactNumber}</td>
                <td>{user.alternateNumber}</td>
                <td>{user.email}</td>
                <td>{user.registeredOn}</td>
                <td>{user.status}</td>
                <td>{user.bookingHistory}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-sm btn-danger ms-2"
                  >
                    <MdDeleteOutline />
                  </button>
                  <Link
                    to={`/view/${user.id}`}
                    className="btn btn-sm btn-primary ms-2"
                  >
                    <FaEye />
                  </Link>
                  <Link
                    to={`/edit/${user.id}`}
                    className="btn btn-sm btn-success ms-2"
                  >
                    <BsFillPencilFill />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAllCustomers;
