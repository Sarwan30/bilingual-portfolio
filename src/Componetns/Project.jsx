// Projects.js
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Vid-Connect: Video Conferencing Web App",
    descriptionEn: "Built a real-time video conferencing app with WebRTC, PeerJS, and Socket.io for seamless calls and messaging.",
    descriptionJp: "WebRTC、PeerJS、Socket.ioを使用したリアルタイムビデオ会議アプリを開発。",
    techStack: ["Node.js", "Express.js", "Socket.io", "PeerJS", "WebRTC", "EJS"],
    github: "https://github.com/Sarwan30/VidConnect",
    liveDemo: ""
  },
  {
    title: "Automated Job Application Email Sender",
    descriptionEn: "Developed a tool to automate job application emails with JSON templates, a React frontend, and Nodemailer.",
    descriptionJp: "JSONテンプレート、Reactフロントエンド、Nodemailerを使用した求人応募メール自動送信ツールを開発。",
    techStack: ["React.js", "Vite", "Node.js", "Express.js", "Nodemailer", "Multer"],
    github: "https://github.com/Sarwan30/Bulk-Email-Sender",
    liveDemo: ""
  },
  {
    title: "NewsNow: Real-Time News Aggregator",
    descriptionEn: "Developed a news aggregator fetching top headlines via NewsAPI.",
    descriptionJp: "NewsAPIを使用してトップニュースを取得するニュースアグリゲーターを開発。",
    techStack: ["React.js", "HTML", "CSS", "JavaScript", "NewsAPI", "React Router", "Bootstrap"],
    github: "https://github.com/Sarwan30/NewsNow",
    liveDemo: ""
  },
  {
    title: "BankEase: Desktop Banking Application",
    descriptionEn: "Created a desktop banking app with Java Swing, MySQL, and JDBC, featuring core banking functionalities.",
    descriptionJp: "Java Swing、MySQL、JDBCを使用したデスクトップ銀行アプリを開発し、主要機能を搭載。",
    techStack: ["Java", "Swing", "JDBC", "MySQL"],
    github: "https://github.com/Sarwan30/bank-ease",
    liveDemo: ""
  }
];

const Projects = ({ lang, bgGradient }) => {
  return (
    <section className={`py-12 px-6 transition-all duration-700 ${bgGradient}`}>
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {lang === "en" ? "My Projects" : "私のプロジェクト"}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500 hover:scale-105 relative overflow-hidden"
          >
            <h3 className="text-xl font-semibold relative z-10">{project.title}</h3>
            <p className="text-sm text-gray-700 mt-2 relative z-10">
              {lang === "en" ? project.descriptionEn : project.descriptionJp}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-blue-300 to-blue-500 text-white px-2 py-1 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4 relative z-10">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black flex items-center gap-1"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-500 opacity-0 hover:opacity-10 transition-all"
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
