import { PageBaseProps } from "@/lib/definitions";
import { getDictionary } from "@/lib/dictionaries";
import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ params: { lang } }: PageBaseProps) {
  const { homepage } = await getDictionary(lang);
  const currentUser = await getCurrentUser();

  return (
    <main className="h-full">
      <section className="flex flex-row-reverse h-full">
        <figure className="relative mx-auto flex-1 h-full border-l border-slate-300 shadow-sm">
          <Image
            fill
            src="https://images.unsplash.com/photo-1606328500899-38351f33df8a?w=1980"
            alt="Person lifting weights"
          />
        </figure>

        <section className="flex-1 flex flex-col justify-center px-8 lg:px-12 xl:px-24">
          <h1 className="text-slate-900 text-6xl tracking-tight font-bold mb-4">
            {homepage.title}
          </h1>
          <p className="text-slate-600 text-xl mb-8 max-w-lg">
            {homepage.description}
          </p>

          <Link
            className={cn(
              buttonVariants({ size: "lg" }),
              "text-2xl p-6 px-10 w-3/4 mx-auto"
            )}
            href={currentUser ? "/dashboard" : "/login"}
          >
            {homepage.button}
          </Link>
        </section>
      </section>
    </main>
  );
}
