"use client";
import React, { useContext } from "react";
import { cartContext } from "../providers/cartContextProvider";
import { useCourses, useEnrolled } from "../hooks/useAdmission";
import { ClipLoader } from "react-spinners";
import CartDetails from "./CartDetails";
import FormNavigation from "./form/FormNavigation";
import { useEditCourses } from "../hooks/useProfile";
import useNext from "../hooks/useNext";

function Cartitem({
  selected,
  removeSelected,
  disableEdit,
  editMode,
  back,
  next = () => {},
}: {
  selected?: number[];
  removeSelected?: (id: number) => void;
  disableEdit?: boolean;
  editMode?: boolean;
  back?: Fn;
  next?: Fn;
}) {
  const ctx = useContext(cartContext);
  const { data, isSuccess, isLoading } = useCourses();
  const { data: enrolled } = useEnrolled();
  const filterSelected = data?.data?.filter(
    (course) => ctx?.cart.includes(course.id) || selected?.includes(course.id),
  );

  const editCourses = useEditCourses();
  const { isPending, saveHandler } = useNext({
    mutation: editCourses,
    next,
    details: {
      courses: selected || [],
    },
  });

  const onSave = () => {
    if (editMode) {
      saveHandler();
    }
    next();
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-full">
        <ClipLoader />
      </div>
    );

  if (isSuccess)
    return (
      <div className="space-y-4">
        <CartDetails
          courses={filterSelected || []}
          removeSelected={removeSelected}
          disableEdit={disableEdit}
          editMode={editMode}
          pending={enrolled?.paid ? [] : enrolled?.data}
        />

        {!editMode && (
          <FormNavigation
            pending={isPending}
            disabled={false}
            next={onSave}
            back={back}
          />
        )}
      </div>
    );
}

export default React.memo(Cartitem);
