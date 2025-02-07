import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            >
              100xDevs
            </motion.span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-8"
            >
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#paths"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Learning Paths
              </a>
              <a
                href="#resources"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Resources
              </a>
              <button
               onClick={() =>
                window.open(
                  "https://the-web-dev-by100x-devs.vercel.app",
                  "_self"
                )
              } className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                Get Started
              </button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#paths"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Learning Paths
              </a>
              <a
                href="#resources"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Resources
              </a>
              <button
                onClick={() =>
                  window.open(
                    "https://the-web-dev-by100x-devs.vercel.app",
                    "_self"
                  )
                }
                className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;