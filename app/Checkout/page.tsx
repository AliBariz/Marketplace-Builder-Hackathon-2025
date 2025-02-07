"use client"
import { Product } from '@/types/products'
import { getCartItems } from '../components/actions/actions'
import { useEffect, useState } from 'react'
import React from 'react'
import Link from 'next/link'

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [discount, setDiscount] = useState<number>(0)
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  })

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    address: false,
    city: false,
    state: false,
    zip: false,
    phone: false
  })

  useEffect(() => {
    setCartItems(getCartItems())
    const discount = localStorage.getItem("discount")
    if(discount) {
      setDiscount(Number(discount))
    }
  }, [])

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName.trim().match(/^[A-Za-z]+$/),
      lastName: !formValues.lastName.trim().match(/^[A-Za-z]+$/),
      email: !formValues.email.trim().match(/^\S+@\S+\.\S+$/),
      address: !formValues.address.trim().match(/^[A-Za-z0-9\s,.-]+$/),
      city: !formValues.city.trim().match(/^[A-Za-z\s]+$/),
      state: !formValues.state.trim().match(/^[A-Za-z\s]+$/),
      zip: !formValues.zip.trim().match(/^\d{5}$/),
      phone: !formValues.phone.trim().match(/^[0-9\s-]+$/),
    };
  
    setFormErrors(errors);
    return Object.values(errors).every(error => !error);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col md:flex-row gap-6">
  {/* Left Section - Cart Items */}
  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Checkout</h1>
    
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {cartItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between border-b pb-3">
          <div>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-500">Price: ${item.price}</p>
            <p className="text-gray-500">Quantity: {item.inventory}</p>
          </div>
          <span className="text-gray-700 font-bold">${(item.price * item.inventory).toFixed(2)}</span>
        </div>
      ))}
    </div>

    <div className="mt-4">
      <h2 className="text-lg font-semibold">Subtotal: <span className="text-gray-700">${subtotal.toFixed(2)}</span></h2>
      <h2 className="text-lg font-semibold text-green-600">Discount: <span>${discount.toFixed(2)}</span></h2>
      <h2 className="text-xl font-bold text-gray-900">Total: <span>${(subtotal - discount).toFixed(2)}</span></h2>
    </div>
    <Link href="/components/ProductsPage" className='mt-10 rounded-full bg-teal-600 hover:bg-teal-700 text-white p-2 flex items-center justify-center'>
    <button>
      Continue Shopping
    </button>
    </Link>
  </div>

  {/* Right Section - Checkout Form */}
  <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Shipping Details</h2>
    
    <form className="space-y-4">
      <div>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        {formErrors.firstName && <p className="text-red-500 text-sm">First Name is required</p>}
      </div>

      <div>
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        {formErrors.lastName && <p className="text-red-500 text-sm">Last Name is required</p>}
      </div>

      <div>
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        {formErrors.email && <p className="text-red-500 text-sm">Email is required</p>}
      </div>

      <div>
        <input type="text" name="address" placeholder="Address" onChange={handleInputChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        {formErrors.address && <p className="text-red-500 text-sm">Address is required</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input type="text" name="city" placeholder="City" onChange={handleInputChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {formErrors.city && <p className="text-red-500 text-sm">City is required</p>}
        </div>
        <div>
          <input type="text" name="state" placeholder="State" onChange={handleInputChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {formErrors.state && <p className="text-red-500 text-sm">State is required</p>}
        </div>
      </div>

      <div>
        <input type="text" name="zip" placeholder="Zip Code" onChange={handleInputChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        {formErrors.zip && <p className="text-red-500 text-sm">Zip Code is required</p>}
      </div>

      <div>
        <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        {formErrors.phone && <p className="text-red-500 text-sm">Phone is required</p>}
      </div>

      <button type="submit" 
        onClick={(e) => {
          e.preventDefault();
          if (validateForm()) {
            alert("Order placed!");
          }
        }}
        className="w-full py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700"
      >
        Place Order
      </button>
    </form>
  </div>
</div>

  )
}

export default Checkout