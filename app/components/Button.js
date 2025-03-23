import { auth } from "../../auth";
import { Logout } from "./Logout";
import { SignIn } from "./SignIn";

import Link from "next/link";

async function Button() {
  const session = await auth();

  const getInitials = (name) => {
    return name
      .split(" ") // Split the name into parts
      .slice(0, 2) // Take the first two parts of the name
      .map((part) => part[0].toUpperCase()) // Get the first letter of each part and capitalize it
      .join(""); // Join the letters back together
  };

  if (session && session.user) {
    const initials = getInitials(session.user.name);
    return (
      <div className="dropdown dropdown-end ">
        <div tabIndex={0} role="button" className=" btn m-1">
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-8 rounded-full">
              <span className="text-xs">{initials}</span>
            </div>
          </div>
          <span className="text-lg">{session.user.name || "Friend"}</span>
        </div>
        <ul
          tabIndex={0}
          className="menu text-xl dropdown-content bg-base-300 rounded-box z-1 w-60 p-2 shadow-sm font-semibold"
        >
          <li>
            <Link href={"/course"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
              Course
            </Link>
          </li>
          <li className="hover:bg-[#e1ff00]/60 rounded-lg duration-200">
            <Link href={"https://transposerx.netlify.app"} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                />
              </svg>
              Transpose
            </Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <SignIn />
    </div>
  );
}

export default Button;
