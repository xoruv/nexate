
import { motion } from 'framer-motion';
import { ExternalLink, Download, BookOpen, Github, Video, FileText } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Resources = () => {
  const officialResources = [
    {
      title: "Official Lua Manual",
      description: "The complete reference manual for the Lua programming language",
      url: "https://www.lua.org/manual/",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Lua.org",
      description: "Official website with downloads, documentation, and news",
      url: "https://www.lua.org/",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "LuaRocks",
      description: "Package manager for Lua modules and libraries",
      url: "https://luarocks.org/",
      icon: <Download className="h-6 w-6" />
    }
  ];

  const communityResources = [
    {
      title: "Lua on GitHub",
      description: "Official Lua source code repository",
      url: "https://github.com/lua/lua",
      icon: <Github className="h-6 w-6" />
    },
    {
      title: "Programming in Lua (Book)",
      description: "The official book by Lua's creators - excellent for learning",
      url: "https://www.lua.org/pil/",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Lua Users Wiki",
      description: "Community-maintained wiki with tutorials and examples",
      url: "http://lua-users.org/wiki/",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const videoResources = [
    {
      title: "Lua Basics Tutorial Series",
      description: "Comprehensive video series covering Lua fundamentals",
      duration: "2 hours",
      level: "Beginner",
      url: "https://www.youtube.com/watch?v=iMacxZQMPXs"
    },
    {
      title: "Game Development with Lua",
      description: "Learn how to use Lua in game engines like LÖVE2D",
      duration: "3.5 hours",
      level: "Intermediate",
      url: "https://www.youtube.com/watch?v=3k4CMAaNCuk"
    },
    {
      title: "Advanced Lua Patterns",
      description: "Metatables, coroutines, and advanced programming patterns",
      duration: "1.5 hours",
      level: "Advanced",
      url: "https://www.youtube.com/watch?v=Lt7ijGTiCRs"
    }
  ];

  const tools = [
    {
      title: "ZeroBrane Studio",
      description: "Lightweight Lua IDE with debugging support",
      type: "IDE",
      url: "https://studio.zerobrane.com/"
    },
    {
      title: "LÖVE2D",
      description: "2D game development framework using Lua",
      type: "Game Engine",
      url: "https://love2d.org/"
    },
    {
      title: "OpenResty",
      description: "Web platform based on Nginx and LuaJIT",
      type: "Web Framework",
      url: "https://openresty.org/"
    },
    {
      title: "World of Warcraft Addons",
      description: "Create WoW addons using Lua scripting",
      type: "Gaming",
      url: "https://wowpedia.fandom.com/wiki/AddOn"
    }
  ];

  return (
    <div className="min-h-screen bg-lua-dark">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text">Resources</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expand your Lua knowledge with these carefully curated resources, 
              tools, and learning materials from the community.
            </p>
          </motion.div>

          {/* Official Resources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Official Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {officialResources.map((resource, index) => (
                <motion.a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="lesson-card block group"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-lua-accent mr-3">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-lua-accent transition-colors">
                      {resource.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-gray-400 ml-auto group-hover:text-lua-accent transition-colors" />
                  </div>
                  <p className="text-gray-400">{resource.description}</p>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Community Resources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Community & Documentation</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {communityResources.map((resource, index) => (
                <motion.a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="lesson-card block group"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-lua-accent mr-3">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-lua-accent transition-colors">
                      {resource.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-gray-400 ml-auto group-hover:text-lua-accent transition-colors" />
                  </div>
                  <p className="text-gray-400">{resource.description}</p>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Video Tutorials */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Video Tutorials</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {videoResources.map((video, index) => (
                <motion.a
                  key={video.title}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="lesson-card block group cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <Video className="h-6 w-6 text-lua-accent mr-3" />
                    <h3 className="text-lg font-semibold group-hover:text-lua-accent transition-colors">{video.title}</h3>
                    <ExternalLink className="h-4 w-4 text-gray-400 ml-auto group-hover:text-lua-accent transition-colors" />
                  </div>
                  <p className="text-gray-400 mb-4">{video.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{video.duration}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      video.level === 'Beginner' 
                        ? 'bg-green-500/20 text-green-400' 
                        : video.level === 'Intermediate'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {video.level}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Tools & Applications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Tools & Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <motion.a
                  key={tool.title}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="lesson-card block group cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold group-hover:text-lua-accent transition-colors">{tool.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="bg-lua-blue/20 text-lua-light-blue px-2 py-1 rounded text-xs">
                        {tool.type}
                      </span>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-lua-accent transition-colors" />
                    </div>
                  </div>
                  <p className="text-gray-400">{tool.description}</p>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Downloadable Resources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Downloadable Resources</h2>
            <div className="bg-gradient-to-r from-lua-blue/20 to-lua-accent/20 rounded-3xl p-8 border border-gray-800">
              <div className="text-center">
                <Download className="h-12 w-12 text-lua-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Lua Cheatsheet</h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  A comprehensive PDF cheatsheet covering all essential Lua syntax, functions, 
                  and patterns. Perfect for quick reference during development.
                </p>
                <a 
                  href="https://www.lua.org/manual/5.4/manual.html#pdf-manual"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Cheatsheet
                </a>
              </div>
            </div>
          </motion.section>

          {/* Community Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Join the Community</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Connect with other Lua developers, share your projects, and get help 
              when you need it. The Lua community is welcoming and helpful!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://discord.gg/shadx" target="_blank" rel="noopener noreferrer" className="btn-primary">Join Discord Community</a>
              <a href="https://devforum.roblox.com/c/help-and-feedback/scripting-support/148" target="_blank" rel="noopener noreferrer" className="btn-secondary">Browse Forum</a>
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
