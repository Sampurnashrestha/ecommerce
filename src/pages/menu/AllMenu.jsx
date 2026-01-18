import React, { useEffect, useState } from "react";
import Menucard from "./Menucard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const AllMenu = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "https://696865a669178471522a6006.mockapi.io/coffee",
            );
            const data = await res.json();
            setData(data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-start p-3"
            >
                <Link
                    to="/"
                    className="text-yellow-400 text-xl font-tinos flex flex-row justify-center items-center hover:text-yellow-500 hover:scale-105 transition-transform duration"
                >
                    <FaArrowLeft />
                    Back
                </Link>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-8xl font-bold font-tinos text-white text-center  cursor-default"
            >
                Menu
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-1">
                {data.map((d) => (
                    <Menucard
                        key={d.id}
                        id={d.id}
                        image={d.image}
                        price={d.price}
                        name={d.name}
                        description={d.description}
                        rate={d.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllMenu;
