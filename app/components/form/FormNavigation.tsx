import React from "react";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { ClipLoader } from "react-spinners";

function FormNavigation({
  back,
  next,
  disabled,
  pending,
}: {
  back?: Fn;
  next: Fn;
  disabled?: boolean;
  pending: boolean;
}) {
  return (
    <div>
      <div className="mt-8 flex justify-between">
        <button className="action" onClick={back}>
          <p className="flex gap-2 items-center px-5">
            <span>Prev</span>
            <MdOutlineArrowBack />
          </p>
        </button>
        <button
          className="action px-5"
          onClick={next}
          disabled={disabled}
        >
          {pending ? (
            <ClipLoader size = {15} color = "#479da5" />
          ) : (
            <p className="flex gap-2 items-center">
              <span>Save and Continue</span>
              <MdOutlineArrowForward />
            </p>
          )}
        </button>
      </div>
    </div>
  );
}

export default React.memo(FormNavigation);
