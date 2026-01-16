import { motion } from "motion/react";
import { HiCheck } from "react-icons/hi";

export default function StepProgress({ currentStep, steps }: {currentStep: number, steps: any[]}) {
  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <div className="relative flex items-center justify-between">

        {/* Background line */}
        <div className="absolute left-0 right-0 top-[30%] h-0.5 bg-gray-200" />

        {/* Active progress line */}
        <motion.div
          className="absolute left-0 top-[30%] h-0.5 bg-[#479DA5]"
          initial={{ width: 0 }}
          animate={{
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Steps */}
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={index} className="relative z-10 flex flex-col items-center">
              
              {/* Step circle */}
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1.15 : 1,
                  backgroundColor: isCompleted || isActive ? "#479DA5" : "#fff",
                  borderColor: isCompleted || isActive ? "#479DA5" : "#d1d5db",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold shadow-sm"
              >
                {isCompleted ? (
                  <HiCheck className="text-white text-lg" />
                ) : (
                  <span className={isActive ? "text-white" : "text-gray-500"}>
                    {index + 1}
                  </span>
                )}
              </motion.div>

              {/* Optional label */}
              <p
                className={`mt-3 text-xs font-medium text-center transition-colors ${
                  isActive
                    ? "text-[#479DA5]"
                    : "text-gray-400"
                }`}
              >
                Step {index + 1}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
