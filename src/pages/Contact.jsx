import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="w-full min-h-[950px] md:min-h-screen bg-black/40 backdrop-blur-sm px-6 md:px-20 pt-[7rem] pb-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="font-cedraville text-5xl md:text-8xl mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-200">
          Let’s talk coffee — we’d love to hear from you ☕
        </p>
      </motion.div>

      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-6 shadow-lg">
          <h2 className="text-3xl font-tinos font-semibold">Get in touch</h2>

          <p className="text-gray-200 leading-relaxed">
            At <span className="font-semibold text-xl">Bean Scene</span>, coffee
            is more than just a drink — it’s a moment of comfort and connection.
            Have a question, feedback, or just want to say hello? We’re always
            happy to connect.
          </p>

          <div className="space-y-2 text-gray-300">
            <p>
              <strong>Address:</strong> Kathmandu, Nepal
            </p>
            <p>
              <strong>Phone:</strong> +977 98XXXXXXXX
            </p>
            <p>
              <strong>Email:</strong> hello@beanscene.com
            </p>
            <p>
              <strong>Hours:</strong> 7:00 AM – 9:00 PM
            </p>
          </div>

          <div className="flex gap-5 pt-4 text-3xl">
            <a className="hover:scale-110 transition">
              <FaInstagram
                style={{
                  background: "linear-gradient(45deg,#feda75,#fa7e1e,#d62976)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              />
            </a>

            <a className="hover:scale-110 transition">
              <FaFacebookF style={{ color: "#1877F2" }} />
            </a>

            <a className="hover:scale-110 transition">
              <FaTwitter style={{ color: "#1DA1F2" }} />
            </a>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 md:p-8 shadow-lg hidden md:block">
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <motion.button
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              type="submit"
              className="w-full py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
