"use client";

import { Product } from "@/types/products";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0d9488",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire({
          title:"Removed!",
          text: "Item has been removed from your cart.",
          icon: "success",
          confirmButtonColor: "#0d9488"
      });
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#0d9488",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
      //   Swal.fire({
      //     title:"Succes!",
      //     text: "Your order has been placed.",
      //     icon: "success",
      //     confirmButtonColor: "#0d9488"
      // });
      router.push("/Checkout");
        // Clear the cart after proceeding (optional)
        setCartItems([]);
      }
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col md:flex-row gap-6">
  {/* Left Section - Products */}
  <div className="flex-1">
    <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

    <div className="space-y-4">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded-lg shadow-md flex items-center"
          >
            {item.image && (
              <Image
                src={urlFor(item.image).url()}
                className="w-20 h-20 object-cover rounded-lg"
                alt="image"
                width={500}
                height={500}
              />
            )}
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-500">Price: ${item.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleDecrement(item._id)}
                  className="px-3 py-1 bg-gray-300 rounded-full hover:bg-gray-400"
                >
                  -
                </button>
                <span className="mx-2">{item.inventory}</span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="px-3 py-1 bg-gray-300 rounded-full hover:bg-gray-400"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item._id)}
              className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      )}
    </div>
  </div>

  {/* Right Section - Total & Order Summary */}
  {cartItems.length > 0 && (
    <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-md self-start sticky top-6 mt-14">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="space-y-2 max-h-72 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item._id} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-gray-700">{item.title}</span>
              <span className="text-gray-500 text-sm">x{item.inventory}</span>
            </div>
            <span className="font-semibold">${(item.price * item.inventory).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <hr className="my-4" />
      <div className="flex justify-between items-center text-lg font-bold">
        <span>Total:</span>
        <span>${calculateTotal().toFixed(2)}</span>
      </div>
      <button
        onClick={handleProceed}
        className="mt-4 px-4 py-2 w-full bg-green-500 text-white rounded-full hover:bg-green-600"
        >
          Proceed
      </button>
    </div>
  )}
</div>

  
  )
};


export default CartPage;




