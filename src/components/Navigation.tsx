
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, BookOpen, Heart, Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Introduction', path: '/intro' },
    { name: 'Variables', path: '/lesson-variables' },
    { name: 'Functions', path: '/lesson-functions' },
    { name: 'Tables', path: '/lesson-tables' },
    { name: 'Control Flow', path: '/lesson-control-flow' },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about' }
  ];

  const filteredNavItems = navItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchFocus = () => {
    setShowSearchResults(true);
  };

  const handleSearchBlur = () => {
    // Delay hiding results to allow clicking on them
    setTimeout(() => setShowSearchResults(false), 200);
  };

  const handleSearchItemClick = (path: string) => {
    navigate(path);
    setSearchQuery('');
    setShowSearchResults(false);
    setIsMenuOpen(false);
  };

  const { toast } = useToast();

  const cryptoAddresses = [
    { name: 'Bitcoin (BTC)', address: 'bc1qtml0gkt64qrae084efsaell2hq5a9nusje0c5w' },
    { name: 'Ethereum (ETH)', address: '0xCE66c8365D6454a69cf4Fca28051C918198b0a42' },
    { name: 'Litecoin (LTC)', address: 'LVxZLx61sRng6u5NH529Po31ExAff7VQ6o' },
    { name: 'Tether USD', address: '0xCE66c8365D6454a69cf4Fca28051C918198b0a42' },
  ];

  const copyToClipboard = (address: string, name: string) => {
    navigator.clipboard.writeText(address);
    toast({
      title: "Address copied!",
      description: `${name} address copied to clipboard`,
    });
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-lua-dark/95 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-lua-accent" />
            <span className="text-xl font-bold gradient-text">Nexate</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8 relative">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search lessons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-lua-accent focus:ring-1 focus:ring-lua-accent"
              />
              
              {/* Search Results Dropdown */}
              {showSearchResults && searchQuery && (
                <div className="absolute top-full mt-2 w-full bg-gray-900 border border-gray-700 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
                  {filteredNavItems.length > 0 ? (
                    filteredNavItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleSearchItemClick(item.path)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white transition-colors border-b border-gray-800 last:border-b-0"
                      >
                        {item.name}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-400 text-sm">
                      No lessons found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? 'text-lua-accent' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Donate Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Heart className="h-4 w-4 mr-2" />
                  Donate
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-gray-900 border-gray-700">
                <DropdownMenuLabel className="text-gray-300">
                  Support Nexate
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                <div className="p-2">
                  <p className="text-sm text-gray-400 mb-3">
                    Donations help keep the site running!
                  </p>
                  {cryptoAddresses.map((crypto, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="hover:bg-gray-800 cursor-pointer flex flex-col items-start p-3 space-y-1"
                      onClick={() => copyToClipboard(crypto.address, crypto.name)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium text-gray-300">{crypto.name}</span>
                        <Copy className="h-4 w-4 text-gray-400" />
                      </div>
                      <span className="text-xs text-gray-500 break-all">
                        {crypto.address}
                      </span>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-lua-dark border-t border-gray-800"
        >
          <div className="px-4 py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search lessons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-lua-accent focus:ring-1 focus:ring-lua-accent"
              />
            </div>
            
            {/* Show filtered results in mobile */}
            {filteredNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 text-gray-300 hover:text-white transition-colors ${
                  location.pathname === item.path ? 'text-lua-accent' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Donate Section */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center mb-2">
                <Heart className="h-4 w-4 mr-2 text-lua-accent" />
                <span className="text-gray-300 font-medium">Support Nexate</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                Donations help keep the site running!
              </p>
              {cryptoAddresses.map((crypto, index) => (
                <button
                  key={index}
                  onClick={() => copyToClipboard(crypto.address, crypto.name)}
                  className="w-full text-left p-2 mb-2 bg-gray-900/50 border border-gray-700 rounded hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-300">{crypto.name}</span>
                    <Copy className="h-3 w-3 text-gray-400" />
                  </div>
                  <span className="text-xs text-gray-500 break-all block mt-1">
                    {crypto.address}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
