"use client";
import Image from "next/image";

interface ConnectionButtonI {
  readonly title: string;
  readonly logo: string;
}

export default function ConnectionButton({ title, logo }: ConnectionButtonI) {
  return (
    <button className="flex justify-between gap-4 items-center p-1 border-2 rounded-lg">
      <p className="text-xl font-bold uppercase">{title}</p>
      <Image height={40} width={40} alt={`${title}-logo`} src={logo} />
    </button>
  );
}
