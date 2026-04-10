"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { useEnrolCourses } from "../hooks/useAdmission";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { cartContext } from "../providers/cartContextProvider";
import { ClipLoader } from "react-spinners";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export default function CartDetails({
  courses,
  removeSelected,
  disableEdit,
  editMode,
  pending,
}: {
  courses: Course[];
  removeSelected?: (id: number) => void;
  disableEdit?: boolean;
  editMode?: boolean;
  pending?: number[];
}) {
  const ctx = useContext(cartContext);
  const { mutate, isPending, isError, error, isSuccess, data } =
    useEnrolCourses();

  const enrolHandler = () => {
    return alert("Will soon be enabled, be patient with us while we set things up")
    const ids = courses.map((c) => c.id);
    mutate({ courses: ids });
  };
  const router = useRouter();
  useEffect(() => {
    if (isError) {
      console.log(error)
      if ((error as AxiosError).response?.status == 302) {
        return router.replace("/dashboard/apply?mode=off-site");
      }

      if ((error as AxiosError).response?.status == 403) {
        return router.replace("/register?mode=off-site");
      }
      const err = (error as AxiosError<ApiErrorMessage>).response?.data;
      toast.error(err?.message);
    }

    if (isSuccess) {
      ctx?.clearCartHandler();
      router.replace(data.paymentUrl);
    }
  }, [isError, isSuccess]);

  const uncompletedApplication = pending && pending.length > 0;

  return (
    <div>
      <hr className="border border-[#e9e5e5] my-2" />
      <div className="flex-1 overflow-y-auto max-h-[80%] space-y-3">
        {uncompletedApplication && (
          <p>{pending.length} courses pending from application</p>
        )}
        {courses?.length === 0 ? (
          <p className="text-sm text-gray-500">Cart is empty</p>
        ) : (
          courses?.map((course) => (
            <div
              key={course.id}
              className="p-3 bg-white border justify-between border-gray-100 shadow text-xs rounded-lg flex items-center"
            >
              <div className="flex gap-4">
                <div className="relative h-8 w-8 rounded-md overflow-hidden">
                  <Image
                    fill
                    src={course?.image || "/asset/library.jpg"}
                    className="object-cover"
                    alt={course.shortname}
                  />
                </div>
                <div>
                  <p>{course.fullname}</p>
                  <p className="text-secondary">{course.shortname}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  ctx?.removeItemHandler(course.id);
                  if (editMode) removeSelected?.(course.id);
                }}
                disabled={disableEdit}
                className="bg-gray-200 p-2 cursor-pointer rounded-sm disabled:cursor-not-allowed"
              >
                <MdOutlineRemoveShoppingCart />
              </button>
            </div>
          ))
        )}
      </div>
      {!editMode && (
        <div className="pt-4 border-t border-[#e9e5e5] mt-4">
          <button
            className={clsx("action w-full text-sm")}
            onClick={enrolHandler}
            disabled={
              !uncompletedApplication && ctx?.cart && ctx.cart.length == 0
            }
          >
            {isPending ? (
              <p>
                <ClipLoader size={15} color={"#479da5"} />
              </p>
            ) : uncompletedApplication ? (
              <p>Continue to payment</p>
            ) : (
              <p>Checkout</p>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
