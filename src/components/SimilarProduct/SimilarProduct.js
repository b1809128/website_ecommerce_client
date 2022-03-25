import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductAPI from "../products/ProductAPI";
import { FaAngleRight } from "react-icons/fa";
export default function SimilarProduct({ groupBy }) {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/product/group/${groupBy}`
        );
        setProductData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    //Call function API
    fetchAPI();
  }, [groupBy]);

  return (
    <div style={{ display: "block", width: "100%" }}>
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
        <FaAngleRight /> CÓ THỂ BẠN SẼ THÍCH
      </h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}
      >
        <ProductAPI data={productData} />
      </div>
    </div>
  );
}
