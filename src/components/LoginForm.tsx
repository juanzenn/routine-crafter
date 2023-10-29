"use client";

import { authenticate } from "@/lib/actions";
import { Button } from "@/ui/Button";
import { CheckCircle, Loader2, Mail } from "lucide-react";

import { useFormState, useFormStatus } from "react-dom";

export default function LoginForm() {
  const [status, action] = useFormState(authenticate, undefined);

  if (status === "success") {
    return (
      <main className="p-12 w-fit mx-auto bg-slate-50 rounded-xl shadow mt-6">
        <h1 className="mb-3 text-2xl font-semibold">
          <CheckCircle className="inline-block mr-2 text-green-500" />
          Magic Link sent to your email.
        </h1>

        <p className="text-primary/70 text-lg max-w-md">
          Please check your email and click the link to log in. You will be
          redirected to the dashboard.
        </p>
      </main>
    );
  }

  return (
    <form action={action} className="max-w-lg mx-auto">
      <Form />
    </form>
  );
}

function Form() {
  const { pending } = useFormStatus();

  return (
    <div className="p-12">
      <h1 className={`mb-3 text-2xl font-semibold`}>Log In to continue</h1>
      <div className="w-full">
        <div>
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
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
        className="mt-4 w-fit ml-auto flex gap-2 min-w-[100px]"
        disabled={pending}
        aria-disabled={pending}
      >
        Log in
        {pending ? <Loader2 className="animate-spin w-3" /> : null}
      </Button>
    </div>
  );
}
