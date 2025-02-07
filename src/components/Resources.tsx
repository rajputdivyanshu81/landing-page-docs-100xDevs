import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Frontend Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      description: "Master React, TypeScript, and modern frontend frameworks.",
      topics: ["React", "TypeScript", "CSS", "Redux"]
    },
    {
      title: "Backend Development",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      description: "Build scalable backends with Node.js and databases.",
      topics: ["Node.js", "MongoDB", "SQL", "APIs"]
    },
    {
      title: "DevOps & Deployment",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
      description: "Learn cloud deployment and CI/CD pipelines.",
      topics: ["Docker", "AWS", "CI/CD", "Kubernetes"]
    }
  ];

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learning Tracks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured learning paths to help you master full-stack development and DevOps
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {resource.topics.map((topic, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <button className="text-blue-600 font-semibold inline-flex items-center group">
                  Start Learning 
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;