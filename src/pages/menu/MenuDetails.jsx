import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const MenuDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const res = await fetch(
        `https://696865a669178471522a6006.mockapi.io/coffee/${id}`
      );
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col px-4">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-start pt-3"
      >
        <Link
          to="/"
          className="text-yellow-400 text-2xl md:text-xl font-tinos flex items-center gap-2 hover:text-yellow-500 hover:scale-105 transition"
        >
          <FaArrowLeft />
          Back
        </Link>
      </motion.div>

      {/* Center container */}
      <div className="flex justify-center items-center mt-6 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            flex flex-col items-center gap-8
            p-6
            bg-black/20 backdrop-blur-lg
            rounded-2xl shadow-2xl

            md:flex-row
            md:px-40
          "
        >
          {/* Image */}
          <div className="hover:scale-105 transition duration-300">
            <img
              src={data?.image}
              alt={data?.name}
              className="w-72 h-72 md:w-96 md:h-96 object-contain rounded-xl"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col max-w-lg text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-500 uppercase">
              {data?.name}
            </h1>

            <p className="text-white text-justify mb-4 text-sm">
              {data?.description}
            </p>

            <p className="text-green-600 font-semibold text-lg mb-4">
              <span className="text-white">Price: </span>${data?.price}
            </p>

            <div className="flex justify-center md:justify-start items-center gap-2">
              <span className="text-yellow-500 font-semibold">
                Rating: {data?.rating}
                <span className="text-white"> /5</span>
              </span>
            </div>

            <motion.div
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="
                bg-yellow-400 text-center text-white font-bold
                rounded-xl px-6 py-2 mt-4
                hover:bg-yellow-500 hover:scale-105 transition
              "
            >
              <button>Order Now</button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuDetails;
