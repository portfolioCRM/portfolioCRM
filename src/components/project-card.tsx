import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  readonly img: string;
  readonly title: string;
  readonly desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <Card
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      placeholder={""}
      color="transparent"
    >
      <CardHeader
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={""}
        className="mx-0 mt-0 mb-6 h-48"
      >
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={""}
        className="p-0"
      >
        <a
          href={title}
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            placeholder={""}
            variant="h5"
            className="mb-2"
          >
            {title}
          </Typography>
        </a>
        <Typography
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
          className="mb-6 font-normal !text-gray-500"
        >
          {desc}
        </Typography>
        <Button
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
          color="gray"
          size="sm"
        >
          see details
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
