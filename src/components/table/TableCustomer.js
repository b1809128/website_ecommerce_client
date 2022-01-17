import React from "react";
import "./table.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
function TableCustomer({ props }) {
  // console.log(props);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>STT</th>
            <th>UserName</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.map((data, index) => {
            return (
              <>
                <tr>
                  <td style={{ textAlign: "center" }}>{(index += 1)}</td>
                  <td>{data.user}</td>
                  <td>{data.role}</td>
                  <td
                    style={{
                      textAlign: "center",
                      fontSize: "1.4rem",
                      display: "flex",
                      margin: "10px 0",
                    }}
                  >
                    <FaEdit
                      style={{
                        color: "#28a745",
                      }}
                    />
                    <MdDeleteForever
                      style={{
                        color: "#eb0028",
                      }}
                      // onClick={() => setIdOrder(data.id_order)}
                    />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TableCustomer;
