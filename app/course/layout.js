import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CourseNavbar from "../components/CourseNavbar";
import CourseSidebar from "../components/CourseSidebar";

async function LayoutPrivate({ children }) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar - Fixed at the top */}
      <div className="flex-shrink-0">
        <CourseNavbar />
      </div>

      {/* Main Content - Sidebar and Scrollable Page */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Fixed on the left */}
        <div className="flex-shrink-0">
          <CourseSidebar />
        </div>

        {/* Scrollable Main Content */}
        <div className="flex-1 overflow-y-auto bg-base-100">{children}</div>
      </div>
    </div>
  );
}

export default LayoutPrivate;
