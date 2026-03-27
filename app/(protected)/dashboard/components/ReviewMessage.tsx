import React from "react";
import { GrInspect } from "react-icons/gr";

export default function ReviewMessage() {
  return (
    <div className="flex flex-col p-4 text-sm items-center justify-center w-full gap-2">
      <div className="bg-primary/10 text-2xl text-primary p-8 rounded-full w-fit">
        <GrInspect />
      </div>
      <p className="text-lg text-gray-900">Send Review</p>

      <p className="text-center max-w-md">
        This will mark the application as rejected and notify the student to
        review application. Hence, the student cannot move forward.
      </p>
      <div className="w-full mt-2">
        <label>Review message</label>
        <textarea
          className="resize-none border border-gray-100  focus:ring-2 ring-primary bg-gray-50 rounded-xl p-4 w-full outline-none"
          rows={6}
        ></textarea>
      </div>

      <button className="action w-full">Send Message</button>
    </div>
  );
}
