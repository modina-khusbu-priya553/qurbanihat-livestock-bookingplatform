import Image from "next/image";
import React from "react";
import { FaBriefcaseMedical, FaClipboardCheck } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { GiCow } from "react-icons/gi";

const QurbaniTips = () => {
  const items = [
    {
      icon: <GiCow size={40}/>,
      title: "Choose a Healthy Animal",
      content:
        "Choose an active, well-fed animal that looks healthy and free from visible illness or injury.",
      animation: "animate-wiggle",
    },
    {
      icon: <FaScaleBalanced />,
      title: "Check the Weight & Age",
      content:
        "Check the animal's age and weight to make sure it meets your Qurbani requirements.",
      animation: "animate-swing",
    },
    {
      icon: <FaBriefcaseMedical />,
      title: "Check Animal Health",
      content:
        "Pay attention to the animal's eyes, movement, body condition, and overall health.",
      animation: "animate-heartbeat",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Prepare for Qurbani",
      content:
        "Plan ahead, choose your animal early, and complete your booking before the special day.",
      animation: "animate-check-pop",
    },
  ];

  return (
    <div className="bg-[#4361EE] md:mt-20 mt-15 py-10 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Qurbani Tips
          </h2>
          <p className="text-white/80 text-base md:text-lg">
            A few helpful tips to make your Qurbani preparation easier and more
            meaningful.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-sm hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body items-start">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-50 mb-2">
                    <span className={`text-2xl text-emerald-500 ${item.animation}`}>
                    {item.icon}
                  </span>
                </div>
                <h2 className="card-title text-lg">{item.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default QurbaniTips;