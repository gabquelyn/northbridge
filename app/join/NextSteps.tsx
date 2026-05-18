import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GrLinkedin } from "react-icons/gr";

export default function NextSteps() {
  return (
    <div className="mt-20 space-y-5">
      {/* Heading */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
          Next steps
        </h2>
        <div className="w-10 h-0.5 bg-darkBlue" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          {
            src: "/asset/grop.jpg",
            label: "About us",
            title: "Who we are",
            alt: "Who we are",
            link: "/about",
          },
          {
            src: "/asset/students.png",
            label: "Our model",
            title: "What we do",
            alt: "What we do",
            link: "/northbridge-model",
          },
        ].map(({ src, label, title, alt, link }) => (
          <Link href={link}>
            <div
              key={title}
              className="group border-2 border-gray-100 rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="h-44 w-full relative overflow-hidden">
                <Image
                  src={src}
                  fill
                  alt={alt}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] font-medium tracking-[1.2px] uppercase text-gray-400 mb-0.5">
                  {label}
                </p>
                <p
                  className="text-lg font-medium text-gray-900 flex items-center justify-between"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                  <ArrowUpRight size={16} className="text-gray-400" />
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-end">
        <Link href="https://www.linkedin.com/company/northbridge-collegiate/">
          <button className="group relative flex items-center gap-3 px-7 py-3.5 cursor-pointer text-white bg-darkBlue overflow-hidden transition-all">
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/8 transition-colors duration-200" />
            <GrLinkedin size={18} className="relative z-10 shrink-0" />
            <p className="relative z-10 text-sm font-medium tracking-wide">
              Connect with us on LinkedIn
            </p>

            <ArrowRight size={14} />
          </button>
        </Link>
      </div>
    </div>
  );
}
