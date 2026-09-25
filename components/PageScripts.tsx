"use client";

import { useEffect } from "react";
import { initPage } from "@/lib/interactions";

// Wires up the interactive demos once the static markup is on the page.
export function PageScripts() {
  useEffect(() => {
    initPage();
  }, []);
  return null;
}
