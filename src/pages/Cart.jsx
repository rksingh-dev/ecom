import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useEffect, useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between py-4 px-4 gap-8 min-h-[80vh] bg-white rounded-lg shadow-md my-4">
      {cart.length > 0 ? (
        <>
          {/* Cart Items Section */}
          <div className="md:w-[60%] flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart ({cart.length} items)</h2>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="md:w-[35%] h-fit mt-8 md:mt-0">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center text-gray-600">
                  <p>Total Items:</p>
                  <p className="font-semibold">{cart.length}</p>
                </div>
                
                <div className="flex justify-between items-center text-gray-600">
                  <p>Delivery:</p>
                  <p className="text-green-600 font-semibold">FREE</p>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-2">
                  <div className="flex justify-between items-center text-lg font-bold text-gray-800">
                    <p>Total Amount:</p>
                    <p>${totalAmount.toFixed(2)}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Including all taxes</p>
                </div>

                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold mt-4
                                 hover:bg-green-700 transition duration-300 flex items-center justify-center gap-2">
                  <span>Checkout</span>
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full min-h-[80vh] flex flex-col items-center justify-center gap-4">
          <FaShoppingBag className="text-gray-300 text-7xl"/>
          <h1 className="text-2xl font-bold text-gray-800">Your cart is empty!</h1>
          <p className="text-gray-600 mb-4">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg
                             transition duration-300 flex items-center gap-2">
              <span>Continue Shopping</span>
              <span className="text-lg">→</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;