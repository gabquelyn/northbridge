"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Option from "@/app/components/Option";
import StepProgress from "./StepProgress";
import axios from "axios";
import Input from "@/app/components/Input";

export default function MatureLearnersForm() {
  const steps = [
    {
      title: "Personal Details",
      questions: [
        {
          label: "Your age range",
          options: ["17-19", "19-22", "23-26", "27+"],
        },
        {
          label: "Your current status",
          options: [
            "Completed secondary school",
            "Completed secondary school and some post-secondary",
            "Currently enrolled in post-secondary",
            "Taking a break / gap period",
          ],
        },
        {
          label: "Highest level of education completed",
          options: [
            "WAEC / NECO",
            "IGCSE",
            "A-Levels",
            "IB Diploma",
            "Other international qualification",
          ],
        },
      ],
    },
    {
      title: "Academic Intent",
      questions: [
        {
          label: "What best describes your reason for exploring Northbridge?",
          options: [
            "Preparing for university study",
            "Academic upgrading or subject reinforcement",
            "Credit completion",
            "Improving academic readiness or outcomes",
            "Repositioning for a different academic direction",
          ],
        },
        {
          label: "Your intended next step",
          options: [
            "Canadian university",
            "UK / US / other global university",
            "Undecided / exploring",
          ],
        },
        {
          label: "Timeline for your next academic step",
          options: [
            "Within 6 months",
            "Within 12 months",
            "12-24 months",
            "Exploring options",
          ],
        },
      ],
    },
    {
      title: "Program Interest",
      questions: [
        {
          label: "Which offerings are you interested in?",
          options: [
            "Online Ontario curriculum courses",
            "AY12 enrichment (online)",
            "Academic upgrading / credit completion",
            "University readiness & academic skills",
            "Not sure — seeking guidance",
          ],
        },
        {
          label: "Preferred study format",
          options: [
            "Fully online",
            "Online with structured check-ins",
            "Flexible / self-paced with guidance",
          ],
        },
      ],
    },
    {
      title: "Readiness & Expectations",
      questions: [
        {
          label:
            "How familiar are you with Canadian post-secondary academic expectations?",
          options: ["Very familiar", "Some familiarity", "Limited familiarity"],
        },
        {
          label: "How important is structured academic guidance at this stage?",
          options: ["Very important", "Important", "Somewhat important"],
        },
        {
          label: "Availability for structured study each week",
          options: ["5-10 hours", "10-15 hours", "15+ hours"],
        },
      ],
    },
    {
      title: "Connection Preference",
      questions: [
        {
          label: "Preferred next step",
          options: [
            "Receive program information",
            "Schedule a short academic consultation",
            "Not sure — open to guidance",
          ],
        },
        {
          label: "Preferred method of contact",
          options: ["Email", "Phone / WhatsApp"],
        },
      ],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const formTopRef = useRef<HTMLDivElement | null>(null);
  const step = steps[currentStep];
  const [details, setDetails] = useState({ email: "", name: "" });
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    formTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentStep]);

  const handleChange = (question: string, ans: string) => {
    setAnswers((prev) => ({ ...prev, [question]: ans }));
  };

  /** ✅ Check if all questions in step are answered */
  const isStepComplete = step.questions.every((q) => answers[q.label]);

  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (!isLastStep) setCurrentStep((s) => s + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/send-email", {
        name: details.name,
        email: details.email,
        message: [
          ...Object.keys(answers).map((p) => ({
            question: p,
            ans: answers.p,
          })),
        ],
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="py-20 px-5" ref={formTopRef}>
      {/* Title */}
      <p className="title text-center">
        <span className="text-[#479DA5]">Mature & Online</span>
        <br /> Learners Inquiry Form
      </p>
      <p className="max-w-120 text-center mx-auto text-gray-600">
        This form helps us understand your academic background and guide you
        toward the most suitable pathway.
      </p>

      {/* Progress Bar */}
      <StepProgress currentStep={currentStep} steps={steps} />

      {/* Form Content */}
      <div className="max-w-3xl mx-auto mt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6"
          >
            <p className="font-bold text-lg">{step.title}</p>
            {currentStep == 0 && (
              <>
                <Input
                  name="name"
                  value={details.name}
                  onChange={(e) =>
                    setDetails((prev) => ({ ...prev, name: e.target.value }))
                  }
                  type="text"
                  placeholder="Full name"
                />
                <Input
                  name="email"
                  value={details.email}
                  onChange={(e) =>
                    setDetails((prev) => ({ ...prev, email: e.target.value }))
                  }
                  type="email"
                  placeholder="Email address"
                />
              </>
            )}
            {step.questions.map((question) => (
              <div key={question.label}>
                <p className="mb-2 font-medium">{question.label}</p>
                <div className="flex flex-col gap-2">
                  {question.options.map((option) => (
                    <Option
                      key={option}
                      program={option}
                      name={question.label}
                      value={answers[question.label]}
                      onChange={() => handleChange(question.label, option)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          <motion.button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="disabled:opacity-40"
          >
            Prev
          </motion.button>

          {!isLastStep ? (
            <motion.button
              onClick={handleNext}
              disabled={!isStepComplete || !details.email || !details.name}
              className="disabled:opacity-40"
            >
              Next
            </motion.button>
          ) : (
            <motion.button onClick={handleSubmit} disabled={!isStepComplete}>
              Submit
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
