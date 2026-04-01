import { ShoppingCart } from "lucide-react";

const NavBar = ({ carts }) => {
  return (
    <div className="max-w-7xl mx-auto navbar top-0 z-50 bg-white ">
      <div className="navbar-start">
        <div className="bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent font-extrabold text-3xl">
          DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg font-semibold">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="relative inline-block">
          <ShoppingCart className="cursor-pointer" />
          <span className="absolute -top-4 left-2 bg-red-500 rounded-full px-1 min-w-5 flex items-center justify-center text-white">{carts.length}</span>
        </div>
        <a href="" className="font-semibold text-lg">Login</a>
        <a className="btn bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full text-white hover:scale-[1.02] transition-all duration-200">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;