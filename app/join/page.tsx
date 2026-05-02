"use client";

import React from "react";
import { motion } from "motion/react";
import NorthbridgeAcademicNav from "../components/StickyNav";
import Footer from "../components/Footer";
import ApplicationForm from "./ApplicationForm";

export default function JoinTeamPage() {
  return (
    <main className="bg-white">
      <NorthbridgeAcademicNav />
      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-25 py-20 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-semibold text-gray-900"
        >
          Join the Team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-6 text-gray-600 leading-relaxed"
        >
          Thank you for your interest in working with Northbridge Collegiate.
        </motion.p>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 pb-16 max-w-4xl mx-auto">
        <div className="space-y-6 text-gray-700 leading-relaxed ">
          <p>
            Working at Northbridge Collegiate offers more than just a role. As
            part of our team, you gain meaningful exposure, work within a
            cross-border environment, and collaborate with a dedicated and
            driven community of peers who care deeply about their work and
            impact.
          </p>

          <p>
            We seek individuals who are thoughtful, disciplined, and aligned
            with high standards of excellence and professionalism—individuals
            who care deeply about students and take pride in their work.
          </p>

          <p>
            We look forward to welcoming those who genuinely look forward to the
            next workday as part of a team that inspires students and is
            building something greater than themselves.
          </p>

          <p className="font-medium text-gray-900">
            Please upload your resume along with a cover letter indicating the
            position you wish to be considered for. Kindly note that
            applications submitted without a cover letter will not be
            considered.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-50 px-6 md:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            Application Form
          </h2>
          <ApplicationForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
