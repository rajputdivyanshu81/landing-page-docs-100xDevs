const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold">TechLearn</h3>
              <p className="mt-4 text-gray-400">Empowering developers through comprehensive education and hands-on experience.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Learning Paths</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Frontend Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Backend Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">DevOps</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cloud Computing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 100xDevs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;