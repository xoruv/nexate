
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Variable, AlertCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CodeEditor from '../components/CodeEditor';

const LessonVariables = () => {
  const basicVariablesCode = `-- Creating variables in Lua
local name = "Alice"
local age = 25
local height = 5.6
local isStudent = true

-- Print variables
print("Name:", name)
print("Age:", age)
print("Height:", height, "feet")
print("Is student:", isStudent)`;

  const dataTypesCode = `-- Lua's main data types
local str = "Hello World"      -- string
local num = 42                 -- number
local decimal = 3.14159        -- number (float)
local bool = true              -- boolean
local nothing = nil            -- nil

-- Check types
print(type(str))      -- string
print(type(num))      -- number  
print(type(bool))     -- boolean
print(type(nothing))  -- nil`;

  const scopeCode = `-- Global vs Local variables
globalVar = "I'm global"       -- Global variable
local localVar = "I'm local"   -- Local variable

function testScope()
    local innerVar = "I'm inside function"
    print(globalVar)    -- Can access global
    print(localVar)     -- Can access local from outer scope
    print(innerVar)     -- Can access inner variable
end

testScope()`;

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
            <h1 className="text-5xl font-bold mb-6 gradient-text">Variables & Data Types</h1>
            <p className="text-xl text-gray-400 mb-12">
              Learn how to store and work with data in Lua using variables and different data types.
            </p>
          </motion.div>

          {/* Basic Variables */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Variable className="h-6 w-6 text-lua-accent mr-3" />
              <h2 className="text-3xl font-bold">Creating Variables</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Variables in Lua are used to store data. You can create variables using the 
              <code className="bg-gray-800 px-2 py-1 rounded mx-1">local</code> keyword 
              (recommended) or without any keyword for global variables.
            </p>

            <CodeEditor
              initialCode={basicVariablesCode}
              title="Basic Variables Example"
              height="280px"
            />

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-center mb-2">
                <AlertCircle className="h-5 w-5 text-blue-400 mr-2" />
                <span className="font-semibold text-blue-400">Best Practice</span>
              </div>
              <p className="text-gray-300">
                Always use <code className="bg-gray-800 px-1 rounded">local</code> when declaring variables 
                to avoid polluting the global namespace and improve performance.
              </p>
            </div>
          </motion.section>

          {/* Data Types */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Lua Data Types</h2>
            
            <p className="text-gray-400 mb-6">
              Lua has eight basic data types, but you'll work with these main ones most often:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">string</h3>
                <p className="text-gray-400 text-sm mb-2">Text data enclosed in quotes</p>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono">
                  "Hello" or 'Hello'
                </code>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">number</h3>
                <p className="text-gray-400 text-sm mb-2">Integers and floating-point numbers</p>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono">
                  42, 3.14, -17
                </code>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">boolean</h3>
                <p className="text-gray-400 text-sm mb-2">True or false values</p>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono">
                  true, false
                </code>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">nil</h3>
                <p className="text-gray-400 text-sm mb-2">Represents absence of value</p>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono">
                  nil
                </code>
              </div>
            </div>

            <CodeEditor
              initialCode={dataTypesCode}
              title="Data Types Example"
              height="320px"
            />
          </motion.section>

          {/* Variable Scope */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Variable Scope</h2>
            
            <p className="text-gray-400 mb-6">
              Understanding variable scope is crucial for writing maintainable code. 
              Local variables are only accessible within their scope, while global variables 
              can be accessed from anywhere.
            </p>

            <CodeEditor
              initialCode={scopeCode}
              title="Variable Scope Example"
              height="300px"
            />

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-center mb-2">
                <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="font-semibold text-yellow-400">Important</span>
              </div>
              <p className="text-gray-300">
                Global variables persist throughout your program and can be accessed from anywhere. 
                Use them sparingly to avoid naming conflicts and maintain clean code.
              </p>
            </div>
          </motion.section>

          {/* Key Takeaways */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
            <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Always use <code className="bg-gray-800 px-1 rounded">local</code> for variable declarations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Lua is dynamically typed - variables can change type</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Use <code className="bg-gray-800 px-1 rounded">type()</code> function to check variable types</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Local variables have better performance than global ones</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-between items-center pt-8 border-t border-gray-800"
          >
            <Link to="/intro" className="btn-secondary flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Introduction
            </Link>
            <Link to="/lesson-functions" className="btn-primary flex items-center">
              Next: Functions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LessonVariables;
