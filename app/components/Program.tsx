"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
export default function Program() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
  const [activeCard, setActiveCard] = React.useState<number | null>(null);

  const cards = [
    {
      title: "Canadian Academic Alignment Program (CAAP)",
      desc: "Don't repeat a year—align it. CAAP recognizes your prior learning to fast-track your success in Canadian education.",
      image: "/asset/grop.jpg",
      cta: "/caap",
    },
    {
      title: "Grade 11",
      desc: "30+ Grade 12 Courses Choose from a wide variety of Ontario-standard curriculum options tailored to your interests.",
      image: "/asset/flowergirl.jpg",
      cta: "/grade11",
    },
    {
      title: "Grade 12",
      desc: "Designed for students seeking maximum preparation for competitive universities, our program runs concurrently with Grade 12.",
      image: "/asset/afro.jpg",
      cta: "/grade12",
    },
    {
      title: "Grade 12 Advantage Year (AY12)",
      desc: "Ideal for students prepared to begin Ontario curriculum–based secondary studies following Grade 10–level education",
      image: "/asset/boy.jpg",
      cta: "/ay12",
    },
  ];

  return (
    <div className="py-20 flex flex-col items-center justify-center overflow-hidden">
      <p className="title">
        The Ontario Secondary
        <br />
        School Diploma - <span className="text-[#479DA5]">OSSD</span>
      </p>

      <p className="md:max-w-150 max-w-[90%] text-center">
        The OSSD is more than a diploma—it is a globally respected credential
        that opens doors to top universities worldwide, giving students the
        confidence and preparation to thrive anywhere.
      </p>

      {/* Cards */}
      <motion.div
        className="flex items-center justify-center flex-wrap gap-7 mt-9"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {cards.map((card, i) => {
          const isVisible = hoveredCard === i || activeCard === i;

          return (
            <motion.div
              key={i}
              className="relative h-110 w-76 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveCard(activeCard === i ? null : i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0"
                animate={{ scale: isVisible ? 1.08 : 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Always-visible title */}
              <div className="absolute inset-0 z-10 flex items-end p-5 bg-linear-to-t from-black/80 via-black/20 to-transparent">
                <p className="text-white font-semibold leading-snug">
                  {card.title}
                </p>
              </div>

              {/* Reveal Panel */}
              <motion.div
                className="absolute inset-0 z-20 flex flex-col justify-end p-5 text-white bg-black/70"
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 30,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <p className="text-sm leading-relaxed">{card.desc}</p>

                <Link href={card.cta}>
                  <motion.span
                    className="mt-4 inline-block w-fit rounded-full bg-[#479DA5] px-4 py-2 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="flex flex-col gap-3 items-center text-center mt-30">
        {/* <div className="relative overflow-hidden rounded-xl h-100 w-full">
          <Image
            src="/asset/diss.jpg"
            alt="Discussion"
            fill
            className="object-cover"
          />
        </div> */}

        <p className="title">
          One Clear Route to <br />
          <span className="text-[#479DA5]">Canadian University</span> Readiness
        </p>
        <p className="md:max-w-200 w-[95%]">
          Delivering Canadian-aligned secondary programming with ongoing
          academic guidance—supporting students with clarity and confidence
          toward Canadian university readiness.
        </p>
        <div className="mb-3">
          <motion.button>View Program Options</motion.button>
        </div>
        <div className="bg-gray-50">
          <Marquee pauseOnHover speed={50} gradient={false} className="mt-5">
            {Array.from({ length: 43 }, (_, i) => i + 1).map((i) => (
              <div key={i} className="mx-8 flex items-center justify-center">
                <Image
                  src={`/asset/schools/${i}.png`}
                  width={100}
                  height={220}
                  alt={`logo-${i}`}
                  className="opacity-80 hover:opacity-100 transition-opacity grayscale-100 hover:grayscale-0"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
