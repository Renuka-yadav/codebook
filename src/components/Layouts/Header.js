import {
  FiMoon,
  FiSun,
  FiHeart,
  FiMenu,
  FiX,
  FiBookOpen,
  FiUser,
  FiEdit,
  FiPackage,
} from "react-icons/fi";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images.jpg";
import { Search } from "../Sections/Search";
import { DropdownLoggedOut, DropdownLoggedIn } from "../index";
import { useCart, useWishlist } from "../../context";

export const Header = () => {
  const { cartList } = useCart();
  const { wishlist } = useWishlist();

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const [searchSection, setSearchSection] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          
          {/* Left Side */}
          <div className="flex items-center">

            {/* Hamburger (Mobile Only) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden mr-3 text-2xl text-gray-700 dark:text-white"
            >
              <FiMenu />
            </button>

            <Link to="/" className="flex items-center">
              <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                CodeBook
              </span>
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center relative">

            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl text-gray-700 dark:text-white mr-5 hover:text-blue-500 transition"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            {/* Search */}
            <span
              onClick={() => setSearchSection(!searchSection)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative text-gray-700 dark:text-white mr-5 hover:text-red-500 transition"
            >
              <FiHeart size={22} />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {wishlist.length}
              </span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="text-gray-700 dark:text-white mr-5"
            >
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">
                  {cartList.length}
                </span>
              </span>
            </Link>

            {/* User */}
            <span
              onClick={() => setDropdown(!dropdown)}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>

            {dropdown &&
              (token ? (
                <DropdownLoggedIn setDropdown={setDropdown} />
              ) : (
                <DropdownLoggedOut setDropdown={setDropdown} />
              ))}
          </div>
        </div>
      </nav>

      {searchSection && (
        <Search setSearchSection={setSearchSection} />
      )}

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end p-5">
          <button onClick={() => setMenuOpen(false)}>
            <FiX className="text-2xl dark:text-white" />
          </button>
        </div>

        {/* Menu */}
        <div className="flex flex-col">

          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
          >
            <FiBookOpen />
            All eBooks
          </Link>

          {!token && (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
              >
                <FiUser />
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
              >
                <FiEdit />
                Register
              </Link>
            </>
          )}

          {token && (
            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
            >
              <FiPackage />
              Orders
            </Link>
          )}

        </div>
      </div>
    </header>
  );
};