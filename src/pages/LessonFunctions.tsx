import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Code, Layers, Code2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CodeEditor from '../components/CodeEditor';

const LessonFunctions = () => {
  const basicFunctionCode = `-- Basic function definition
function greet(name)
    print("Hello, " .. name .. "!")
end

-- Call the function
greet("Alice")
greet("Bob")

-- Function with return value
function add(a, b)
    return a + b
end

local result = add(5, 3)
print("5 + 3 =", result)`;

  const advancedFunctionCode = `-- Function with multiple return values
function getNameAndAge()
    return "John", 30
end

local name, age = getNameAndAge()
print("Name:", name, "Age:", age)

-- Function with default parameters (using or operator)
function greetWithDefault(name, greeting)
    greeting = greeting or "Hello"
    print(greeting .. ", " .. name .. "!")
end

greetWithDefault("Alice")           -- Uses default "Hello"
greetWithDefault("Bob", "Hi")       -- Uses custom greeting`;

  const localFunctionCode = `-- Local functions
local function calculateArea(radius)
    return 3.14159 * radius * radius
end

-- Anonymous function (stored in variable)
local square = function(x)
    return x * x
end

print("Area of circle (r=5):", calculateArea(5))
print("Square of 4:", square(4))

-- Function as parameter
local function applyOperation(a, b, operation)
    return operation(a, b)
end

local multiply = function(x, y) return x * y end
local result = applyOperation(6, 7, multiply)
print("6 * 7 =", result)`;

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
            <h1 className="text-5xl font-bold mb-6 gradient-text">Functions</h1>
            <p className="text-xl text-gray-400 mb-12">
              Master the art of writing reusable code with Lua functions.
            </p>
          </motion.div>

          {/* Basic Functions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-lua-accent mr-3" />
              <h2 className="text-3xl font-bold">Basic Functions</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Functions are blocks of reusable code that perform specific tasks. They help 
              organize your code and avoid repetition. In Lua, functions are first-class values.
            </p>

            <CodeEditor
              initialCode={basicFunctionCode}
              title="Basic Functions Example"
              height="340px"
            />

            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 mt-6">
              <h3 className="text-lg font-semibold mb-4">Function Syntax</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-950 px-2 py-1 rounded">function functionName(parameters)</code>
                  <span className="text-gray-400 ml-2">- Function declaration</span>
                </div>
                <div>
                  <code className="bg-gray-950 px-2 py-1 rounded">return value</code>
                  <span className="text-gray-400 ml-2">- Return a value (optional)</span>
                </div>
                <div>
                  <code className="bg-gray-950 px-2 py-1 rounded">end</code>
                  <span className="text-gray-400 ml-2">- End function block</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Advanced Functions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Layers className="h-6 w-6 text-lua-accent mr-3" />
              <h2 className="text-3xl font-bold">Advanced Function Features</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Lua functions support multiple return values and flexible parameter handling, 
              making them very powerful for various programming patterns.
            </p>

            <CodeEditor
              initialCode={advancedFunctionCode}
              title="Advanced Functions Example"
              height="360px"
            />

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Multiple Returns</h3>
                <p className="text-gray-400 text-sm">
                  Lua functions can return multiple values, which are unpacked when assigned to multiple variables.
                </p>
              </div>
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Default Parameters</h3>
                <p className="text-gray-400 text-sm">
                  Use the <code className="bg-gray-800 px-1 rounded">or</code> operator to provide default values for parameters.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Local Functions & Higher-Order */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Code2 className="h-6 w-6 text-lua-accent mr-3" />
              <h2 className="text-3xl font-bold">Local Functions & Higher-Order Functions</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Functions in Lua are first-class values, meaning they can be stored in variables, 
              passed as arguments, and returned from other functions.
            </p>

            <CodeEditor
              initialCode={localFunctionCode}
              title="Local & Higher-Order Functions"
              height="380px"
            />

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-center mb-2">
                <Code className="h-5 w-5 text-green-400 mr-2" />
                <span className="font-semibold text-green-400">Pro Tip</span>
              </div>
              <p className="text-gray-300">
                Local functions have better performance and don't pollute the global namespace. 
                Use them for helper functions within your modules.
              </p>
            </div>
          </motion.section>

          {/* Function Patterns */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Common Function Patterns</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Recursive Functions</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2">
                  {`function factorial(n)
  if n <= 1 then
    return 1
  else
    return n * factorial(n-1)
  end
end`}
                </code>
                <p className="text-gray-400 text-sm">Functions that call themselves</p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Closures</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2">
                  {`function makeCounter()
  local count = 0
  return function()
    count = count + 1
    return count
  end
end`}
                </code>
                <p className="text-gray-400 text-sm">Functions with enclosed variables</p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Variadic Functions</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2">
                  {`function sum(...)
  local total = 0
  for _, v in pairs({...}) do
    total = total + v
  end
  return total
end`}
                </code>
                <p className="text-gray-400 text-sm">Functions with variable arguments</p>
              </div>
            </div>
          </motion.section>

          {/* Key Takeaways */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
            <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Functions make code reusable and organized</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Use <code className="bg-gray-800 px-1 rounded">local function</code> for better performance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Functions can return multiple values</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Functions are first-class values in Lua</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-between items-center pt-8 border-t border-gray-800"
          >
            <Link to="/lesson-variables" className="btn-secondary flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Variables
            </Link>
            <Link to="/lesson-tables" className="btn-primary flex items-center">
              Next: Tables
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LessonFunctions;
