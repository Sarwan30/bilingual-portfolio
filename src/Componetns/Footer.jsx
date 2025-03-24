import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCopy, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Sarwan Kumar", 
    };

    emailjs
      .send("service_hyya8vq", "template_8sl99zo", emailParams, "W9J5TmyECn_f3GwBh")
      .then(() => {
        toast.success(t("message_sent"));
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error(t("message_failed"))).finally(() => setLoading(false));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.info(`${text} ${t("copied")}`);
  };

  return (
    <footer className="bg-primary text-secondary py-12">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Contact Section */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-3xl font-semibold">{t("get_in_touch")}</h2>
            <p className="text-accent mt-2">{t("reach_out_message")}</p>

            {/* Email & Phone */}
            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard("sarwan.30kr@gmail.com")}
                className="flex items-center gap-2 bg-card hover:bg-hover px-5 py-3 rounded-lg transition duration-300 text-lg shadow-md hover:shadow-lg"
              >
                <FaEnvelope size={20} /> sarwan.30kr@gmail.com <FaCopy size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard("+91 9990014119")}
                className="flex items-center gap-2 bg-card hover:bg-hover px-5 py-3 rounded-lg transition duration-300 text-lg shadow-md hover:shadow-lg"
              >
                <FaPhone size={20} />
                <a href="tel:+919811443577" className="text-lg">+91 9811443577</a> 
                <FaCopy size={16} />
              </motion.button>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6 mt-4 justify-center md:justify-start">
              <motion.a 
                href="https://github.com/Sarwan30/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-3xl hover:text-hover transition" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/sarwan-kumar-6516682b3/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-3xl hover:text-hover transition" />
              </motion.a>
              <motion.a 
                href="" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter className="text-3xl hover:text-hover transition" />
              </motion.a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={sendEmail} 
            className="w-full md:w-1/2 bg-card p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6">{t("send_message")}</h2>
            <input
              type="text"
              placeholder={t("your_name")}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full p-4 mb-4 border-2 border-secondary rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
            />
            <input
              type="email"
              placeholder={t("your_email")}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full p-4 mb-4 border-2 border-secondary rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
            />
            <textarea
              placeholder={t("your_message")}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full p-4 mb-4 border-2 border-secondary rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
              rows="5"
            ></textarea>
            <motion.button
              type="submit"
              className="w-full border-2 border-secondary bg-button hover:bg-hover py-3 rounded-lg transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? t("sending") : t("send_message")}
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Copyright Section */}
        <motion.div 
          className="mt-8 text-center text-accent text-sm"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          &copy; {new Date().getFullYear()} Sarwan Kumar. {t("rights_reserved")}
        </motion.div>
      </div>
    </footer>
  );
}
