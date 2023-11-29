"use client";

import { usePathname, useRouter } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import * as NProgress from "nprogress";
import { useEffect } from "react";
export default function PatchLoader() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    NProgress.done();
  }, [pathname, router]);

  return <NextTopLoader />;
}
