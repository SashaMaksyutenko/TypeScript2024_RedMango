import React from "react";
import { Footer, Header } from "../Components/Layout";
import { useState,useEffect } from "react";
import { Home, MenuItemDetails, NotFound, ShoppingCart } from "../Pages";
import { Route,Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetShoppingCartQuery } from "../Apis/shoppingCartApi";
import { setShoppingCart } from "../Storage/Redux/shoppingCartSlice";
function App() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetShoppingCartQuery(
    "ab471b83-0729-43cc-b153-b826d189814c"
  );
  useEffect(() => {
    if (!isLoading) {
      console.log(data.result);
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);
  return (
    <div>
    <Header />
    <div className="pb-5">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menuItemDetails/:menuItemId" element={<MenuItemDetails />}></Route>
        <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
    <Footer />
  </div>
  );
}
export default App;
