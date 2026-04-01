import { ShoppingCart } from "lucide-react";

const NavBar = ({ carts }) => {
  const navLinks = [
    { label: "Products", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-lg bg-white rounded-box w-52 font-semibold"
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-purple-600 py-2">
                    {link.label}
                  </a>
                </li>
              ))}
              
              <div className="divider my-1"></div>
              <li><a href="#" className="hover:text-purple-600 py-2">Login</a></li>
              <li>
                <a className="bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white rounded-full mt-1 justify-center">
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          <a className="bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent font-extrabold text-3xl">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1 text-base font-semibold">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-purple-600 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-6">
          <div className="relative inline-block">
            <ShoppingCart className="cursor-pointer w-6 h-6" />
            <span className="absolute -top-3 left-3 bg-red-500 rounded-full min-w-5 h-5 flex items-center justify-center text-white text-xs font-bold px-1">
              {carts.length}
            </span>
          </div>

          <a
            href="#"
            className="hidden lg:block font-semibold text-base hover:text-purple-600 transition-colors duration-200"
          >
            Login
          </a>

          <a className="hidden lg:inline-flex btn bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full text-white border-none hover:scale-[1.02] transition-all duration-200">
            Get Started
          </a>

        </div>
      </div>
    </div>
  );
};

export default NavBar;