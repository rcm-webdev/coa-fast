"use client";
import { signIn } from "next-auth/react";

export function SignIn() {
  return (
    <button
      onClick={() => signIn(undefined, { redirectTo: "/course" })}
      className="btn btn-accent"
    >
      Start Learning
    </button>
  );
}
