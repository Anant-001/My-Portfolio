import React, { useState } from "react";
import { certificates } from "../constants/index.js";
import { motion } from "framer-motion";
import TitleHeader from "../components/TitleHeader.jsx";

const Certificates = () => {
    const [selected, setSelected] = useState(null);
return (
    <section
        id="achievements"
        className="py-24 px-6 md:px-16 bg-black text-white relative overflow-hidden"
    >
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.08),transparent_70%)] pointer-events-none"></div>

        {/* Heading */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <TitleHeader
                title="A showcase of my continuous learning journey"
                sub="🎓 Certificates & Achievements"
            />
            {/* <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                🎓 Certificates & Achievements
            </h2>
            <p className="text-gray-400 mt-4">
                A showcase of my continuous learning journey
            </p>*/}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificates.map((cert, i) => (
                <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl cursor-pointer"
                    onClick={() => setSelected(cert)}
                >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        <h3 className="text-lg font-semibold group-hover:text-white-50 transition">
                            {cert.title}
                        </h3>

                        <p className="text-sm text-gray-400 mt-1">
                            {cert.platform}
                        </p>
                    </div>

                    {/* Glow Border */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 border border-white"></div>
                </motion.div>
            ))}
        </div>

        {/* MODAL */}
        {selected && (
            <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-neutral-900 rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl"
                >
                    {/* Image */}
                    <img
                        src={selected.image}
                        alt={selected.title}
                        className="w-full h-[400px] object-cover"
                    />

                    {/* Content */}
                    <div className="p-6">
                        <h3 className="text-2xl font-bold">
                            {selected.title}
                        </h3>
                        <p className="text-gray-400 mt-2">
                            {selected.platform}
                        </p>

                        <div className="flex gap-4 mt-6">
                            {selected.link !== "#" && (
                                <a
                                    href={selected.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2 bg-white-50 text-black rounded-md font-medium hover:bg-white-50 transition"
                                >
                                    View Certificate
                                </a>
                            )}

                            <button
                                onClick={() => setSelected(null)}
                                className="px-5 py-2 bg-white/10 rounded-md hover:bg-white/20 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
    </section>
);
};

export default Certificates;
