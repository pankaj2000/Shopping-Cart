// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem.js";

function App() {
  const initialProductList = [
    { price: 99, name: "IPHONE", quantity: 0 },
    { price: 9, name: "REDMI", quantity: 0 },
  ];

  let [productsList, setProductList] = useState(initialProductList);
  let [totalAmount, setTotalAmount] = useState(0);

  // Arrow function to increment product quantity
  const incrementQuantity = (index) => {
    let newProductList = [...productsList]; // Use productsList instead of productList
    let newTotalAmount = totalAmount;
    newProductList[index].quantity = newProductList[index].quantity + 1;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productsList]; // Use productsList instead of productList
    let newTotalAmount = totalAmount;
    newProductList[index].quantity = newProductList[index].quantity - 1;
    newTotalAmount -= newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = ()=>{
    let newProductList = [...productsList];
    newProductList.map((product, i)=>{
      product.quantity = 0;
    })
    setTotalAmount(0);
    setProductList(newProductList);
  }

  const removeItem = (index)=>{
    let newProductList = [...productsList];
    let newTotalAmount = totalAmount; 
    newTotalAmount -= newProductList[index].price*newProductList[index].quantity;
    newProductList.splice(index,1);
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const AddNewItem = (name,price)=>{
    let newProductList = [...productsList];
    newProductList.push({ price: price, name: name, quantity: 0 });
    setProductList(newProductList);
  }

  return (
    <React.Fragment>
      <NavBar />
      <AddItem AddNewItem={AddNewItem}/>
      <main className="container mt-5">
        {/* Pass productsList instead of productList */}
        <ProductList productList={productsList} incrementQuantity={incrementQuantity}  decrementQuantity={decrementQuantity} removeItem={removeItem}/>
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </React.Fragment>
  );
}

export default App;
