import Image from "next/image";
import Link from "next/link";
import Reader from "@/public/ReadingDoodle.svg";
import Glasses from "@/public/lucide--glasses.svg";

function Hero() {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={Reader}
          alt="Reader"
          className="hidden md:block w-3/4"
          loading="lazy"
        />
        <div className="space-y-6">
          <div className="flex gap-3 items-center">
            <h1 className="text-3xl font-bold">Technicians Bootcamp</h1>
            <Image
              src={Glasses}
              alt="Glasses-icon"
              className="bg-accent rounded-2xl p-2 w-10 h-10  md:w-14 md:h-14"
            />
          </div>
          <div className="flex flex-col gap-6">
            <p>
              Follow the Ophthalmic Technicians roadmap to prepare your journey
              at XYZ eye clinic. Follow the Ophthalmic Technicians roadmap to
              prepare your journey at XYZ eye clinic.Follow the Ophthalmic
              Technicians roadmap to prepare your journey at XYZ eye clinic.
            </p>
            <p className="badge badge-accent font-semibold ">Zero to COA.</p>
          </div>
          <div className="flex gap-2 justify-center md:justify-start">
            <button className="btn btn-neutral w-full lg:w-1/3">
              <Link href={"/"}>Start Learning</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
