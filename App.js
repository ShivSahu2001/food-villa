/*
    Parcel--
    Created a Server
    HMR - Hot Module Replacement
    File Watching Algo -- c++
    Bundling
    MINIFY
    Cleaning our Code
    Dev and Production Build
    Super fast build algo
    Image optimization
    Caching while development
    Compression
    Compatiable withe older version of browser
    HTTPS on dev
    port number
    Consistent Hashing Algo
    Zero Config
    Tree Shaking -- Removing un-wanted things
*/

import React from "react";
import ReactDOM from "react-dom/client";
/* const heading1 = React.createElement("h1", {
        id: "title",
        key: "h1",
    }, "Hello React!!")

    const heading2 = React.createElement("h2", 
    {
        id: "title",
        key: 'h2',
    }, 
    "Hello React 2"
    )

    */

// JSX => React.createElement => Object => HTML(DOM)
// React Element
const heading2 = (
    <h1 id="title" key="h2">
      Learning React Element!!
    </h1>
  );

const Title = () =>  (
  <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq_LmiEG7PEV3p9MGjSYDxsn1BzvEy5fEdg&usqp=CAU" alt="logo"/>
);

// console.log(heading)

// const container = React.createElement("div", {id: "container"}, [heading1, heading2])

// Component
// Composing Component
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>



        </ul>

      </div>
    </div>

   
  );
};

const RestaurantCard = () => {
  return (
    <div className="card"> 
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4" />
      <h2>Burger King</h2>
      <h3>Burgers, American</h3>
      <h4>4.4 Stars</h4>

    </div>
  )
}

const Body = () => {
  return (
      <RestaurantCard />
  )
}

const Footer = () => {
  return(
    <h2>Footer</h2>
  )
}


const AppLayout = () => {
  return(
    <>
    <HeaderComponent />
    <Body />
    <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(<AppLayout />);
