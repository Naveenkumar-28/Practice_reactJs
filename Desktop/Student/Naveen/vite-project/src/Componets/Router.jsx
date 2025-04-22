import { createBrowserRouter } from "react-router-dom";
import User from "./User";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Favorites from "./Favorites";

export const Router=createBrowserRouter([
    // {path:'/',Component: Navbar, children:[
    //     {index:true,Component:User},
    //     {path:'/cart',Component:Cart},
    //     {path:'/favorites',Component:Favorites}
    // ]}
{path:'/',Component:Navbar,children:[
  {index:true,Component:User},
]},
// {path:'/cart',Component:Cart}
   
])

export const  user = {
    name: "John Doe",
    email: "johndoe@email.com",
    address: "1234 Elm Street, Springfield, IL",
    cart: [
      {
        name: "Smart Watch",
        description: "A sleek, modern smart watch with fitness tracking.",
        price: 199.99,
        image: "smart-watch-image.jpg",
        quantity: 1
      },
      {
        name: "Electric Toothbrush",
        description: "An advanced electric toothbrush with multiple brushing modes.",
        price: 79.99,
        image: "electric-toothbrush-image.jpg",
        quantity: 1
      },
      {
        name: "Gaming Keyboard",
        description: "A mechanical gaming keyboard with RGB lighting.",
        price: 129.99,
        image: "gaming-keyboard-image.jpg",
        quantity: 1
      }
    ],
    wishlist: [
      {
        name: "Smart Watch",
        description: "A sleek, modern smart watch with fitness tracking.",
        price: 199.99,
        image: "smart-watch-image.jpg"
      },
      {
        name: "Electric Toothbrush",
        description: "An advanced electric toothbrush with multiple brushing modes.",
        price: 79.99,
        image: "electric-toothbrush-image.jpg"
      },
      {
        name: "Gaming Keyboard",
        description: "A mechanical gaming keyboard with RGB lighting.",
        price: 129.99,
        image: "gaming-keyboard-image.jpg"
      }
    ]
  };
  