import React, { useEffect, useState } from "react";
import "../scss/comp/shop.scss";
import allInfo from "./info";
import { FaHeart, FaEye } from "react-icons/fa";
import { useCart } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

const Shop = () => {
  // show details
  const [showDetails, setShowDetails] = useState(false);
  const [detail, setdetail] = useState([]);

  // search

  const [searchTerm, setSearchTerm] = useState("");

  const filterItemsBySearchTerm = (items, searchTerm) => {
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.typeSpecial.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // open details
  const openDetails = (product) => {
    const detailData = [{ product }];
    const productDetail = detailData[0]["product"];
    setdetail(productDetail);
    setShowDetails(true);
  };

  const { addToCart } = useCart();

  const [items, setItems] = useState(allInfo);
  const [originalItems, setOriginalItems] = useState([]);

  useEffect(() => {
    setOriginalItems(allInfo);
  }, []);

  const filtercat = (x) => {
    const filteredProducts = originalItems.filter(
      (item) => item.typeSpecial === x
    );
    setItems(filteredProducts);
  };

  const filterType = (x) => {
    const filteredProducts = originalItems.filter((item) => item.type === x);
    setItems(filteredProducts);
  };

  return (
    <div className="shop">
      {showDetails ? (
        <>
          <div className="product-detail">
            <button onClick={() => setShowDetails(false)} className="close">
              x
            </button>
            <div className="detail-container">
              <div className="img-box">
                <img src={detail.image} alt={detail.title} />
              </div>
              <div className="product-info">
                <h4>#{detail.type}</h4>
                <h2>{detail.title}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur commodi omnis obcaecati doloremque natus ipsum rem
                  officia veritatis veniam eveniet
                </p>
                <h3>
                  <span>Price : </span>${detail.price}
                </h3>
                <button onClick={() => addToCart(detail)}>add to cart</button>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="container">
        <div className="shop-head">
          <div className="shop-head-box">
            <img src="./images/pexels-chevon-rossouw-2558605.jpg" alt="" />
          </div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => {
              if (searchTerm.trim() === "") {
                alert("Please Search For Somthing");
                setItems(originalItems);
              } else {
                const filteredItems = filterItemsBySearchTerm(
                  originalItems,
                  searchTerm
                );
                setItems(filteredItems);
              }
            }}
          >
            Search
          </button>
        </div>
        <div className="full-info">
          <div className="categories">
            <h2 className="shop-all" onClick={() => setItems(allInfo)}>
              shop all
            </h2>
            <div className="mydrop">
              <Dropdown as={ButtonGroup}>
                <Button variant="success">
                  <h2 onClick={() => filterType("food")}>food</h2>
                </Button>

                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <span onClick={() => filtercat("dry")}>dry food</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <span onClick={() => filtercat("wet")}>wet food</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <span onClick={() => filtercat("raw")}>raw food</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={ButtonGroup}>
                <Button variant="success">
                  <h2 onClick={() => filterType("accessories")}>accessories</h2>
                </Button>

                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <span onClick={() => filtercat("toys")}>toys</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <span onClick={() => filtercat("beds")}>beds</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <span onClick={() => filtercat("litter")}>litter</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={ButtonGroup}>
                <Button variant="success">
                  <h2 onClick={() => filterType("healthcare")}>healthcare</h2>
                </Button>

                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <span onClick={() => filtercat("dental")}>dental</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <span onClick={() => filtercat("vitamins")}>vitamins</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={ButtonGroup}>
                <Button variant="success">
                  <h2 onClick={() => filterType("scratching")}>scratching</h2>
                </Button>

                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <span onClick={() => filtercat("bowls")}>bowls</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <span onClick={() => filtercat("crates")}>crates</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <span onClick={() => filtercat("scratching")}>
                      scratching
                    </span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="shop-cards">
            {items.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <div className="img-box">
                    <img src={item.image} alt="" />
                    <div className="icons">
                      <div
                        onClick={() => openDetails(item)}
                        className="icon-box"
                      >
                        <FaEye />
                      </div>
                      <div className="icon-box">
                        <FaHeart />
                      </div>
                    </div>
                  </div>
                  <div className="box-info">
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                    <button onClick={() => addToCart(item)}>add to cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
