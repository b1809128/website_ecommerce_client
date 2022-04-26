import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import TableCustomer from "../../components/table/TableCustomer";
import TableProduct from "../../components/table/TableProduct";
import Chart from "../../components/chart/Chart";
import "./Admin.css";
import LocationBar from "../../components/bar/locationbar/LocationBar";
import { chartData } from "../../components/chart/chartData";
import TableOrder from "../../components/table/TableOrder";
import { FaEdit } from "react-icons/fa";
import AdminEdit from "../Edit/AdminEdit";
import Modal from "../../components/modal/Modal";
import Swal from "sweetalert2";
import TableMUI2 from "../../components/table/TableMUI2";
import AdminBar from "../../components/bar/adminbar/AdminBar";
function Admin() {
  const { user } = useContext(AuthContext);
  const [authorized, setAuthorized] = useState(true);
  const [bestSaleData, setBestSaleData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetch = async () => {
      const res1 = await axios.post("http://localhost:5000/auth/admin", {
        token: user.token,
      });
      if (res1.data.logged) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
      }
      const res3 = await axios.get("http://localhost:5000/product/bestsale");
      setBestSaleData(res3.data);
    };
    fetch();
  }, [user.token]);

  //TODO: Modal
  const [statusModal, setStatusModal] = useState(false);
  const showModal = () => {
    setStatusModal(true);
  };

  const closeModal = () => {
    setStatusModal(false);
  };

  //TODO: chart
  // console.log(chartData.map(data => data))
  var dataSet = chartData.map((data) => data);

  //TODO: authorized
  if (!authorized) {
    Swal.fire({
      icon: "error",
      title: "Bạn không có quyền truy cập !",
    });
    return <Redirect to="/dang-nhap" />;
  }

  return (
    <div className="admin">
      <Modal
        status={statusModal}
        children={<AdminEdit />}
        closeModal={closeModal}
      />
      <div className="admin-section">
        <div className="admin__row">
          <LocationBar />
        </div>
        <div className="admin__row">
          <AdminBar />
        </div>

        <div className="admin__row">
          <div className="admin__col-6">
            <div className="admin__item-sm">
              <Chart
                title={dataSet[0].title}
                color={dataSet[0].color}
                data={dataSet[0].data}
              />
            </div>
            <div className="admin__item-sm">
              <Chart
                title={dataSet[1].title}
                color={dataSet[1].color}
                data={dataSet[1].data}
              />
            </div>
            <div className="admin__item-sm">
              <Chart
                title={dataSet[2].title}
                color={dataSet[2].color}
                data={dataSet[2].data}
              />
            </div>
            <div className="admin__item-sm">
              <Chart
                title={dataSet[3].title}
                color={dataSet[3].color}
                data={dataSet[3].data}
              />
            </div>
          </div>
          <div className="admin__col-4">
            <div className="admin__item-lg">
              <Chart
                title={dataSet[4].title}
                color={dataSet[4].color}
                data={dataSet[4].data}
              />
              <Chart
                title={dataSet[5].title}
                color={dataSet[5].color}
                data={dataSet[5].data}
              />
            </div>
          </div>
          <div id="thongkedoanhso"></div>
        </div>

        <div className="admin__row">
          <h1 className="admin__title">THỐNG KÊ DOANH THU</h1>
          <TableMUI2 />
          <div id="quanlysanpham"></div>
        </div>

        <div className="admin__row">
          <div className="admin__col-12">
            <div className="admin__item-lg-12">
              <div className="admin__header">
                <h1 className="admin__title">QUẢN LÝ SẢN PHẨM</h1>
                <FaEdit
                  style={{
                    color: "#28a745",
                    cursor: "pointer",
                  }}
                  onClick={showModal}
                />
              </div>
              <div id="banchay"></div>
              <TableProduct />
            </div>
          </div>
        </div>

        <div className="admin__row">
          <div className="admin__col-12">
            <div className="admin__item-lg-12">
              <h1 className="admin__title">BÁN CHẠY NHẤT TRONG THÁNG</h1>
              <div id="quanlynguoidung_donhang"></div>
              <TableProduct props={bestSaleData} />
            </div>
          </div>
        </div>

        <div className="admin__row">
          <div className="admin__col-5">
            <div className="admin__item-lg">
              <h1 className="admin__title">QUẢN LÝ ĐƠN HÀNG</h1>
              <TableOrder />
            </div>
          </div>
          <div className="admin__col-5">
            <div className="admin__item-lg">
              <div className="admin__header">
                <h1 className="admin__title">QUẢN LÝ NGƯỜI DÙNG</h1>
              </div>
              <TableCustomer click={showModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
