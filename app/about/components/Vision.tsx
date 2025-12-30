import React from "react";

export default function Vision() {
  return (
    <div className="bg-[#479DA5] flex flex-col gap-15 px-[20%] text-white p-20 pt-40">
      <div className="grid grid-cols-[30%_70%]">
        <p>Mission</p>
        <p>
          To provide globally accessible, Canadian-aligned education that
          strengthens academic readiness and prepares learners to succeed in
          Canadian universities and beyond.
        </p>
      </div>
      <hr className="border-[#68b2b9]" />
      <div className="grid grid-cols-[30%_70%]">
        <p>Vision</p>
        <p>
          To be a leading global gateway to Canadian post-secondary education.
        </p>
      </div>
      <hr className="border-[#68b2b9]" />
      <div className="grid grid-cols-[30%_70%]">
        <p>Our Commitment</p>
        <p>
          We are committed to helping students arrive in Canada prepared,
          confident, and informed—so they can adapt faster, perform better, and
          build sustainable academic and life outcomes.
        </p>
      </div>
    </div>
  );
}
