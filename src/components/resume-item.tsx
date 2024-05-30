import { Card, Typography } from "@material-tailwind/react";

interface ResumeItemProps {
  readonly icon: React.ElementType;
  readonly children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Card
        onPointerEnterCapture={()=> {}}
        onPointerLeaveCapture={() => {}}
        placeholder={""}
        color="gray"
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </Card>
      <Typography
        onPointerEnterCapture={()=> {}}
        onPointerLeaveCapture={() => {}}
        placeholder={""}
        className="w-full font-normal !text-gray-500"
      >
        {children}
      </Typography>
    </div>
  );
}

export default ResumeItem;
