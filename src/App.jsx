import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";
import {cutImgLink, getPrice} from "./utils/helper";

import Data from "./data/store-items.json";

const App = (props) => {
  const items = Data;
  const [cart, setCart] = useState([]);
  const [num, setNum] = useState(1);

  const handleClick = (e, item, id) => {
    e = e.target.parentNode.parentNode.querySelector(".select-counter").value;
    
    let newItem = {...item, id};

    const newCart1 = cart.find((it => cutImgLink(it.image) === newItem.id));
    
    if(newCart1){
      const newCart2 = cart.map((it => cutImgLink(it.image) === newItem.id ? {...newCart1, num : +e < 10 ? `0${+e}` : +e} : it));
      setCart(newCart2);
      localStorage.setItem("newCartItems", JSON.stringify(newCart2));
    } else {
      const newCart2 = [...cart, {...newItem, num: +e < 10 ? `0${+e}` : +e}];
      setCart(newCart2);
      localStorage.setItem("newCartItems", JSON.stringify(newCart2));
    }
  }

  useEffect(() => { 
    setCart(
      localStorage.getItem("newCartItems") 
      ? JSON.parse(localStorage.getItem("newCartItems"))
      : []
    );
  }, []);

  const handleChange = (value, price) => {
    const valueInput = value.target.value;
    let valueTotal = value.target.parentNode.querySelectorAll("span")[1];
    let valueResult = getPrice(price) * valueInput;

    valueTotal.textContent = `$${valueResult.toFixed(2)}`;

    const getJs = JSON.parse(localStorage.getItem("newCartItems"));
    const myImg = value.target.parentNode.querySelector("img").src.split("/")[5].split(".")[0];
    const imJs1 = getJs.find(elem => myImg === cutImgLink(elem.image));

    if (imJs1) {
      const newGetJs = getJs.map((elem => myImg === cutImgLink(elem.image) ? {...imJs1, num : valueInput} : elem));
      setCart(newGetJs);
      localStorage.setItem("newCartItems", JSON.stringify(newGetJs));
    } else {
      const newGetJs = [...imJs1, {...getJs, num: valueInput}];
      setCart(newGetJs);
      localStorage.setItem("newCartItems", JSON.stringify(newGetJs));
    }
  }

  const totalNum = () => {
    const getJs = JSON.parse(localStorage.getItem("newCartItems"));
    const totalNum = getJs.map(elem => +elem.num).reduce((acc, curr) =>  
    acc + curr, 0);

    console.log(totalNum);
    return totalNum < 10 ? `0${totalNum}` : `${totalNum}`;
  }
  const totalPrice = () => {
    const getJs = JSON.parse(localStorage.getItem("newCartItems"));
    const totalPrice = getJs.map(elem => getPrice(elem.price) * elem.num).reduce((acc, curr) => 
    acc + curr, 0);

    console.log(totalPrice.toFixed(2));
    return totalPrice.toFixed(2);
  }

  const handleRemove = (e) => {
    const myImg = e.id;

    const getJs = JSON.parse(localStorage.getItem("newCartItems"));
    const imJs1 = getJs.find(elem => myImg === elem.id);
    if (imJs1) {
      const newGetJs = getJs.filter((elem => myImg !== elem.id));
      setCart(newGetJs);
      localStorage.removeItem(newGetJs);
      localStorage.setItem("newCartItems", JSON.stringify(newGetJs));
      console.log(imJs1);
      console.log(newGetJs);
    }
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact="true" path="/" element={<HomePage boxs={items} />} />
        <Route
          exact="true"
          path="/details/:id"
          element={
            <DetailsPage
              boxs={items}
              link={props.value}
              handleClick={handleClick}
              num={num}
              setNum={setNum}
              totalNum={totalNum}
              totalPrice={totalPrice}
            />
          }
        />
        <Route
          exact="true"
          path="/cart/"
          element={
          <CartPage 
            newBoxs={cart}
            handleChange={handleChange}
            totalNum={totalNum}
            totalPrice={totalPrice}
            handleRemove={handleRemove} 
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
