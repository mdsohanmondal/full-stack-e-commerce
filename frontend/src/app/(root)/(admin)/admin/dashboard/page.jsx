'use client';
import { Bell, Search, User } from 'lucide-react';
import React from 'react';

const Admin = () => {
  return (
    <div className="flex-1 bg-gray-50 min-h-screen p-6">
      {/* Topbar */}
      <div className="flex items-center justify-between mb-6">
        {/* Search */}
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm w-80">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Bell className="cursor-pointer text-gray-600" />
          <div className="flex items-center gap-2 cursor-pointer">
            <User className="text-gray-600" />
            <span className="hidden sm:block font-medium">Sohan</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Total Orders</p>
          <h2 className="text-2xl font-bold mt-2">1,245</h2>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Revenue</p>
          <h2 className="text-2xl font-bold mt-2">$45,300</h2>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Customers</p>
          <h2 className="text-2xl font-bold mt-2">892</h2>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Products</p>
          <h2 className="text-2xl font-bold mt-2">312</h2>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">Recent Orders</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Order ID</th>
                <th className="p-2">Customer</th>
                <th className="p-2">Status</th>
                <th className="p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">#1024</td>
                <td className="p-2">John Doe</td>
                <td className="p-2 text-green-600">Completed</td>
                <td className="p-2">$250</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">#1025</td>
                <td className="p-2">Sarah Smith</td>
                <td className="p-2 text-yellow-600">Pending</td>
                <td className="p-2">$120</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Analytics / Chart Placeholder */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">Sales Analytics</h3>
          <div className="h-48 flex items-center justify-center text-gray-400">
            📊 Chart Here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
