import Navbar from "../components/Navbar";
import { auth } from "@/auth";

async function Course() {
  const session = await auth();
  return (
    <div className="bg-base-200 min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-5xl px-5 py-12 ">
        <h1 className="font-extrabold text-4xl">
          Welcome to Technicians Bootcamp, {session?.user?.name} 👋🏼
        </h1>
        <p></p>
      </div>
    </div>
  );
}

export default Course;
