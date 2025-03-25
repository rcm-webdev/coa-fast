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
    // <div className="h-screen flex flex-col">
    //   {/* Navbar - Fixed at the top */}
    //   <div className="flex-shrink-0">
    //     <CourseNavbar />
    //   </div>

    //   {/* Main Content - Sidebar and Scrollable Page */}
    //   <div className="flex flex-1  overflow-hidden">
    //     {/* Sidebar - Fixed on the left */}
    //     <div className="flex-shrink-0">
    //       <CourseSidebar />
    //     </div>

    //     {/* Scrollable Main Content */}
    //     <div className="flex-1 overflow-y-auto bg-base-300">{children}</div>
    //   </div>
    // </div>

    <div className="min-h-0 lg:h-screen flex flex-col">
      {/* Navbar - Always at top */}
      <div className="flex-shrink-0 sticky top-0 z-50">
        <CourseNavbar />
      </div>

      {/* Main Wrapper */}
      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* Sidebar - Below Navbar on mobile, left side on desktop */}
        <div className="flex-shrink-0 overflow-y-auto max-h-[40vh] lg:max-h-full">
          <CourseSidebar />
        </div>

        {/* Main Content - Stacks below on mobile, fills right side on desktop */}
        <div className="flex-1 overflow-y-auto bg-base-300">{children}</div>
      </div>
    </div>
  );
}

export default LayoutPrivate;
