import { auth } from "@/auth";

async function Course() {
  const session = await auth();
  return (
    <div className="bg-base-300 min-h-screen w-full overflow-y-auto">
      <div className="mx-auto max-w-5xl text-center space-y-6 ">
        <h1 className="font-extrabold text-4xl">
          Welcome to Technicians Bootcamp, {session?.user?.name} 👋🏼
        </h1>
        <p className="text-xl">
          You&apos;re about to embark on a journey to learn the skills to be a
          ophthalmic technician.{" "}
        </p>
      </div>
    </div>
  );
}

export default Course;
