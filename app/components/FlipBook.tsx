"use client";
import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

import { FaChevronRight, FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import PageSlider from "./flipbook/PageSlider";

export default function LeafletFlip({ pages }: { pages: React.ReactNode[] }) {
  const bookRef = useRef<typeof HTMLFlipBook | null>(null);
  const [page, setPage] = useState(0);
  const totalPages =
    (bookRef.current as any)?.pageFlip()?.getPageCount?.() ?? pages.length;
  return (
    <div className="flex relative flex-col mt-5 md:mt-0 items-center gap-6 bg-slate-100 p-6 py-20">
      <HTMLFlipBook
        ref={bookRef}
        width={300}
        height={400} // taller base
        size="stretch"
        minWidth={240}
        maxWidth={590}
        minHeight={330} // important fix
        maxHeight={520}
        usePortrait={true} // forces single-page, taller feel
        mobileScrollSupport={true}
        className="bg-nb-surface rounded-xl"
        style={{}}
        startPage={0}
        drawShadow={true}
        flippingTime={700}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.2}
        showCover={false}
        onFlip={(val) => setPage(val.data)}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {pages.map((content, i) => (
          <div
            key={i}
            className=" border-[#fdfafe] shadow-md relative overflow-hidden flex flex-col items-center
            "
          >
            <div className="h-full">{content}</div>

            <span className="absolute bottom-4 right-6 text-xs text-slate-400">
              {i + 1}
            </span>
          </div>
        ))}
      </HTMLFlipBook>

      {/* Controls */}
      <div className="w-full md:w-5xl mx-[15%] items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-3 justify-between w-full">
          <div className="flex gap-3 justify-between md:justify-center w-full md:w-fit">
            <p
              className={`text-slate-500 cursor-pointer border-2 rounded-[50%] border-slate-300 p-3 hover:border-[#479DA5] hover:text-[#479DA5]`}
              onClick={() => (bookRef.current as any)?.pageFlip().flipPrev()}
            >
              <FaChevronLeft />
            </p>
            <p
              className={`text-slate-500 cursor-pointer border-2 rounded-[50%] border-slate-300 p-3 hover:border-[#479DA5] hover:text-[#479DA5]`}
              onClick={() => (bookRef.current as any)?.pageFlip().flipNext()}
            >
              <FaChevronRight />
            </p>
          </div>

          {/* <div className="w-full max-w-md">
         
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>{page + 1}</span>
              <span>{totalPages}</span>
            </div>

       
            <div
              className="h-0.75 w-full bg-slate-200 rounded-full overflow-hidden"
              ref={sliderRef}
              onMouseDown={(e) => {
                isDragging.current = false;
                updatePageFromPosition(e.clientX);
              }}
              onMouseMove={(e) => {
                if (isDragging.current) {
                  updatePageFromPosition(e.clientX);
                }
              }}
              onMouseUp={() => (isDragging.current = false)}
              onMouseLeave={() => (isDragging.current = false)}
            >
      
              <div
                className={`h-full transition-all duration-300 ease-out`}
                style={{
                  width: `${progress}%`,
                  backgroundColor:
                    page > 18 && highlight
                      ? "#D96C2C"
                      : page > 10 && highlight
                        ? "#F4BD30"
                        : "#479DA5",
                }}
              />
            </div>
          </div> */}

          <PageSlider
            totalPages={totalPages}
            page={page}
            onChange={(e) => {
              (bookRef.current as any)?.pageFlip().turnToPage(+e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
