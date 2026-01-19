import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <>
      <div className=" max-h-screen min-w-full ">
        <section className="    flex  pt-40 justify-center lg:pl-[40rem] text-white px-6 text-center md:text-left">
          <div className="max-w-lg md:pr-32 ">
            <motion.span
              initial={{ opacity: 0, y: 30}}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 2}}
              className="font-tinos text-[1.2rem] md:text-[1.5rem]  cursor-default"
            >
              We've got your morning covered with
            </motion.span>

            <motion.h1 
             initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 2}}
            className=" font-cedraville text-[6rem] md:text-[13rem] cursor-default">
              Coffee
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 2}}
            className=" text-center md:text-justify  font-tinos md:text-[16px] md:min-w-lg cursor-default">
              It is best to start your day with a cup of coffee. Discover the
              best flavours coffee you will ever have. We provide the best for
              our customers.
            </motion.p>
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 2 }}
            className="mt-5 md:mt-7 md:ml-45 ">
              <motion.button 
              whileTap={{scale: 0.1}}
              transition={{duration: 0.2}}
              className="bg-yellow-400 rounded-xl  drop-shadow-[0_4px_6px_rgba(255,223,0,0.5)]   w-30 py-3 hover:scale-110 transition-transform duration-300 hover:bg-yellow-500 cursor-pointer">
                Order Now
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
