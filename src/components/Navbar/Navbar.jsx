import { ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <div className="navbar w-11/12 mx-auto">
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
        <ShoppingCart className="cursor-pointer"/>
        <a href="" className="font-semibold text-lg">Login</a>
        <a className="btn bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;