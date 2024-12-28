import { MdShoppingCart, MdSearch, MdPerson } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-green-600 text-white text-sm py-2 text-center">
        Free Shipping on Orders Over $50 | Shop Now!
      </div>

      <nav className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 max-w-6xl mx-auto py-4 px-6">
        {/* Left Section - Logo and Categories */}
        <div className="flex items-center space-x-8">
          <NavLink to="/">
            <img src="../logo.png" alt="logo" className="h-14"/>
          </NavLink>
          
          {/* Categories Dropdown */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/men" className="text-gray-600 hover:text-green-600 transition duration-300">Men</NavLink>
            <NavLink to="/women" className="text-gray-600 hover:text-green-600 transition duration-300">Women</NavLink>
            <NavLink to="/kids" className="text-gray-600 hover:text-green-600 transition duration-300">Kids</NavLink>
          </div>
        </div>

        {/* Center Section - Search Bar */}
        <div className="relative hidden md:block flex-1 max-w-lg mx-8">
          <input 
            type="text" 
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-full border-2 border-gray-200 focus:border-green-500 focus:outline-none
                     transition duration-300"
          />
          <MdSearch className="absolute right-3 top-2.5 text-gray-400 text-xl"/>
        </div>

        {/* Right Section - Auth and Cart */}
        <div className="flex items-center space-x-6 mt-4 sm:mt-0">
          {/* Login/Signup Buttons */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setShowAuthModal(true)}
              className="text-gray-600 hover:text-green-600 transition duration-300 flex items-center gap-1"
            >
              <MdPerson className="text-2xl"/>
              <span className="hidden sm:inline">Login</span>
            </button>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <button 
              onClick={() => setShowAuthModal(true)}
              className="hidden sm:block px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 
                       transition duration-300"
            >
              Sign Up
            </button>
          </div>

          {/* Cart Icon */}
          <NavLink to="/cart" className="relative"> 
            <div className="text-gray-600 hover:text-green-600 transition duration-300">
              <MdShoppingCart className="text-2xl"/>
              {cart.length > 0 && 
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                              justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              }
            </div>
          </NavLink>
        </div>
      </nav>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-full border-2 border-gray-200 focus:border-green-500 focus:outline-none"
          />
          <MdSearch className="absolute right-3 top-2.5 text-gray-400 text-xl"/>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setShowAuthModal(false)}
          />
          
          {/* Modal Container */}
          <div className="flex items-center justify-center min-h-screen p-4">
            {/* Modal Content */}
            <div 
              className="relative bg-white w-full max-w-md rounded-2xl p-6
                       shadow-2xl transform transition-all animate-modal-slide-down z-[10000]"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {isLogin ? "Login" : "Sign Up"}
                </h2>
                <button 
                  onClick={() => setShowAuthModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Auth Form */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-medium">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                               focus:ring-green-500 focus:border-transparent transition-all duration-200
                               hover:border-gray-400"
                      placeholder="Enter your name"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <label className="block text-gray-700 text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                             focus:ring-green-500 focus:border-transparent transition-all duration-200
                             hover:border-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 text-sm font-medium">Password</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                             focus:ring-green-500 focus:border-transparent transition-all duration-200
                             hover:border-gray-400"
                    placeholder="Enter your password"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 
                           transition-all duration-200 font-semibold text-sm mt-6
                           transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                  <button 
                    className="text-green-600 hover:text-green-700 font-semibold
                             transition-colors duration-200"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? "Sign up" : "Login"}
                  </button>
                </p>
              </div>

              {/* Social Login Options */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 
                                   rounded-lg hover:bg-gray-50 transition-all duration-200 text-sm
                                   transform hover:scale-[1.02] active:scale-[0.98]">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" 
                         alt="Google" className="h-5 w-5 mr-2"/>
                    Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
