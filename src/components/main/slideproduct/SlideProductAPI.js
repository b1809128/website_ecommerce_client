import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./slideproduct.css";
import ProductAPI from "../../products/ProductAPI";
export default function SlideProductAPI({ title, groupBy }) {
  //Slick-Carousel Settings to slide Product Components
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/product/group/SS`);
        setProductData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    //Call function API
    fetchAPI();
  }, [groupBy]);

  //   console.log(productData);
  return (
    <div className="slide-product">
      <h2
        // className="slide-product-title"
        style={{
          height: "30px",
          width: "250px",
          backgroundImage:
            "linear-gradient(to right, #eb0028,rgba(255,0,0,0.5))",
          color: "#fff",
          fontFamily: "monospace",
          padding: "4px",
        }}
      >
        {title}
      </h2>
      <Slider {...settings}>
        {productData.map((data, index) => (
          <ProductAPI data={data} />
        ))}
      </Slider>
    </div>
  );
}
