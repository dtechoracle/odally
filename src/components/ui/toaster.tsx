"use client";

import React from "react";
import { Toaster as HotToaster } from "react-hot-toast";

export function Toaster() {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        className: "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm shadow-lg",
        success: { iconTheme: { primary: "#0ea5e9", secondary: "#fff" } },
        error: { iconTheme: { primary: "#ef4444", secondary: "#fff" } },
      }}
    />
  );
}
