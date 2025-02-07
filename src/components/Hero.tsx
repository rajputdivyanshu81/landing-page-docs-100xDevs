import { ArrowRight, Code2, Laptop, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-8 left-0 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Learn Web Development
              <span className="block text-blue-300">The Right Way</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100/90 max-w-2xl">
              Master Full Stack Development and DevOps through project-based learning. Join thousands of developers learning with 100xDevs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-lg group"
              >
                Start Learning
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors shadow-lg"
              >
                View Curriculum
              </motion.button>
            </div>
            
            {/* Feature highlights */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/90">
              <div className="flex items-center gap-3">
                <Code2 className="w-6 h-6 text-blue-300" />
                <span>Real Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <Laptop className="w-6 h-6 text-blue-300" />
                <span>Live Sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-300" />
                <span>Documentation</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                alt="Coding workspace"
                className="rounded-xl w-full object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-xl"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-400/30 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-600/30 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;