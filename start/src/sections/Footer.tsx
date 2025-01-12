import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="text-white py-10 mt-10 border-t border-gray-700 ">
      {/* Custom container with reduced padding */}
      <div className="container mx-auto ml-10 mr-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Mission */}
        <div className="">
          <h1 className="text-4xl font-bold">Desha E-Mart</h1>
          <p className="mt-2 text-sm">
            Our mission is to provide quality products and trusted repair
            services, making technology accessible and reliable for all.
          </p>
          <div className="mt-4">
            <span>Follow in:</span>
            <div className="flex space-x-2 mt-2">
              <a href="/" className="text-white text-xl hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="/" className="text-white text-xl hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/" className="text-white text-xl hover:text-gray-400">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="ml-20">
          <h2 className="font-bold text-lg">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm list-disc list-inside">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-400">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="ml-10">
          <h2 className="font-bold text-lg">Services</h2>
          <ul className="mt-4 space-y-2 text-sm list-disc list-inside">
            <li>
              <a href="/" className="hover:text-gray-400">
                Smartphone Repair
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-400">
                Laptop Repair
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-400">
                Desktop Repair
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-400">
                Tablet Repair
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-400">
                OS Update
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="ml-10">
          <h2 className="font-bold text-lg">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <span className="inline-block w-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <span className="ml-5">Pambahinna, Balangoda, Rathnapura.</span>
            </li>
            <li>
              <span className="inline-block w-4">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="ml-5">deshamart@gmail.com</span>
            </li>
            <li>
              <span className="inline-block w-4">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="ml-5">(+94) 76 214 639</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-b border-gray-700 pt-4 pb-4 text-center text-sm">
        <p>© 2024 Desha E-Mart. All Rights Reserved by team ///.</p>
        <p className="mt-2">
          Read our{" "}
          <a href="/" className="hover:text-gray-400">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/" className="hover:text-gray-400">
            Terms of Use
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
