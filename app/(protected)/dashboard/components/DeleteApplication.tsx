import React, { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useDelete } from "@/app/hooks/useAdmission";
import { useRouter } from "next/navigation";
export default function DeleteApplication({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const { mutate, isPending, isSuccess } = useDelete();
  const router = useRouter();
  useEffect(() => {
    if (isSuccess) router.replace("/application");
  }, [isSuccess]);

  return (
    <div className="text-sm p-5">
      <p>
        This action cannot be undone. Deleting this item will permanently remove
        it from the system. Click Delete to proceed or Close to cancel.
      </p>

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-3 mt-2">
        <button
          onClick={() => mutate(id)}
          disabled={isPending}
          className="w-full h-12 rounded-xl bg-red-500 text-white font-medium shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isPending ? <ClipLoader size={14} color="#fff" /> : "Delete"}
        </button>

        <button
          onClick={onClose}
          className="w-full h-12 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
