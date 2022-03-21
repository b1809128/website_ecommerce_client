import "./App.css";
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/scrolltop/ScrollTop";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductDetailsAPI from "./pages/ProductDetails/ProductDetailsAPI";
import Cart from "./pages/Cart/Cart";
import CheckOut from "./pages/CheckOut/CheckOut";
import { productsData } from "./data";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";
import Search from "./pages/Search/Search";
import { AuthContext } from "./context/AuthContext";
import AdminOrderDetails from "./pages/OrderDetails/AdminOrderDetails";
import CustomerOrderDetails from "./pages/OrderDetails/CustomerOrderDetails";
import Test from "./pages/Test/Test";
import Swal from "sweetalert2";
function App() {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const addCart = (MSHH) => {
    var exist = cartItems.find((x) => x.MSHH === MSHH);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.MSHH === MSHH ? { ...exist, SoLuong: exist.SoLuong + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { MSHH, SoLuong: 1 }]);
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added Product Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const removeCart = (MSHH) => {
    var exist = cartItems.find((x) => x.MSHH === MSHH);
    if (exist.SoLuongHang === 1) {
      setCartItems(cartItems.filter((x) => x.MSHH !== MSHH));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.MSHH === MSHH ? { ...exist, SoLuongHang: exist.SoLuongHang - 1 } : x
        )
      );
    }
  };
  // console.log(cartItems);

  const deleteCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCartItems([]);
        Swal.fire("Deleted!", `Cart has been deleted.`, "success");
      }
    });
  };

  return (
    <div>
      <Router>
        <Header cartItems={cartItems.length} />
        <Switch>
          <Route exact path="/">
            <Home addCart={addCart} />
          </Route>
          <Route path="/details">
            <Details addCart={addCart} />
          </Route>
          <Route path="/product-details/:id">
            <ProductDetails addCart={addCart} data={productsData} />
          </Route>
          <Route path="/product-details-api/:id">
            <ProductDetailsAPI addCart={addCart} />
          </Route>
          <Route path="/sign-in">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
          <Route path="/cart">
            <Cart
              cartItems={cartItems}
              addCart={addCart}
              removeCart={removeCart}
              deleteCart={deleteCart}
            />
          </Route>
          <Route path="/check-out">
            <CheckOut cartItems={cartItems} />
          </Route>
          <Route path="/profile">{user ? <Profile /> : <Login />}</Route>
          <Route path="/admin">{user ? <Admin /> : <Login />}</Route>
          <Route path="/admin-order-details">
            {user ? <AdminOrderDetails /> : <Login />}
          </Route>
          <Route path="/search">
            <Search addCart={addCart} />
          </Route>
          <Route path="/order-details">
            {user ? <CustomerOrderDetails /> : <Login />}
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
        <Footer />
        <ScrollTop />
      </Router>
    </div>
  );
}

export default App;
