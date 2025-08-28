'use client';
import React, { useState } from 'react';
import { Search, ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';

const NikeCartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      status: 'Estimated arrival 24 Sep 2025',
      statusColor: 'text-orange-500',
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      size: '10',
      quantity: 2,
      price: 98.3,
      image: '/shoes/shoe-7.avif',
    },
    {
      id: 2,
      status: 'Delivered on 04 August',
      statusColor: 'text-green-500',
      name: "Air Max 1 '86 Original",
      category: "Men's Shoes",
      size: '10',
      quantity: 2,
      price: 104.26,
      image: '/shoes/shoe-8.avif',
    },
    {
      id: 3,
      status: 'Delivered on 04 August',
      statusColor: 'text-green-500',
      name: 'Nike Air Force 1 Low Retro',
      category: "Men's Shoes",
      size: '10',
      quantity: 2,
      price: 185.67,
      image: '/shoes/shoe-9.avif',
    },
    {
      id: 4,
      status: 'Estimated arrival 24 Sep 2025',
      statusColor: 'text-orange-500',
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      size: '10',
      quantity: 2,
      price: 98.3,
      image: '/shoes/shoe-10.avif',
    },
    {
      id: 5,
      status: 'Delivered on 04 August',
      statusColor: 'text-green-500',
      name: "Air Max 1 '86 Original",
      category: "Men's Shoes",
      size: '10',
      quantity: 2,
      price: 104.26,
      image: '/shoes/shoe-11.avif',
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryHandling = 2.0;
  const total = subtotal + deliveryHandling;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold">✓</div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-black font-medium"
              >
                Men
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black font-medium"
              >
                Women
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black font-medium"
              >
                Kids
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black font-medium"
              >
                Collections
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black font-medium"
              >
                Contact
              </a>
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-700">
                <Search className="w-5 h-5" />
                <span className="hidden sm:inline">Search</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden sm:inline">My Cart (2)</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-8">
                Cart
              </h1>

              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`${
                      index > 0 ? 'border-t border-gray-200 pt-6' : ''
                    }`}
                  >
                    {/* Status */}
                    <div className="mb-4">
                      <p className={`text-sm font-medium ${item.statusColor}`}>
                        {item.status}
                      </p>
                    </div>

                    {/* Product Details */}
                    <div className="flex items-start justify-between">
                      <div className="flex space-x-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-lg bg-gray-50 p-2"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {item.category}
                          </p>

                          <div className="flex items-center space-x-8 text-sm">
                            <div className="text-gray-600">
                              <span className="font-medium">Size </span>
                              <span>{item.size}</span>
                            </div>

                            <div className="flex items-center space-x-3">
                              <span className="text-gray-600 font-medium">
                                Quantity
                              </span>
                              <div className="flex items-center border border-gray-200 rounded">
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="p-1 hover:bg-gray-100"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="px-3 py-1 text-center min-w-[40px]">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="p-1 hover:bg-gray-100"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price and Remove */}
                      <div className="text-right flex flex-col items-end space-y-3">
                        <div className="text-xl font-semibold text-gray-900">
                          ${item.price.toFixed(2)}
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary - Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-8 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-8">
                Summary
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Estimated Delivery & Handling</span>
                  <span>${deliveryHandling.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Proceed to Checkout
              </button>

              {/* Shopping Cart Illustration */}
              <div className="mt-12 flex justify-center">
                <div className="relative">
                  <svg
                    className="w-32 h-32 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                  {/* Cart handle */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -top-1 -right-4 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-1 -right-6 w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NikeCartPage;
