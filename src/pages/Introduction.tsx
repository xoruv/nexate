
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Code, Lightbulb } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CodeEditor from '../components/CodeEditor';

const Introduction = () => {
  const helloWorldCode = `-- Your first Lua program
print("Hello, World!")
print("Welcome to Lua programming!")

-- Variables are easy to create
local message = "Lua is awesome!"
print(message)`;

  const features = [
    "Lightweight and fast execution",
    "Simple, clean syntax",
    "Powerful and flexible",
    "Embeddable in applications",
    "Great for scripting and configuration",
    "Used in games, web servers, and more"
  ];

  return (
    <div className="min-h-screen bg-lua-dark">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text">Introduction to Lua</h1>
            <p className="text-xl text-gray-400 mb-12">
              Discover the power and simplicity of Lua programming language.
            </p>
          </motion.div>

          {/* What is Lua */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-lua-accent mr-3" />
                <h2 className="text-2xl font-semibold">What is Lua?</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Lua is a powerful, efficient, lightweight, embeddable scripting language. 
                It was designed from the beginning to be integrated into applications. 
                Lua is cross-platform since it is written in ANSI C, and has a simple C API.
              </p>
            </div>
          </motion.section>

          {/* Why Learn Lua */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Why Learn Lua?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                  <div className="w-2 h-2 bg-lua-accent rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Hello World Example */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Play className="h-6 w-6 text-lua-accent mr-3" />
              <h2 className="text-3xl font-bold">Your First Lua Program</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Let's start with the classic "Hello, World!" program. This simple example 
              demonstrates the basic syntax of Lua and how to output text.
            </p>

            <CodeEditor
              initialCode={helloWorldCode}
              title="Hello World Example"
              height="250px"
            />
          </motion.section>

          {/* Syntax Breakdown */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-lua-accent mr-3" />
              <h2 className="text-3xl font-bold">Syntax Breakdown</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Comments</h3>
                <code className="block bg-gray-950 p-3 rounded text-sm font-mono">
                  -- This is a single line comment
                </code>
                <p className="text-gray-400 mt-2">
                  Comments in Lua start with two dashes (--) and continue to the end of the line.
                </p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Print Function</h3>
                <code className="block bg-gray-950 p-3 rounded text-sm font-mono">
                  print("Hello, World!")
                </code>
                <p className="text-gray-400 mt-2">
                  The print() function outputs text to the console. Strings are enclosed in quotes.
                </p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Variables</h3>
                <code className="block bg-gray-950 p-3 rounded text-sm font-mono">
                  local message = "Lua is awesome!"
                </code>
                <p className="text-gray-400 mt-2">
                  Variables are created using the 'local' keyword (recommended) or without any keyword for global variables.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-between items-center pt-8 border-t border-gray-800"
          >
            <Link to="/" className="btn-secondary">
              ← Back to Home
            </Link>
            <Link to="/lesson-variables" className="btn-primary flex items-center">
              Next: Variables
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Introduction;
