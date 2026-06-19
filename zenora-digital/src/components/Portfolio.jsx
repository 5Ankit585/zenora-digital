import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Zenora Digital",
    category: "Agency Website",
    desc: "Modern digital agency website built with React, Vite and Tailwind CSS.",
    tags: ["React", "Vite", "Tailwind"],
  },
  {
    title: "Movie Search App",
    category: "React Project",
    desc: "Search movies using API integration with responsive UI.",
    tags: ["React", "API", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    category: "Personal Brand",
    desc: "Responsive portfolio website showcasing projects and skills.",
    tags: ["HTML", "CSS", "React"],
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-violet-500/40 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-violet-400">
          {project.category}
        </span>

        <ArrowUpRight
          size={18}
          className="text-gray-500 group-hover:text-violet-400 transition"
        />
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-5">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs bg-violet-500/10 border border-violet-500/20 text-violet-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-violet-400 uppercase tracking-[4px] text-sm">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Recent Work
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A few projects showcasing our design, development
            and automation capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}