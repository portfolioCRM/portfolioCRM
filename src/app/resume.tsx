"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import {v4 as uuid} from "uuid"
const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Bachelor of Science in Computer Science",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Certified Web Developer ",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Frontend Framework Proficiency Certification",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography
            onPointerEnterCapture={()=> {console.log("first")}}
            onPointerLeaveCapture={() => {}}
            placeholder={""}
            variant="h2"
            color="blue-gray"
          >
            My Resume
          </Typography>
          <Typography
            onPointerEnterCapture={()=> {console.log("first")}}
            onPointerLeaveCapture={() => {}}
            placeholder={""}
            className="mb-4 mt-3 w-9/12 font-normal !text-gray-500"
          >
            Highly skilled and creative Web Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </Typography>
          <Button
            onPointerEnterCapture={()=> {console.log("first")}}
            onPointerLeaveCapture={() => {}}
            placeholder={""}
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props) => (
            <ResumeItem key={uuid()} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
