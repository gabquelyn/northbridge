import React from "react";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";

function FormNavigation({
  step,
  back,
  next,
  disabled,
  mode,
}: {
  step: number;
  back: Fn;
  next: Fn;
  disabled: boolean;
  mode: string;
}) {
  return (
    <>
      {step >= 1 && step < 8 && (
        <div>
          <div className="mt-8 flex justify-between">
            <button
              className="action"
              onClick={back}
              disabled={mode == "off-site" && step == 1}
            >
              <p className="flex gap-2 items-center px-5">
                <span>Prev</span>
                <MdOutlineArrowBack />
              </p>
            </button>
            <button className="action" onClick={next} disabled={disabled}>
              <p className="flex gap-2 items-center px-5">
                <span>Continue</span>
                <MdOutlineArrowForward />
              </p>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(FormNavigation);
