import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaUserTie, FaCertificate, FaSchool, FaBriefcase, FaPhp, FaLaravel, FaLinux, FaExternalLinkAlt } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = ({ lang, bgGradient }) => {
  // Skill levels (out of 100)
  const skills = [
    { name: "React.js, HTML, CSS, Tailwind CSS, JavaScript", level: 90, icon: <FaCode /> },
    { name: "PHP, Laravel, Firebase, RESTful APIs", level: 85, icon: <FaPhp /> },
    { name: "SQL, Firebase", level: 80, icon: <FaDatabase /> },
    { name: "Linux (Ubuntu), AWS, Docker, Kubernetes", level: 80, icon: <FaLinux /> },
    { name: "Git, GitHub, Agile, Scrum, Kanban", level: 85, icon: <FaTools /> },
    { name: "Problem-Solving, Communication, Adaptability, Time Management, Teamwork", level: 90, icon: <FaUserTie /> },
  ];

  // Certifications with links
  const certifications = [
    { name: "AWS Cloud Practitioner Essentials - AWS", url: "https://www.aws.training/Details/Curriculum?id=20685" },
    { name: "JP Morgan - Software Engineering Job Simulation", url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_Pr4g3A2XdKQw3zH3c_1719208258543_completion_certificate.pdf" },
    { name: "Agile - Scrum Master", url: "https://www.google.com" },
    { name: "Data Processing & Visualisation", url: "https://drive.google.com/file/d/1sJc_a18EsgdQBBoj8LwTx5jHHtlKlAEa/view" },
    { name: "Project Management - Fundatmentals", url: "https://www.google.com" },
    { name: "Micro Certification-Welcome to ServiceNow", url: "https://drive.google.com/file/d/1i_gdQ_C3wgJOc_1kS4e6PF4ZIGKhOnL1/view" }
  ];

  const textColor = lang === "en" ? "text-white" : "text-[#2D2D2D]";
  const accentColor = lang === "en" ? "bg-[#E9C46A]" : "bg-[#E63946]";

  return (
    <section className={`py-12 px-6 transition-all duration-700 ${bgGradient} ${textColor}`}>
      <h2 className="text-3xl font-bold text-center mb-8">
        {lang === "en" ? "About Me" : "私について"}
      </h2>

      {/* Timeline Section (Education & Experience) */}
      <VerticalTimeline>
        {/* Education */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#FFF", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid #E63946" }}
          date="2021 - 2025"
          iconStyle={{ background: "#E63946", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="text-lg font-bold">
            {lang === "en" ? "St. Andrews Institute of Technology & Management, Gurugram" : "セント・アンドリューズ工科経営大学"}
          </h3>
          <p>
            {lang === "en" ? "Bachelor of Technology in Computer Science & Engineering" : "コンピュータサイエンス工学の学士"}
          </p>
        </VerticalTimelineElement>

        {/* Work Experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FFF", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid #E63946" }}
          date="Aug 2024 - Present"
          iconStyle={{ background: "#E63946", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="text-lg font-bold">
            {lang === "en" ? "Fullstack Developer - Payworld Digital Services Pvt Ltd." : "「フルスタック開発者 - Payworld Digital Services Pvt Ltd."}
          </h3>
          <ul className="list-disc pl-5 text-sm">
            <li>{lang === "en" ? "Integrated refund API with PHP to trigger on transaction failures, ensuring accurate credit reset." : "トランザクションが失敗したとき、PHPで返金APIを使って、自動的にクレジットをリセットしました。"}</li>
            <li>{lang === "en" ? "Developed a geolocation-based validation program to restrict transactions to retailers' registered shop locations." : "小売店の登録された店舗の場所でのみ、トランザクションができるように、位置情報を使った確認プログラムを作りました。"}</li>
            <li>{lang === "en" ? "Contributed to Domestic Money Transfer system, optimizing backend logic for reliability and scalability." : "国内送金システムのバックエンドを改善して、もっと信頼できて、たくさん使えるようにしました。"}</li>
            <li>{lang === "en" ? "Engineered UPI backend for Payworld's Prepaid Payment Instrument (PPI), enhancing wallet-based digital transactions." : "Payworldのプリペイド支払いシステムのために、UPIのバックエンドを作って、ウォレットでのデジタル支払いを便利にしました。"}</li>
          </ul>
        </VerticalTimelineElement>

        {/* Enthusiasm for Working in Japan */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FFF", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid #E63946" }}
          iconStyle={{ background: "#E63946", color: "#fff" }}
          icon={<FaUserTie />}
        >
          <h3 className="text-lg font-bold">
            {lang === "en" ? "Enthusiasm for Working " : "日本で働くことへの熱意"}
          </h3>
          <p>
            {lang === "en"
              ? "I am excited about the opportunity to contribute to innovative projects and collaborate with a diverse, global team. With a strong background in backend and frontend development, API integration, and microservice architecture, I am passionate about leveraging my skills in React.js, Node.js, and Kubernetes to create impactful solutions. I am eager to learn, grow, and contribute to cutting-edge technology initiatives while embracing diverse work cultures and making a meaningful impact through my work.."
              : "私は日本で働く機会に非常に興奮しています。日本の文化、技術、そして革新は、私に日本語環境でのプロジェクトに貢献するインスピレーションを与えてくれます。私は学び、成長し、日本の言語と仕事の文化を受け入れながら、有意義な影響を与えることを楽しみにしています。"}
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* Skills Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center mb-6">
          {lang === "en" ? "My Skills" : "私のスキル"}
        </h3>
        <div className="flex flex-col gap-4 max-w-lg mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-2xl">{skill.icon}</span>
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="font-medium">{skill.name}</p>
                  <p className="font-medium">{skill.level}%</p>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5 }}
                  className={`h-3 rounded-md ${accentColor}`}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center mb-6">
          {lang === "en" ? "Certifications" : "認定証"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
          {certifications.map((cert, index) => (
            <a key={index} href={cert.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md text-black hover:bg-gray-200 transition duration-300">
              <FaCertificate className="text-xl text-[#E63946]" />
              <p className="flex-1">{cert.name}</p>
              <FaExternalLinkAlt className="text-gray-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
