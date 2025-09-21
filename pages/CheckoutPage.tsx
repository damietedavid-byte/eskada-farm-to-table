import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/helpers';
import ProductBranding from '../components/ProductBranding';
import { OPayLogo, WhatsAppLogo } from '../assets/logos';

const CheckoutPage: React.FC = () => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-eskada-green mb-10">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600 mb-4">Your cart is empty.</p>
          <Link to="/products" className="bg-eskada-green text-white font-bold py-3 px-8 rounded-lg hover:bg-eskada-light-green transition-colors duration-300">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b last:border-b-0">
                <div className="flex items-center space-x-4">
                  <ProductBranding
                    productName={item.name}
                    category={item.category}
                    size="sm"
                    className="w-20 h-20 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-500">{formatCurrency(item.price)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                    className="w-16 p-2 border rounded-md text-center"
                    aria-label={`Quantity for ${item.name}`}
                  />
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 font-medium">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(cartTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-gray-500">Calculated at next step</span>
              </div>
              <div className="flex justify-between font-bold text-xl border-t pt-4 mt-2">
                <span>Total</span>
                <span>{formatCurrency(cartTotal)}</span>
              </div>
            </div>

            <div className="mt-6 border-t pt-6">
                <h3 className="text-xl font-semibold mb-4 text-eskada-green">How to Complete Your Order</h3>
                
                <div className="mb-6">
                    <p className="font-bold mb-2 flex items-center">Step 1: Make Payment</p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center space-x-3 mb-2">
                             <OPayLogo className="h-8 w-auto flex-shrink-0" />
                            <p className="font-semibold text-gray-800 text-lg">OPAY / PAYCOM</p>
                        </div>
                        <div className="space-y-1 text-gray-700 pl-2">
                           <p>Account: <strong>8033107200</strong></p>
                           <p>Name: <strong>Sukariba Youdeowei</strong></p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="font-bold mb-2">Step 2: Confirm Order</p>
                    <p className="text-sm text-gray-600 mb-3">
                        After payment, please send your order list and proof of payment to our WhatsApp number.
                    </p>
                    <a 
                      href="https://wa.me/2348033107200" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full bg-[#25D366] text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                        <WhatsAppLogo className="h-6 w-6" />
                        <span>Confirm on WhatsApp</span>
                    </a>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;