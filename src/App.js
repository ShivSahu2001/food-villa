

import React from "react";
import ReactDOM from "react-dom/client";
// Default Import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// Named Import
// import { Title } from "./components/Header";
// import * as Obj from "./components/Header";

// Obj.Title



// Component
// Composing Component


// Config Driven UI



const burgerKing = {
  name: "Burger King",
  image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
  cusines: ["Burger", "American"],
  rating: "4.4"
}







const AppLayout = () => {
  return(
    <>
    <Header />
    <Body />
    <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(<AppLayout />);
