'use client';
import { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  FileText,
  MessageCircle,
  Mail,
  CheckSquare,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState('Orders');
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  return (
    <div className="py-15 fixed top-0 left-0 select-none">
      <div
        className={`${
          collapsed ? 'w-16' : 'w-64'
        } bg-gray-200 min-h-screen flex flex-col transition-all duration-300 `}
      >
        {/* Sidebar Menu */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="px-2 space-y-1">
            {/* Dashboard */}
            <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer">
              <LayoutDashboard size={20} />
              {!collapsed && <span>Dashboard</span>}
            </li>

            {/* Orders Dropdown */}
            <li>
              <div
                className="flex items-center justify-between p-2 rounded hover:bg-gray-100 cursor-pointer"
                onClick={() => toggleMenu('Orders')}
              >
                <div className="flex items-center gap-2">
                  <ShoppingCart size={20} />
                  {!collapsed && <span>Orders</span>}
                </div>
                {!collapsed &&
                  (openMenu === 'Orders' ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  ))}
              </div>
              {openMenu === 'Orders' && !collapsed && (
                <ul className="ml-8 space-y-1">
                  <li className="p-1 text-sm hover:bg-gray-100 cursor-pointer rounded">
                    All Orders
                  </li>
                  <li className="p-1 text-sm hover:bg-gray-100 cursor-pointer rounded">
                    Orders List
                  </li>
                  <li className="p-1 text-sm hover:bg-gray-100 cursor-pointer rounded">
                    Orders Details
                  </li>
                  <li className="p-1 text-sm hover:bg-gray-100 cursor-pointer rounded">
                    Invoice Order
                  </li>
                  <li className="p-1 text-sm hover:bg-gray-100 cursor-pointer rounded">
                    Cancel Order
                  </li>
                </ul>
              )}
            </li>

            {/* Products Dropdown */}
            <li>
              <div
                className="flex items-center justify-between p-2 rounded hover:bg-gray-100 cursor-pointer"
                onClick={() => toggleMenu('Products')}
              >
                <div className="flex items-center gap-2">
                  <Package size={20} />
                  {!collapsed && <span>Products</span>}
                </div>
                {!collapsed &&
                  (openMenu === 'Products' ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  ))}
              </div>
              {openMenu === 'Products' && !collapsed && (
                <ul className="ml-8 space-y-1">
                  <li className="p-1 text-sm hover:bg-gray-100 cursor-pointer rounded">
                    <Link href={'/admin/dashboard/products/create-product'}>
                      Create Product
                    </Link>
                  </li>
                  <li className="p-1 text-sm hover:bg-gray-100 cursor-pointer rounded">
                    Product List
                  </li>
                  <li className="p-1 text-sm hover:bg-gray-100 cursor-pointer rounded">
                    Product Details
                  </li>
                  <li className="p-1 text-sm hover:bg-gray-100 cursor-pointer rounded">
                    Edit Product
                  </li>
                  <li className="p-1 text-sm hover:bg-gray-100 cursor-pointer rounded">
                    Product Categories
                  </li>
                  <li className="p-1 text-sm hover:bg-gray-100 cursor-pointer rounded">
                    Product Reviews
                  </li>
                </ul>
              )}
            </li>

            {/* Other menus */}
            <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer">
              <Users size={20} />
              {!collapsed && <span>Buyer</span>}
            </li>
            <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer">
              <Users size={20} />
              {!collapsed && <span>Customers</span>}
            </li>
            <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer">
              <FileText size={20} />
              {!collapsed && <span>Invoices</span>}
            </li>
            <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer">
              <MessageCircle size={20} />
              {!collapsed && <span>Chats</span>}
            </li>
            <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer">
              <Mail size={20} />
              {!collapsed && <span>Email</span>}
            </li>
            <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer">
              <CheckSquare size={20} />
              {!collapsed && <span>Todo App</span>}
            </li>
          </ul>
        </nav>
      </div>
      {/* Collapse Button */}
      <button
        className="p-3 border-t hover:bg-gray-100"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? '➡️' : '⬅️'}
      </button>
    </div>
  );
};

export default Sidebar;
