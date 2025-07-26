import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Table, Database, Grid } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CodeEditor from '../components/CodeEditor';

const LessonTables = () => {
  const basicTablesCode = `-- Creating tables (arrays and dictionaries)
local fruits = {"apple", "banana", "orange"}
local person = {
    name = "Alice",
    age = 30,
    city = "New York"
}

-- Accessing table elements
print("First fruit:", fruits[1])  -- Lua arrays start at index 1
print("Person's name:", person.name)
print("Person's age:", person["age"])  -- Alternative syntax

-- Adding elements
fruits[4] = "grape"
person.job = "Engineer"

print("Added fruit:", fruits[4])
print("Person's job:", person.job)`;

  const advancedTablesCode = `-- Mixed tables (array + dictionary)
local student = {
    "Math", "Science", "English",  -- array part (indexes 1,2,3)
    name = "Bob",                  -- dictionary part
    grade = 10,
    age = 16
}

print("Subject 1:", student[1])
print("Student name:", student.name)

-- Nested tables
local school = {
    name = "Central High",
    students = {
        {name = "Alice", grade = 95},
        {name = "Bob", grade = 87},
        {name = "Charlie", grade = 92}
    }
}

print("School:", school.name)
print("First student:", school.students[1].name, "Grade:", school.students[1].grade)`;

  const tableMethodsCode = `-- Table methods and iteration
local numbers = {10, 20, 30, 40, 50}

-- Table length
print("Array length:", #numbers)

-- Adding to end of array
table.insert(numbers, 60)
print("After insert:", numbers[6])

-- Removing from array
table.remove(numbers, 1)  -- Remove first element
print("After remove, first element:", numbers[1])

-- Iterating over arrays
print("All numbers:")
for i, num in ipairs(numbers) do
    print("Index " .. i .. ":", num)
end

-- Iterating over key-value pairs
local person = {name = "Alice", age = 30, city = "NYC"}
print("Person details:")
for key, value in pairs(person) do
    print(key .. ":", value)
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
            <h1 className="text-5xl font-bold mb-6 gradient-text">Tables & Arrays</h1>
            <p className="text-xl text-gray-400 mb-12">
              Learn Lua's versatile table data structure - the foundation of data organization.
            </p>
          </motion.div>

          {/* Basic Tables */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Table className="h-6 w-6 text-lua-accent mr-3" />
              <h2 className="text-3xl font-bold">Basic Tables</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Tables are Lua's only data structuring mechanism. They can be used as arrays, 
              dictionaries, records, and more. They're incredibly flexible and powerful.
            </p>

            <CodeEditor
              initialCode={basicTablesCode}
              title="Basic Tables Example"
              height="380px"
            />

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-center mb-2">
                <Database className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="font-semibold text-yellow-400">Important</span>
              </div>
              <p className="text-gray-300">
                Lua arrays start at index 1, not 0! This is different from many other programming languages.
              </p>
            </div>
          </motion.section>

          {/* Advanced Tables */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Grid className="h-6 w-6 text-lua-accent mr-3" />
              <h2 className="text-3xl font-bold">Advanced Table Features</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Tables can mix array and dictionary elements, and can be nested to create 
              complex data structures like objects and multi-dimensional arrays.
            </p>

            <CodeEditor
              initialCode={advancedTablesCode}
              title="Advanced Tables Example"
              height="400px"
            />

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Mixed Tables</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Tables can have both array elements (numeric indices) and hash elements (string keys) at the same time.
                </p>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono">
                  {'local mixed = {"item1", key = "value"}'}
                </code>
              </div>
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Nested Tables</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Tables can contain other tables, allowing you to create complex hierarchical data structures.
                </p>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono">
                  local nested = {'{name = "Alice"}'}
                </code>
              </div>
            </div>
          </motion.section>

          {/* Table Methods */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Table Methods & Iteration</h2>
            
            <p className="text-gray-400 mb-6">
              Lua provides built-in functions for working with tables, and several ways to 
              iterate over table contents.
            </p>

            <CodeEditor
              initialCode={tableMethodsCode}
              title="Table Methods & Iteration"
              height="450px"
            />

            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 mt-6">
              <h3 className="text-lg font-semibold mb-4">Common Table Operations</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <code className="bg-gray-950 px-2 py-1 rounded">#table</code>
                  <span className="text-gray-400">Get array length</span>
                </div>
                <div className="flex justify-between">
                  <code className="bg-gray-950 px-2 py-1 rounded">table.insert(t, value)</code>
                  <span className="text-gray-400">Add to end of array</span>
                </div>
                <div className="flex justify-between">
                  <code className="bg-gray-950 px-2 py-1 rounded">table.remove(t, index)</code>
                  <span className="text-gray-400">Remove by index</span>
                </div>
                <div className="flex justify-between">
                  <code className="bg-gray-950 px-2 py-1 rounded">pairs(table)</code>
                  <span className="text-gray-400">Iterate all key-value pairs</span>
                </div>
                <div className="flex justify-between">
                  <code className="bg-gray-950 px-2 py-1 rounded">ipairs(table)</code>
                  <span className="text-gray-400">Iterate array indices</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Table Patterns */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Common Table Patterns</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Array of Objects</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2 whitespace-pre">
{`local users = {
  {name = "Alice", age = 25},
  {name = "Bob", age = 30}
}`}
                </code>
                <p className="text-gray-400 text-sm">Store multiple records</p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Lookup Tables</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2 whitespace-pre">
{`local colors = {
  red = "#FF0000",
  green = "#00FF00",
  blue = "#0000FF"
}`}
                </code>
                <p className="text-gray-400 text-sm">Fast key-based access</p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">Stack/Queue</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2 whitespace-pre">
{`-- Stack operations
table.insert(stack, item)  -- push
local item = table.remove(stack)  -- pop`}
                </code>
                <p className="text-gray-400 text-sm">LIFO/FIFO data structures</p>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-lua-accent">2D Arrays</h3>
                <code className="block bg-gray-950 p-2 rounded text-xs font-mono mb-2 whitespace-pre">
{`local matrix = {
  {1, 2, 3},
  {4, 5, 6},
  {7, 8, 9}
}`}
                </code>
                <p className="text-gray-400 text-sm">Multi-dimensional data</p>
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
                  <span className="text-gray-300">Tables are Lua's universal data structure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Arrays start at index 1, not 0</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Use <code className="bg-gray-800 px-1 rounded">ipairs</code> for arrays, <code className="bg-gray-800 px-1 rounded">pairs</code> for dictionaries</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lua-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Tables can mix array and hash elements</span>
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
            <Link to="/lesson-functions" className="btn-secondary flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Functions
            </Link>
            <Link to="/lesson-control-flow" className="btn-primary flex items-center">
              Next: Control Flow
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LessonTables;
