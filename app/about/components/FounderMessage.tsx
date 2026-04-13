import React from "react";
import Image from "next/image";

export default function FounderMessage() {
  return (
    <section className="bg-gray-50 py-20 px-[5%]">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-4xl bg-white shadow-xl p-10 md:p-14">
          {/* Accent strip */}
          <div className="absolute left-0 top-0 h-full w-2 bg-[#479DA5]" />

          {/* Header */}
          <div className="mb-8">
            <p className="text-sm uppercase tracking-wide text-[#479DA5]">
              Message from the Founder
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-900">
              The Meaning Behind Northbridge Collegiate
            </h2>
          </div>

          {/* Content */}
          <div className="">
            {/* Message */}
            <div className="text-gray-700 leading-relaxed space-y-5">
              <p>
                At Northbridge Collegiate, our name was chosen with intention.
                It reflects not just who we are, but what we are here to do.
              </p>

              <p>
                North In a global context, “the North” often refers to North
                America—and more specifically, Canada. Canadians proudly say,
                <span className="font-bold italic">“the North.”</span>
              </p>
              <p>
                It represents more than geography. It signals quality,
                structure, opportunity, and a globally respected standard of
                education. Canada's education system is known worldwide for its
                <span className="font-bold">
                  {" "}
                  rigour, consistency, emphasis on critical thinking, and strong
                  preparation for university.
                </span>
              </p>
              <p>
                When we chose “North,” we were not simply referencing a place.
                We were anchoring ourselves in a standard—one that prepares
                students not just to be admitted, but to thrive in a global
                academic environment.
                <span className="font-bold">
                  {" "}
                  At Northbridge, we bring that standard closer to home.
                </span>
              </p>

              <div>
                <p className="font-bold">Bridge</p>
                <p>
                  For many families, the journey from Nigeria to Canada is not
                  straightforward. The differences in academic expectations,
                  learning style, and structure are significant—and often
                  underestimated.
                </p>
              </div>
              <p className="italic">
                Northbridge was created to bridge that gap.
              </p>
              <p>
                Through our Ontario-aligned programming, we provide a clear and
                credible academic pathway—one that connects where students are
                today to where they aspire to be. What once required early
                relocation can now begin with structure, guidance, and purpose
                right here in Nigeria.
              </p>

              <div>
                <p className="font-bold">Collegiate</p>
                <p>
                  We are not a traditional school—and intentionally so. We focus
                  on the senior years because they are decisive.
                </p>
              </div>
              <p>“Collegiate” reflects the environment we are building:</p>

              <p>
                Higher academic expectations
                <br />
                Greater independence
                <br />
                A clear trajectory toward university
                <br />
              </p>

              <p>
                It represents both the standard we uphold and the level we
                expect our students to rise to.
              </p>

              <div>
                <p className="font-bold">Putting It All Together</p>
                <p>
                  Northbridge Collegiate represents a simple but powerful idea:
                </p>
              </div>
              <p>
                A Canadian standard
                <br /> Delivered through a purposeful pathway
                <br />
                Within a focused, university-preparatory environment
              </p>

              <p>In simple terms, our mission is clear:</p>

              <p>
                We do not simply prepare students to gain admission.
                <br />
                We prepare them to succeed once they arrive.
              </p>

              <p>That is the commitment that defines Northbridge.</p>
              <p>We look forward to supporting your student.</p>
            </div>

            {/* Founder Profile */}
            <div className="flex flex-col items-end gap-4">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-[#479DA5]/20">
                <Image
                  src="/asset/founder.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-left md:text-center">
                <p className="text-sm text-gray-500">Founder</p>
                <p className="text-sm text-gray-500">Northbridge Collegiate</p>
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="mt-10">
            <p className="italic text-center text-xs text-gray-500">
              “Preparing Students for Successful Entry into Canadian
              Universities”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
