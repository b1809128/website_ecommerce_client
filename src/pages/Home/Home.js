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

export default function Home({ addCart }) {
  const [product, setProduct] = useState([]);
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
    fetchAPI();
  }, []);

  const dataAPI = product.filter((data, index) => index < 5);
  const dataAPI2 = product.filter((data, index) => index > 10 && index < 16);
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
          <div data-aos="fade-up" className="row">
            <ProductAPI addCart={addCart} data={dataAPI} />
          </div>

          <div className="row">
            <Info {...infoDataThree} />
            <Info {...infoDataFour} />
          </div>
          <div data-aos="fade-up" className="row">
            <ProductAPI addCart={addCart} data={dataAPI2} />
          </div>
          <Introduce data={introduceData} />
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
