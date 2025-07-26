
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, GitBranch, Repeat, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CodeEditor from '../components/CodeEditor';

const LessonControlFlow = () => {
  const conditionalCode = `-- If statements
local age = 18

if age >= 18 then
    print("You are an adult")
elseif age >= 13 then
    print("You are a teenager")
else
    print("You are a child")
end

-- Logical operators
local hasLicense = true
local hasInsurance = false

if hasLicense and hasInsurance then
    print("You can drive legally")
elseif hasLicense and not hasInsurance then
    print("Get insurance first!")
else
    print("Get your license first!")
end`;

  const loopsCode = `-- For loops (numeric)
print("Counting up:")
for i = 1, 5 do
    print("Number:", i)
end

print("Counting down:")
for i = 10, 1, -2 do  -- start, end, step
    print("Countdown:", i)
end

-- For loops (iterator)
local fruits = {"apple", "banana", "orange"}
print("Fruits:")
for index, fruit in ipairs(fruits) do
    print(index .. ":", fruit)
end

-- While loops
local countdown = 3
print("While loop countdown:")
while countdown > 0 do
    print(countdown)
    countdown = countdown - 1
end
print("Blast off!")`;

  const advancedControlCode = `-- Repeat-until loop (like do-while)
local number
repeat
    print("Enter a number between 1-10:")
    number = 5  -- Simulated input
    if number < 1 or number > 10 then
        print("Invalid! Try again.")
    end
until number >= 1 and number <= 10
print("Good choice:", number)

-- Break and nested loops
local matrix = {{1,2,3}, {4,5,6}, {7,8,9}}
local found = false
local target = 5

print("Searching for", target, "in matrix...")
for i, row in ipairs(matrix) do
    for j, value in ipairs(row) do
        if value == target then
            print("Found", target, "at position [" .. i .. "][" .. j .. "]")
            found = true
            break  -- Only breaks inner loop
        end
    end
    if found then break end  -- Break outer loop
end`;

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
            <h1 className="text-5xl font-bold mb-6 gradient-text">Control Flow</h1>
            <p className="text-xl text-gray-400 mb-12">
              Master decision making and repetition in your Lua programs.
            </p>
          </motion.div>

          {/* Conditional Statements */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <GitBranch className="h-6 w-6 text-lua-accent mr-3" />
              <h2 className="text-3xl font-bold">Conditional Statements</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Conditional statements allow your program to make decisions and execute 
              different code paths based on conditions. They're essential for creating 
              dynamic, responsive programs.
            </p>

            <CodeEditor
              initialCode={conditionalCode}
              title="Conditional Statements Example"
              height="420px"
            />

            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 mt-6">
              <h3 className="text-lg font-semibold mb-4">Logical Operators</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <code className="bg-gray-950 px-2 py-1 rounded text-lua-accent">and</code>
                  <p className="text-gray-400 mt-1">Both conditions must be true</p>
                </div>
                <div>
                  <code className="bg-gray-950 px-2 py-1 rounded text-lua-accent">or</code>
                  <p className="text-gray-400 mt-1">At least one condition must be true</p>
                </div>
                <div>
                  <code className="bg-gray-950 px-2 py-1 rounded text-lua-accent">not</code>
                  <p className="text-gray-400 mt-1">Inverts the boolean value</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Loops */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Repeat className="h-6 w-6 text-lua-accent mr-3" />
              <h2 className="text-3xl font-bold">Loops</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Loops allow you to repeat code multiple times. Lua provides several types 
              of loops for different scenarios: numeric for loops, iterator for loops, 
              and while loops.
            </p>

            <CodeEditor
              initialCode={loopsCode}
              title="Loops Example"
              height="450px"
            />

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Numeric For</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2">
                  for i = 1, 10, 2 do<br/>
                  &nbsp;&nbsp;-- code<br/>
                  end
                </code>
                <p className="text-gray-400 text-sm">Loop with start, end, step</p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Iterator For</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2">
                  for k, v in pairs(table) do<br/>
                  &nbsp;&nbsp;-- code<br/>
                  end
                </code>
                <p className="text-gray-400 text-sm">Loop over table elements</p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">While Loop</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2">
                  while condition do<br/>
                  &nbsp;&nbsp;-- code<br/>
                  end
                </code>
                <p className="text-gray-400 text-sm">Loop while condition is true</p>
              </div>
            </div>
          </motion.section>

          {/* Advanced Control Flow */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Zap className="h-6 w-6 text-lua-accent mr-3" />
              <h2 className="text-3xl font-bold">Advanced Control Flow</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Learn about repeat-until loops, breaking out of loops, and handling 
              nested loop structures for more complex control flow scenarios.
            </p>

            <CodeEditor
              initialCode={advancedControlCode}
              title="Advanced Control Flow Example"
              height="480px"
            />

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-center mb-2">
                <Zap className="h-5 w-5 text-blue-400 mr-2" />
                <span className="font-semibold text-blue-400">Pro Tip</span>
              </div>
              <p className="text-gray-300">
                Use <code className="bg-gray-800 px-1 rounded">break</code> to exit loops early. 
                For nested loops, you may need additional logic to break out of outer loops.
              </p>
            </div>
          </motion.section>

          {/* Control Flow Patterns */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Common Control Flow Patterns</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Input Validation</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2">
                  {`repeat
  print("Enter number (1-100):")
  num = tonumber(input)
until num and num >= 1 and num <= 100`}
                </code>
                <p className="text-gray-400 text-sm">Validate user input with repeat-until</p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Menu Systems</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2">
                  {`local choice = getChoice()
if choice == 1 then
  newGame()
elseif choice == 2 then
  loadGame()
else
  quit()
end`}
                </code>
                <p className="text-gray-400 text-sm">Handle multiple options</p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Search Algorithms</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2">
                  {`for i, item in ipairs(list) do
  if item == target then
    return i  -- Found at index i
  end
end
return nil  -- Not found`}
                </code>
                <p className="text-gray-400 text-sm">Linear search with early exit</p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">State Machines</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2">
                  {`while gameRunning do
  if state == "menu" then
    handleMenu()
  elseif state == "playing" then
    updateGame()
  end
end`}
                </code>
                <p className="text-gray-400 text-sm">Game state management</p>
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
                  <span className="text-gray-300">Use <code className="bg-gray-800 px-1 rounded">if-elseif-else</code> for complex decision making</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Numeric for loops are perfect for counting operations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Use <code className="bg-gray-800 px-1 rounded">ipairs</code> for arrays, <code className="bg-gray-800 px-1 rounded">pairs</code> for hash tables</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300"><code className="bg-gray-800 px-1 rounded">repeat-until</code> ensures loop runs at least once</span>
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
            <Link to="/lesson-tables" className="btn-secondary flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Tables
            </Link>
            <Link to="/resources" className="btn-primary flex items-center">
              Next: Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LessonControlFlow;
