"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {v4 as uuid} from "uuid"
const CLIENTS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography
          onPointerEnterCapture={()=> {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
          variant="h6"
          color="blue-gray"
          className="mb-8"
        >
          My awesome clients
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={uuid()}
              alt={logo}
              width={768}
              height={768}
              className="w-40"
              src={`/logos/logo-${logo}.svg`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
