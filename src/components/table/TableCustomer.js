import "./table.css";
import "../header/header.css";
import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
function TableCustomer({ click }) {
  // console.log(props)
  const [idCustomers, setIdCustomer] = useState(0);

  //Search
  const [tagName, setTagName] = useState("");
  const [searchData, setSearchData] = useState([]);
  //Auto load after delete customer by id
  useEffect(() => {
    const delCustomer = async (idCustomers) => {
      if (idCustomers > 0) {
        try {
          await axios.delete(
            `http://localhost:5000/manage/customer/delete/${idCustomers}`
          );
          setIdCustomer(0);
        } catch (error) {}
      }
    };
    const searchCustomer = async () => {
      try {
        if (tagName) {
          const res = await axios.get(
            `http://localhost:5000/manage/table/customer/search?q=${tagName}`
          );
          setSearchData(res.data);
        } else {
          const res = await axios.get(
            `http://localhost:5000/manage/table/customer/search`
          );
          setSearchData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    searchCustomer();
    delCustomer(idCustomers);
  }, [idCustomers, tagName]);

  // console.log(dataProps);

  return (
    <>
      <form className="nav-bar__form">
        <input
          type="text"
          className="nav-bar__form-input-admin"
          placeholder="Search"
          name="search"
          onChange={(e) => setTagName(e.target.value)}
        />
      </form>
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
          {searchData.map((data, index) => {
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
                      onClick={click}
                    />
                    <MdDeleteForever
                      style={{
                        color: "#eb0028",
                      }}
                      onClick={() => setIdCustomer(data.id)}
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
