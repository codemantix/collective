'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  { name: "Web Development", image: "/logo.png" },
  { name: "UI/UX Design", image: "/logo.png" },
  { name: "Data Analysis", image: "/logo.png"},
  // repeat or add more
];

const CredibilitySlider = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Trusted for Excellence in Tech
      </h2>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-50%"] }} // smooth horizontal slide
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[200px]"
            >
              <div className="w-20 h-20 relative">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-2 font-medium text-slate-800">
                {service.name}
              </p>
            </div>
          ))}
          {/* duplicate services for smooth looping */}
          {services.map((service, index) => (
            <div
              key={"dup-" + index}
              className="flex flex-col items-center min-w-[200px]"
            >
              <div className="w-20 h-20 relative">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-2 font-medium text-slate-800">
                {service.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilitySlider;
