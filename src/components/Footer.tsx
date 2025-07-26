
import { Heart, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-900/50 border-t border-gray-800 py-12 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Nexate</h3>
            <p className="text-gray-400 mb-4">
              Learn Lua programming from beginner to advanced with interactive tutorials and examples.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for the Lua community
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/intro" className="hover:text-white transition-colors">Get Started</a></li>
              <li><a href="/lesson-variables" className="hover:text-white transition-colors">Variables</a></li>
              <li><a href="/lesson-functions" className="hover:text-white transition-colors">Functions</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">External Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="https://www.lua.org/manual/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  Official Lua Manual <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/lua/lua" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  Lua on GitHub <Github className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://luarocks.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  LuaRocks <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
          <p>&copy; 2025 nexate.dev - Free Lua Learning Platform</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
