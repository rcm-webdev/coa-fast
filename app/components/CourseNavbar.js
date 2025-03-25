import Link from "next/link";
import Button from "./Button";

function CourseNavbar() {
  return (
    <div className="sticky top-0 z-50 join bg-base-300 border-b flex items-center justify-between ">
      <div className="flex items-center ">
        <div className="join border-r ">
          {/* Logo - always visible */}
          <Link
            href={"/course"}
            className="join-item px-4 py-4 border-r hover:bg-base-200 duration-200"
          >
            <span className="font-bold">Technician&apos;s Bootcamp</span>
          </Link>

          {/* Progress Bar - hidden on small screens */}
          <div className="join-item px-4 py-4 border-r hidden md:flex flex-col gap-2 items-start">
            <span className="text-sm text-bg-content">
              Course Progress (100%)
            </span>
            <progress
              className="progress w-32 mt-1"
              value="100"
              max="100"
            ></progress>
          </div>

          {/* Current Section - hidden on small screens */}
          <div className="join-item px-4 py-4 hidden text-sm md:flex md:flex-col md:gap-1">
            <span>Current Section:</span>
            <span className="link">Introduction</span>
          </div>
        </div>
      </div>

      {/* Right side - user dropdown */}
      <div className="join border-0 lg:border-l hover:bg-base-200 duration-200 py-6">
        <Button />
      </div>
    </div>
  );
}

export default CourseNavbar;
