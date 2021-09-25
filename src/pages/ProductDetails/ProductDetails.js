import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {useParams} from "react-router-dom";
import LocationBar from "../../components/bar/locationbar/LocationBar";
import ReviewBar from "../../components/bar/reviewtextbar/ReviewBar";
import "./productdetails.css";

export default function ProductDetails({data}) {
  // Them param id vao duong dan
  const {id} = useParams();
  // console.log(data[id-1])
  const firstImage= data[id].attribute.image
  const array = [
    { id: 0, image: firstImage },
    { id: 1, image: "/images/products/product_2.jpg" },
    { id: 2, image: "/images/products/product_3.jpg" },
  ];
  const [current, setCurrent] = useState(0);
  const length = array.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nowSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="product-details">
      <div className="product-details-section">
        <div className="product-details-row">
          <LocationBar />
          <div className="row">
            <div className="product-details-left-info">
              <div className="product-details-image">
                <div className="product-details-image__left">
                  {array.map((data, index) => {
                    return (
                      <>
                        {index === current}
                        <img
                          src={data.image}
                          alt="product color"
                          className="product-details-image__left-item"
                          onClick={nowSlide}
                        />
                      </>
                    );
                  })}
                </div>
                <div className="product-details-image__right">
                  <FaAngleLeft
                    className="product-details-push-left"
                    onClick={prevSlide}
                  />
                  <FaAngleRight
                    className="product-details-push-right"
                    onClick={nextSlide}
                  />
                  {array.map((data, index) => {
                    return (
                      <>
                        {index === current && (
                          <img
                            id="demoLarge"
                            src={data.image}
                            alt="product color"
                            className="product-details-image__right-item"
                          />
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="product-details-right-info">
              <h2 className="product-details-name">{data[id].attribute.name}</h2>
              <h3 className="product-details-price">{data[id].attribute.price} VND</h3>
              <p className="product-details-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a
                doloribus iste natus et facere? dolor sit amet consectetur
                adipisicing elit. Sunt a doloribus iste natus et facere?
              </p>
              <div className="product-details-choose">
                <div className="product-details-choose__item">
                  <label for="memory">Memory:</label>
                  <select
                    className="product-details-choose__item-select"
                    name="memory"
                    id="memory"
                  >
                    <option value="128">128 GB</option>
                    <option value="256">256 GB</option>
                    <option value="512">512 GB</option>
                  </select>
                </div>
                <div className="product-details-choose__item">
                  <label for="color">Color:</label>
                  <select
                    className="product-details-choose__item-select"
                    name="color"
                    id="color"
                  >
                    <option value="white">White</option>
                    <option value="red">Red</option>
                    <option value="gray">Gray</option>
                    <option value="black">Black</option>
                  </select>
                </div>
              </div>
              <div className="product-details-quantity">
                <p className="product-details-text__bold">Quantity:</p>
                <input
                  type="text"
                  placeholder="1"
                  className="product-details-quantity-input"
                />
              </div>
              <p>
                <span className="product-details-text__bold">Brand:</span> {data[id].attribute.brand}
              </p>
              <p>
                <span className="product-details-text__bold">
                  Product type:
                </span>{" "}
                {data[id].attribute.type}
              </p>
              <p>
                <span className="product-details-text__bold">
                  Availability:
                </span>{" "}
                <span className="product-details-text__green">
                  In Stock {data[id].attribute.status} items
                </span>
              </p>
              <div className="product-details__btn">
                <button className="btn product-details__btn-item">
                  Add to cart
                </button>
                <button className="btn product-details__btn-item">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <ReviewBar />
          <div className="row">
            <div className="product-details-posts">
              <p>
                For the time of the ugly at the fear of the thermal real estate
                no deumantos solicited the cat. Pellentesque diam pain, the
                element etos des soft as laughter.
              </p>
              <p className="product-details-text__bold">
                Sample Unordered List
              </p>
              <p>
                Comodous in time for the bears Pellentesque vitae nec mollis
                urna mattis laoreet. Divamus sit amet purus justo. Then the
                ordeal takes the pain and the pain is put to the loremous Sample
                Ordered List Comodous in time for bears Pellentesque vitae nec
                mollis urna mattis laoreet. Divamus sit amet purus justo. Then
                the ordeal takes the pain and the pain is put to the loremous{" "}
              </p>
              <p className="product-details-text__bold">
                Sample Paragraph Text{" "}
              </p>
              <p>
                At the entrance of the earth, at our customers. The pressure of
                life is always a lot, it is a nice valley. We give it to the
                bears. But from my life, from my survey and the price of the
                game. Pellentesque nulla eros accumsan quis justo at tincidunt
                lobortis denimes loremous. The bed of the weekend hangs in the
                bed, so that the dishes are pure cushion. The author is very
                important.
              </p>
            </div>
            <div className="product-details-specifications">
              <p
                className="product-details-text__bold"
                style={{
                  textAlign: "center",
                  color: "#eb0028",
                  fontSize: "1.4rem",
                  fontFamily: "monospace",
                  textDecoration: "underline",
                }}
              >
                Specifications
              </p>
              <div className="product-details-specifications-image">
              <img
                  src={data[id].attribute.image}
                  alt="Product Details"
                  className="product-details-specifications-image__img"
                />
              </div>
              <p>
                <span className="product-details-text__bold">
                  Screen technology:
                </span>
                {data[id].details.specifications.screen}
              </p>
              <p>
                <span className="product-details-text__bold">
                  Operating System:
                </span>
                {data[id].details.specifications.OperatingSystem}
              </p>
              <p>
                <span className="product-details-text__bold">
                  Processor Chip (CPU):
                </span>
                {data[id].details.specifications.CPU}
              </p>
              <p>
                <span className="product-details-text__bold">ROM:</span>{data[id].details.specifications.ROM}
              </p>
              <p>
                <span className="product-details-text__bold">RAM:</span>{data[id].details.specifications.RAM}
              </p>
              <p>
                <span className="product-details-text__bold">
                  Mobile network:
                </span>
                {data[id].details.specifications.NetworkSupport}
              </p>
              <p>
                <span className="product-details-text__bold">
                  Number of sim slots:
                </span>
                {data[id].details.specifications.SIM}
              </p>
              <p>
                <span className="product-details-text__bold">Weight:</span>{data[id].details.specifications.weight}
              </p>
              <p>
                <span className="product-details-text__bold">
                  Battery capacity:
                </span>
                {data[id].details.specifications.battery}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
