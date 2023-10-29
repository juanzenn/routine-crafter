"use client";

import { authenticate } from "@/lib/actions";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { CheckCircle, CheckCircle2, Loader2, Mail } from "lucide-react";

import { useFormState, useFormStatus } from "react-dom";
import Headline from "./dashboard/Headline";

export default function LoginForm() {
  const [status, action] = useFormState(authenticate, undefined);

  if (status === "success") {
    return (
      <main className="">
        <h2 className="mb-3 font-semibold inline-flex items-center">
          Magic Link sent to your email
          <CheckCircle2
            className="inline-block ml-2 text-green-700"
            size={24}
          />
        </h2>

        <p className="text-slate-600">
          Please check your email and click the link to log in. You will be
          redirected to the dashboard.
        </p>
      </main>
    );
  }

  return (
    <form action={action}>
      <Form />
    </form>
  );
}

function Form() {
  const { pending } = useFormStatus();

  return (
    <div>
      <header>
        <Headline
          title="Welcome, lifter!"
          subtitle="Input your email to login or register to the app. It doesn't require a password!"
        />
      </header>

      <figure className="h-[1px] bg-slate-200 mt-2 mb-6" />

      <div className="w-full">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input
              className="pl-10"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>

      <Button
        className="mt-4 ml-auto flex gap-2 w-full"
        disabled={pending}
        aria-disabled={pending}
      >
        Sign In {pending ? <Loader2 className="animate-spin w-3" /> : null}
      </Button>
    </div>
  );
}
