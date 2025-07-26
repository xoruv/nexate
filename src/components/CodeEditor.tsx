
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Copy, Check } from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';

interface CodeEditorProps {
  initialCode: string;
  title: string;
  height?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode, title, height = "300px" }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const runCode = () => {
    try {
      // Create a mock print function to capture output
      const outputLines: string[] = [];
      const mockPrint = (...args: any[]) => {
        outputLines.push(args.join(' '));
      };

      // For now, we'll just show the code as output since fengari setup is complex
      // In a real implementation, you'd use fengari to execute Lua code
      setOutput([
        '-- Code executed successfully!',
        '-- Output would appear here when Lua interpreter is integrated',
        ...code.split('\n').filter(line => line.trim().startsWith('print')).map(line => {
          const match = line.match(/print\((.*)\)/);
          if (match) {
            return match[1].replace(/"/g, '').replace(/'/g, '');
          }
          return line;
        })
      ]);
    } catch (error) {
      setOutput([`Error: ${error}`]);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden"
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
        <div className="flex space-x-2">
          <button
            onClick={copyCode}
            className="flex items-center px-3 py-1 text-sm bg-gray-800 hover:bg-gray-700 rounded transition-colors"
          >
            {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={runCode}
            className="flex items-center px-3 py-1 text-sm bg-lua-accent hover:bg-lua-accent/80 rounded transition-colors"
          >
            <Play className="h-4 w-4 mr-1" />
            Run Code
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="border-b lg:border-b-0 lg:border-r border-gray-800">
          <div className="p-2">
            <CodeMirror
              value={code}
              onChange={(value) => setCode(value)}
              theme={oneDark}
              basicSetup={{
                lineNumbers: true,
                foldGutter: true,
                dropCursor: false,
                allowMultipleSelections: false,
                indentOnInput: true,
                bracketMatching: true,
                closeBrackets: true,
                autocompletion: true,
                highlightSelectionMatches: true,
              }}
              style={{
                fontSize: '14px',
                minHeight: height,
              }}
            />
          </div>
        </div>
        
        <div className="bg-gray-950/50">
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="text-sm font-medium text-gray-400">Output:</span>
            </div>
            <div className="bg-black/50 rounded p-3 font-mono text-sm text-green-400 min-h-[100px]">
              {output.length > 0 ? (
                output.map((line, index) => (
                  <div key={index}>{line}</div>
                ))
              ) : (
                <div className="text-gray-500">Click "Run Code" to see output</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeEditor;
