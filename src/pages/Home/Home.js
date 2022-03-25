import "./home.css";
import "aos/dist/aos.css";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import IntroduceTop from "../../components/main/introducetop/IntroduceTop";
import Info from "../../components/main/info/Info";
import {
  infoDataOne,
  infoDataTwo,
  infoDataThree,
  infoDataFour,
} from "../../components/main/info/infoData";
import Introduce from "../../components/main/introduce/Introduce";
import { introduceData } from "../../components/main/introduce/introduceData";
import BrandBar from "../../components/bar/brandbar/BrandBar";
import Comment from "../../components/main/comment/Comment";
import axios from "axios";
import ProductAPI from "../../components/products/ProductAPI";
import { FaAngleRight } from "react-icons/fa";

export default function Home({ addCart }) {
  const [product, setProduct] = useState([]);
  const [watchData, setWatchData] = useState([]);
  const [laptopData, setLaptopData] = useState([]);
  const [headphoneData, setHeadphoneData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({
      duration: 2000,
    });

    const fetchAPI = async () => {
      try {
        const result = await axios.get("http://localhost:5000/product/all");
        setProduct(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    const searchAPI = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/manage/table/product/search?q=watch`
        );
        const result2 = await axios.get(
          `http://localhost:5000/manage/table/product/search?q=laptop`
        );
        const result3 = await axios.get(
          `http://localhost:5000/manage/table/product/search?q=headphone`
        );

        setWatchData(result.data);
        setLaptopData(result2.data);
        setHeadphoneData(result3.data)
      } catch (error) {
        console.log(error);
      }
    };

    //Call function
    searchAPI();
    fetchAPI();
  }, []);

  //API Processor
  const dataAPI = product.filter((data, index) => data.MaLoaiHang === "AP" && data.Gia > 20000000 && data.Gia < 49000000);
  const dataAPIFilter10Products = dataAPI.filter((data, index) => index < 10);
  const dataAPI2 = product.filter((data, index) => data.Gia > 15000000);
  const dataAPIFilter15Products = dataAPI2.filter((data, index) => index <= 14);
  const dataAPI3 = watchData.map((data) => data);
  const dataAPIFilterWatch = dataAPI3.filter((data, index) => index < 5);
  const dataAPI4 = laptopData.map((data) => data);
  const dataAPIFilterLaptop = dataAPI4.filter((data, index) => index < 5);
  const dataAPI5 = headphoneData.map((data) => data);
  const dataAPIFilterHeadphone = dataAPI5.filter((data, index) => index < 5);

  // console.log(test);

  return (
    <div className="home">
      <IntroduceTop />
      <div className="home-section">
        <div className="home__row">
          <BrandBar />

          <div id="categories" className="row">
            <Info {...infoDataOne} />
            <Info {...infoDataTwo} />
          </div>
          <div className="row">
            <h2
              style={{
                height: "30px",
                width: "250px",
                backgroundImage: "linear-gradient(to right, #b11224,#eb0028)",
                color: "#fff",
                fontFamily: "monospace",
                fontSize: "1rem",
                padding: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaAngleRight />
              APPLE AUTHORISED RESELLER
            </h2>
          </div>
          <div data-aos="fade-up" className="row">
            <ProductAPI addCart={addCart} data={dataAPIFilter10Products} />
          </div>

          <div className="row">
            <Info {...infoDataThree} />
            <Info {...infoDataFour} />
          </div>
          <div className="row">
            <h2
              style={{
                height: "30px",
                width: "250px",
                backgroundImage: "linear-gradient(to right, #b11224,#eb0028)",
                color: "#fff",
                fontFamily: "monospace",
                fontSize: "1rem",
                padding: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaAngleRight />
              SẢN PHẨM NỔI BẬT
            </h2>
          </div>
          <div data-aos="fade-up" className="row">
            <ProductAPI addCart={addCart} data={dataAPIFilter15Products} />
          </div>
          <div className="row">
            <h2
              style={{
                height: "30px",
                width: "250px",
                backgroundImage: "linear-gradient(to right, #b11224,#eb0028)",
                color: "#fff",
                fontFamily: "monospace",
                fontSize: "1rem",
                padding: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaAngleRight />
              ĐỒNG HỒ THÔNG MINH
            </h2>
          </div>
          <div data-aos="fade-up" className="row">
            <ProductAPI addCart={addCart} data={dataAPIFilterWatch} />
          </div>
          <div className="row">
            <h2
              style={{
                height: "30px",
                width: "250px",
                backgroundImage: "linear-gradient(to right, #b11224,#eb0028)",
                color: "#fff",
                fontFamily: "monospace",
                fontSize: "1rem",
                padding: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaAngleRight />
              TAI NGHE CHÍNH HÃNG
            </h2>
          </div>
          <div data-aos="fade-up" className="row">
            <ProductAPI addCart={addCart} data={dataAPIFilterHeadphone} />
          </div>
          <div className="row">
            <h2
              style={{
                height: "30px",
                width: "250px",
                backgroundImage: "linear-gradient(to right, #b11224,#eb0028)",
                color: "#fff",
                fontFamily: "monospace",
                fontSize: "1rem",
                padding: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaAngleRight />
              LAPTOP CHÍNH HÃNG
            </h2>
          </div>
          <div data-aos="fade-up" className="row">
            <ProductAPI addCart={addCart} data={dataAPIFilterLaptop} />
          </div>
          <Introduce data={introduceData} />
          <div className="row">
            <h2
              style={{
                height: "30px",
                width: "250px",
                backgroundImage: "linear-gradient(to right, #b11224,#eb0028)",
                color: "#fff",
                fontFamily: "monospace",
                fontSize: "1rem",
                padding: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaAngleRight />
              TIN CÔNG NGHỆ
            </h2>
          </div>
          <div data-aos="fade-up" id="blog" className="row">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
}
