"use client";

import { Image } from "@mantine/core";

interface LogoWrapperProps {}

export default function LogoWrapper({}: LogoWrapperProps) {
  return (
    <div className="mt-10 flex items-center  gap-5">
      <Image
        className="max-h-[40px]"
        src="https://create.t3.gg/images/t3-dark.svg"
      />
      <Image
        className="max-h-[40px]"
        src="https://cdn.worldvectorlogo.com/logos/prisma-2.svg"
      />
      <Image
        className="max-h-[40px]"
        src="https://mantine.dev/_next/static/media/mantine-logo-full.37ba3fa3.svg"
      />
      <div className="flex items-center gap-2">
        <Image
          className="max-h-[40px]"
          src="https://edgestore.dev/img/logo-sm.png"
        />
        <Image
          className="max-h-[20px]"
          src="https://edgestore.dev/assets/images/edgestore-7e31f07a3e4097cd90954dd4dc4d4991.svg"
        />
      </div>
    </div>
  );
}
