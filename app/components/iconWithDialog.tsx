"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DialogActions } from "../interfaces/dialogAction";
import Dialog from "./dialog";
import CustomIcon from "./icon";

type Props = {
  travelId: number;
};

export default function IconWithDialog({ travelId }: Props) {
  const router = useRouter();
  const buttonActions: DialogActions[] = [
    {
      title: "Obrisi",
      color: "#f38255",
      textColor: "#ffffff",
      action: async () => {
        await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/travel?id=${travelId}`, {
          method: "DELETE",
        });

        router.refresh();
      },
    },
  ];
  const [dialog, setDialog] = useState(false);
  const handleDialog = (value: boolean) => {
    setDialog(value);
  };
  return (
    <>
      <Dialog
        title="Da li ste sigurni da zelite da trajno obrisete ovu destinaciju?"
        actions={buttonActions}
      >
        <div
          className="bg-red rounded-md p-1 flex justify-center items-center cursor-pointer"
          onClick={() => handleDialog(true)}
        >
          <CustomIcon name="delete" size={24} />
        </div>
      </Dialog>
    </>
  );
}
