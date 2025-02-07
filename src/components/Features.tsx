import { Code2, Rocket, Users, Video, Terminal, BookOpen, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <Code2 className="w-12 h-12 text-blue-500" />,
      title: "Full Stack Development",
      description: "Learn both frontend and backend development with modern frameworks and tools."
    },
    {
      icon: <Terminal className="w-12 h-12 text-blue-500" />,
      title: "DevOps Practices",
      description: "Master deployment, CI/CD pipelines, and cloud infrastructure."
    },
    {
      icon: <Video className="w-12 h-12 text-blue-500" />,
      title: "Live Sessions",
      description: "Join interactive live coding sessions and real-time problem solving."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      title: "Comprehensive Docs",
      description: "Access detailed documentation and learning resources."
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: "Real Projects",
      description: "Build production-ready applications with modern tech stacks."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Best Practices",
      description: "Learn industry standards and professional development practices."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Community",
      description: "Join a community of developers to share knowledge and experiences."
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-500" />,
      title: "Career Growth",
      description: "Get the skills needed to advance your career in tech."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive learning experience designed to take you from beginner to professional developer
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="mb-6 bg-blue-50 w-20 h-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;