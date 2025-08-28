'use client';
import React, { useState } from 'react';
import { Search, ShoppingCart, X } from 'lucide-react';
import Image from 'next/image';

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState('My Orders');

  // Sample orders data
  const orders = [
    {
      id: 1,
      status: 'Estimated arrival 24 Sep 2025',
      statusColor: 'text-orange-500',
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      size: '10',
      quantity: '2',
      price: '$98.30',
      image: '/shoes/shoe-6.avif',
      canCancel: true,
    },
    {
      id: 2,
      status: 'Delivered on 04 August',
      statusColor: 'text-green-500',
      name: "Air Max 1 '86 Original",
      category: "Men's Shoes",
      size: '10',
      quantity: '2',
      price: '$104.26',
      image: '/shoes/shoe-7.avif',
      canCancel: true,
    },
    {
      id: 3,
      status: 'Delivered on 04 August',
      statusColor: 'text-green-500',
      name: 'Nike Air Force 1 Low Retro',
      category: "Men's Shoes",
      size: '10',
      quantity: '2',
      price: '$185.67',
      image: '/shoes/shoe-8.avif',
      canCancel: true,
    },
  ];

  const tabs = [
    'My Orders',
    'Favorites',
    'My Details',
    'Payment Methods',
    'Address Book',
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          {/* User Profile Header */}
          <div className="px-8 py-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/icons/placeholder-avatar.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Ronald O. Williams
                </h1>
                <p className="text-gray-600">ronald@mail.com</p>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="px-8">
            <nav className="flex space-x-8 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Orders Content */}
          <div className="px-8 py-6">
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-gray-50 rounded-lg p-6">
                  {/* Order Status */}
                  <div className="mb-4">
                    <p className={`text-sm font-medium ${order.statusColor}`}>
                      {order.status}
                    </p>
                  </div>

                  {/* Order Details */}
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={order.image}
                          alt={order.name}
                          className="w-24 h-24 object-cover rounded-lg bg-white p-2"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {order.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {order.category}
                        </p>

                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Size </span>
                            <span>{order.size}</span>
                          </div>
                          <div>
                            <span className="font-medium">Quantity </span>
                            <span>{order.quantity}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="text-right flex flex-col items-end space-y-3">
                      <div className="text-xl font-semibold text-gray-900">
                        {order.price}
                      </div>

                      {order.canCancel && (
                        <button className="flex items-center space-x-1 text-red-600 hover:text-red-700 text-sm cursor-pointer">
                          <Image
                            src={'/icons/red-delete.svg'}
                            width={20}
                            height={20}
                            alt="delete"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
