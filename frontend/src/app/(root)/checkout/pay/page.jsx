'use client';
import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, CreditCard } from 'lucide-react';

const NikePaymentCheckout = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('United States');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('1234 1234 1234 1234');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [billingInfoSame, setBillingInfoSame] = useState(true);
  const [saveInfo, setSaveInfo] = useState(false);

  const currencies = [
    { code: 'INR', symbol: '₹', amount: '20,958.30', flag: '🇮🇳' },
    { code: 'USD', symbol: '$', amount: '232.00', flag: '🇺🇸' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Order Summary */}
          <div className="bg-white rounded-lg p-8 h-fit">
            {/* Header */}
            <div className="flex items-center mb-8">
              <ArrowLeft className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-gray-900 font-medium">nike</span>
              <span className="ml-2 bg-gray-700 text-white text-xs px-2 py-1 rounded">
                Sandbox
              </span>
            </div>

            {/* Currency Selection */}
            <div className="mb-8">
              <h3 className="text-gray-700 font-medium mb-4">
                Choose a currency:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {currencies.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => setSelectedCurrency(currency.code)}
                    className={`p-4 border-2 rounded-lg text-left transition-colors ${
                      selectedCurrency === currency.code
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{currency.flag}</span>
                      <span className="font-semibold text-gray-900">
                        {currency.symbol}
                        {currency.amount}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                1 USD = 90.2375 INR{' '}
                <span className="text-blue-600">
                  (includes 3.75% conversion fee)
                </span>
              </p>
            </div>

            {/* Order Details */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-gray-900">Air Max 97</h4>
                  <p className="text-sm text-gray-600">Qty 2</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">₹20,777.63</p>
                  <p className="text-sm text-gray-600">₹10,388.81 each</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="font-semibold">₹20,777.62</span>
                </div>
              </div>

              <button className="text-blue-600 text-sm hover:underline">
                Add promotion code
              </button>

              <div className="flex justify-between text-gray-700">
                <div>
                  <span>Shipping</span>
                  <p className="text-xs text-gray-500">Standard</p>
                </div>
                <span>₹180.68</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total due</span>
                  <span>₹20,958.30</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Payment Form */}
          <div className="bg-white rounded-lg p-8">
            {/* Payment Method Tabs */}
            <div className="grid grid-cols-2 mb-8">
              <button className="py-3 px-4 border-b-2 border-gray-300 text-gray-600 text-center">
                Pay with card
              </button>
              <button className="py-3 px-4 border-b-2 border-green-400 bg-green-100 text-green-700 text-center font-medium">
                Pay with 🔗 link
              </button>
            </div>

            {/* Shipping Information */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">
                Shipping information
              </h3>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Shipping Address */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">
                  Shipping address
                </h4>

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full name"
                  className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <div className="relative mb-3">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                  </select>
                  <ChevronDown className="w-5 h-5 absolute right-3 top-3 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-3">
                    <div className="w-6 h-6 bg-gray-200 rounded cursor-pointer"></div>
                  </div>
                </div>

                <button className="text-blue-600 text-sm mt-2 hover:underline">
                  Enter address manually
                </button>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">
                Payment method
              </h3>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Card information
                </h4>

                <div className="relative mb-3">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-20"
                  />
                  <div className="absolute right-3 top-3 flex space-x-1">
                    <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                      VISA
                    </div>
                    <div className="w-8 h-5 bg-red-500 rounded"></div>
                    <div className="w-8 h-5 bg-blue-400 rounded"></div>
                    <div className="w-8 h-5 bg-orange-500 rounded"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM / YY"
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="relative">
                    <input
                      type="text"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      placeholder="CVC"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    />
                    <CreditCard className="w-4 h-4 absolute right-3 top-3.5 text-gray-400" />
                  </div>
                </div>

                <label className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    checked={billingInfoSame}
                    onChange={(e) => setBillingInfoSame(e.target.checked)}
                    className="mr-3 w-4 h-4 text-blue-600"
                  />
                  <span className="text-gray-700">
                    Billing info is same as shipping
                  </span>
                </label>
              </div>
            </div>

            {/* Save Information */}
            <div className="mb-8">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                  className="mr-3 w-4 h-4 text-blue-600 mt-0.5"
                />
                <div>
                  <span className="text-gray-700">
                    Save my information for faster checkout
                  </span>
                  <p className="text-sm text-gray-500">
                    Pay securely at nike and everywhere Link is accepted.
                  </p>
                </div>
              </label>
            </div>

            {/* Pay Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors mb-4">
              Pay
            </button>

            {/* Footer */}
            <div className="text-center text-sm text-gray-500">
              <span>Powered by </span>
              <span className="font-semibold text-gray-700">stripe</span>
              <span className="mx-2">•</span>
              <a href="#" className="hover:underline">
                Terms
              </a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NikePaymentCheckout;
