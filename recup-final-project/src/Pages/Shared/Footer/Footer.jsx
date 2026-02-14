import React from "react";
import Logo from "../../../components/Logo/Logo";
import { Link } from "react-router"; // or react-router-dom

const Footer = () => {
  return (
    <footer className="bg-base-200  pt-16 pb-8 text-secondary">
      <div className="container mx-auto px-4">
        <div className="footer grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Section */}
          <aside className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              We provide fast and secure delivery services. Ensuring your products reach their
              destination on time is our primary mission. Trusted technology with premium service.
            </p>
            <div className="flex gap-4 mt-6">
              {/* Facebook */}
              <a
                href="#"
                className="btn btn-ghost btn-sm btn-circle bg-base-300 hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="btn btn-ghost btn-sm btn-circle bg-base-300 hover:text-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
            </div>
          </aside>

          {/* Quick Links */}
          <nav>
            <h6 className="footer-title text-primary opacity-100 font-bold mb-4 text-lg">
              Company
            </h6>
            <Link to="/about" className="link link-hover mb-2 block opacity-80 hover:text-primary">
              About Us
            </Link>
            <Link
              to="/coverage"
              className="link link-hover mb-2 block opacity-80 hover:text-primary"
            >
              Coverage Area
            </Link>
            <Link
              to="/pricing"
              className="link link-hover mb-2 block opacity-80 hover:text-primary"
            >
              Pricing Plans
            </Link>
            <Link
              to="/contact"
              className="link link-hover mb-2 block opacity-80 hover:text-primary"
            >
              Contact Us
            </Link>
          </nav>

          {/* Services Section */}
          <nav>
            <h6 className="footer-title text-primary opacity-100 font-bold mb-4 text-lg">
              Services
            </h6>
            <Link to="/" className="link link-hover mb-2 block opacity-80 hover:text-primary">
              Door to Door Delivery
            </Link>
            <Link to="/" className="link link-hover mb-2 block opacity-80 hover:text-primary">
              Next Day Delivery
            </Link>
            <Link to="/" className="link link-hover mb-2 block opacity-80 hover:text-primary">
              Parcel Tracking
            </Link>
            <Link to="/" className="link link-hover mb-2 block opacity-80 hover:text-primary">
              Corporate Logistics
            </Link>
          </nav>

          {/* Newsletter Section */}
          <div>
            <h6 className="footer-title text-primary opacity-100 font-bold mb-4 text-lg">
              Newsletter
            </h6>
            <p className="text-sm mb-4 opacity-80">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="join w-full shadow-sm">
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered join-item w-full focus:outline-primary border-r-0"
              />
              <button className="btn btn-primary join-item text-white border-none px-6">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
