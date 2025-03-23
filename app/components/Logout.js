"use client";
import { signOut } from "next-auth/react";

export function Logout() {
  return (
    <button onClick={() => signOut()} className="btn btn-ghost">
      Logout
    </button>
  );
}
