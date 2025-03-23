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
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
          Welcome back - {initials || "Friend"}
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-semibold"
        >
          <li className="items-center">
            <Link href={"/course"}>Course</Link>
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
