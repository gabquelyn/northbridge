"use client";
import React, { useContext } from "react";
import { cartContext } from "../providers/cartContextProvider";
import {
  useCourses,
  useEnrolCourses,
  useEnrolled,
} from "../hooks/useAdmission";
import Image from "next/image";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import CartDetails from "./CartDetails";

function Cartitem({
  selected,
  removeSelected,
  disableEdit,
  editMode,
}: {
  selected?: number[];
  removeSelected?: (id: number) => void;
  disableEdit?: boolean;
  editMode?: boolean;
}) {
  const ctx = useContext(cartContext);
  const { data, isSuccess, isLoading } = useCourses();
  const { data: enrolled } = useEnrolled();
  const filterSelected = data?.data?.filter((course) =>
    ctx?.cart.includes(course.id) || selected?.includes(course.id)
  );

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-full">
        <ClipLoader />
      </div>
    );

  if (isSuccess)
    return (
      <CartDetails
        courses={filterSelected || []}
        removeSelected={removeSelected}
        disableEdit={disableEdit}
        editMode={editMode}
        pending={enrolled?.paid ? [] : enrolled?.data}
      />
    );
}

export default React.memo(Cartitem);
