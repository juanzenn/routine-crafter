"use server";

import { nextAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  const { signIn } = nextAuth;

  try {
    await signIn("email", {
      email: formData.get("email") as string,
      redirect: false,
    });

    return "success";
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }

    throw error;
  }
}

export async function logout() {
  const { signOut } = nextAuth;

  try {
    await signOut({ redirect: false });
    return "success";
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }

    throw error;
  }
}
