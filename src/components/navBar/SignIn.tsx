import React from "react";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export function DialogDefault() {
  const router = useRouter();
  const handleOpen = () => router.push("/login");
  return (
    <Button
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      placeholder={""}
      onClick={handleOpen}
      variant="gradient"
    >
      sing In
    </Button>
  );
}
