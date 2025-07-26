import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, BookOpen, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  console.log('Home component rendering');
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Interactive Learning",
      description: "Learn by doing with our built-in code editor and instant feedback system."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast & Lightweight",
      description: "No sign-ups, no bloat. Just pure learning focused on getting you coding quickly."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Comprehensive Curriculum",
      description: "From basic syntax to advanced concepts, we cover everything you need to know."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Driven",
      description: "Built by developers, for developers, with real-world examples and best practices."
    }
  ];

  const lessons = [
    { title: "Introduction to Lua", path: "/intro", difficulty: "Beginner", time: "10 min" },
    { title: "Variables & Data Types", path: "/lesson-variables", difficulty: "Beginner", time: "15 min" },
    { title: "Functions", path: "/lesson-functions", difficulty: "Intermediate", time: "20 min" },
    { title: "Tables & Arrays", path: "/lesson-tables", difficulty: "Intermediate", time: "25 min" },
    { title: "Control Flow", path: "/lesson-control-flow", difficulty: "Advanced", time: "30 min" }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Learn <span className="gradient-text">Lua</span> — The Easy Way
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Free, simple, and powerful Lua tutorials for everyone. Master the language that powers games, applications, and embedded systems with Nexate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/intro" className="btn-primary inline-flex items-center">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/resources" className="btn-secondary inline-flex items-center">
                View Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Nexate?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We've designed the perfect learning environment for mastering Lua programming.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="lesson-card text-center"
              >
                <div className="text-lua-accent mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Lessons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Popular Lessons</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Start with these essential lessons to build a strong foundation in Lua programming.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson, index) => (
              <motion.div
                key={lesson.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={lesson.path} className="lesson-card block group">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold group-hover:text-lua-accent transition-colors">
                      {lesson.title}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-lua-accent group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className={`px-2 py-1 rounded text-xs ${
                      lesson.difficulty === 'Beginner' 
                        ? 'bg-green-500/20 text-green-400' 
                        : lesson.difficulty === 'Intermediate'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {lesson.difficulty}
                    </span>
                    <span>{lesson.time}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-lua-blue/20 to-lua-accent/20 rounded-3xl p-12 border border-gray-800"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Master Lua?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of developers who have learned Lua with Nexate's comprehensive tutorials.
          </p>
          <Link to="/intro" className="btn-primary inline-flex items-center text-lg px-8 py-4">
            Begin Your Journey
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
