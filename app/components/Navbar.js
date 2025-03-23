import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Button from "./Button";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link
          href={"/"}
          className="btn btn-ghost text-xl font-extrabold text-neutral"
        >
          <Image src={Logo} alt="Logo" className="h-10 w-10 " />
          <span className="hidden md:block text-base-content">
            Technicians Bootcamp
          </span>
        </Link>
      </div>
      <div className="flex gap-2">
        {" "}
        <Button />{" "}
      </div>
    </div>
  );
}

export default Navbar;
