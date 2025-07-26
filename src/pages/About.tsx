
import { motion } from 'framer-motion';
import { Heart, Code, Users, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Interactive Learning",
      description: "Built-in code editor with real-time execution and instant feedback to help you learn by doing."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "No Barriers",
      description: "No sign-ups, no payments, no ads. Just pure learning focused on getting you coding quickly."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Driven",
      description: "Created by developers who love Lua and want to share that passion with the world."
    }
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
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text">About Nexate</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your gateway to mastering Lua programming
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-lua-blue/20 to-lua-accent/20 rounded-3xl p-12 border border-gray-800 text-center">
              <div className="flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Nexate was built to help people learn Lua for game development, scripting, 
                and more — without any sign-ups, clutter, or barriers. We believe learning 
                programming should be accessible, enjoyable, and free for everyone.
              </p>
            </div>
          </motion.section>

          {/* Why We Built This */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Why We Built This</h2>
            <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Lua is an incredibly powerful and elegant programming language, but finding 
                high-quality, beginner-friendly resources can be challenging. Most existing 
                tutorials are either too technical, incomplete, or hidden behind paywalls.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We wanted to create something different — a comprehensive learning platform 
                that's as elegant and simple as Lua itself. No distractions, no unnecessary 
                complexity, just pure focus on learning.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our interactive approach lets you experiment with code right in your browser, 
                seeing immediate results and building confidence as you progress through each lesson.
              </p>
            </div>
          </motion.section>

          {/* What Makes Us Different */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">What Makes Us Different</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="lesson-card text-center"
                >
                  <div className="text-lua-accent mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Lua's Impact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Why Lua Matters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-lua-accent">In Gaming</h3>
                <p className="text-gray-400 leading-relaxed">
                  Lua powers scripting in major games like World of Warcraft, Garry's Mod, 
                  and Roblox. It's the go-to language for game logic and modding.
                </p>
              </div>
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-lua-accent">In Web Development</h3>
                <p className="text-gray-400 leading-relaxed">
                  OpenResty and other web platforms use Lua for high-performance server-side 
                  scripting, handling millions of requests per second.
                </p>
              </div>
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-lua-accent">In IoT & Embedded</h3>
                <p className="text-gray-400 leading-relaxed">
                  Its small footprint makes Lua perfect for embedded systems, IoT devices, 
                  and anywhere resource efficiency is crucial.
                </p>
              </div>
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-lua-accent">In Automation</h3>
                <p className="text-gray-400 leading-relaxed">
                  Network engineers use Lua for router configuration, automation scripts, 
                  and network management tools.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Open Source & Free */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-green-400">Always Free & Open</h2>
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                  This platform will always be completely free to use. No premium tiers, 
                  no locked content, no advertising. We believe quality education should 
                  be accessible to everyone, everywhere.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Get in Touch */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Have suggestions? Found a bug? Want to contribute? We'd love to hear from you! 
              The best learning platforms are built together with their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/nexate-lua/nexate/issues" target="_blank" rel="noopener noreferrer" className="btn-primary">Report Issues</a>
              <a href="https://discord.gg/shadx" target="_blank" rel="noopener noreferrer" className="btn-secondary">Suggest Features</a>
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
