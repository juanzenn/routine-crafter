import { buttonVariants } from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="py-16 min-h-full flex flex-col justify-center">
      <div className="container mx-auto px-4 text-center">
        <figure className="relative mx-auto mb-8 aspect-video max-w-[50%]">
          <Image
            fill={true}
            src="https://images.unsplash.com/photo-1520948013839-62020f374478"
            alt="Person lifting weights"
            className="shadow-lg rounded-md"
          />
        </figure>

        <h1 className="text-primary text-4xl font-bold mb-4">
          Routine Crafter - Your Ultimate Weightlifting Companion
        </h1>
        <p className="text-primary/70 text-lg mb-8">
          Effortlessly Create and Manage Exercises and Routines for Optimal
          Weightlifting Progress
        </p>

        <div className="flex gap-6 mx-auto w-fit">
          <Link
            className={buttonVariants({ size: "lg", variant: "ghost" })}
            href="/login"
          >
            Sign Up
          </Link>
          <Link className={buttonVariants({ size: "lg" })} href="/login">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
