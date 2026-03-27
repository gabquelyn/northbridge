import AnimatedCancel from "@/app/components/AnimatedCancel";
import Button from "@/app/components/atoms/Button";
import { useReceipt } from "@/app/hooks/useAdmission";
import Image from "next/image";
import React from "react";
import { ClipLoader } from "react-spinners";

export default function AcceptApplication({
  mode,
  name,
  onCancel,
  id,
}: {
  mode: "off-site" | "on-site";
  name: string;
  onCancel: Fn;
  id: string;
}) {
  const { data, isPending } = useReceipt(id);
  console.log(data);
  return (
    <div className="flex flex-col p-4 text-sm items-center justify-center w-full gap-4">
      {mode == "on-site" && (
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-primary/10 tex-lg text-primary p-8 rounded-full w-fit">
            <Image src="/asset/approve.png" alt="" height={30} width={30} />
          </div>
          <p className="text-lg text-gray-900">Confirm Application</p>
          <p className="w-md text-center">
            You are about to confirm {name}&apos;s application as valid. This
            will move {name} to proceed with payment.
          </p>
          <div className="flex gap-3 flex-col md:flex-row w-full">
            <Button className="w-full">Yes, I approve</Button>
            <button
              className="p-2 px-5 border border-gray-200 rounded-2xl cursor-pointer w-full"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {mode == "off-site" &&
        (isPending ? (
          <ClipLoader />
        ) : data?.data.length == 0 ? (
          <AnimatedCancel message="Payment invoice not found" />
        ) : (
          <div>
            {data?.data.map((datum) => (
              <div
                className="overflow-hidden shadow rounded-2xl w-full"
                key={datum.reference}
              >
                <div className="p-4 w-full text-center text-gray-100 font-semibold text-xl bg-primary">
                  {datum.amount}
                </div>
                <div className="text-secondary p-4">
                  <div className="flex justify-between">
                    <p>Ref.</p>
                    <p>{datum.reference}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Amount</p>
                    <p>{+datum.amount / 100}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Currency</p>
                    <p>{datum.currency}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Status</p>
                    <p>{datum.status}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-3 flex flex-col md:flex-row gap-3 justify-between">
              <button className="action w-full">Confirm</button>
              <button
                className="p-2 px-5 border-2 border-gray-200 rounded-2xl cursor-pointer w-full"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
