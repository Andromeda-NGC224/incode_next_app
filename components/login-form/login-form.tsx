"use client";

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import { lusitana } from "@/lib/fonts";
import clsx from "clsx";
import { Button, SocialEnterButtons } from "@/components/ui";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { authenticate, doSocialEnter } from "@/lib/actions";
import Link from "next/link";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <>
      <form action={formAction} className="space-y-3">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pt-8">
          <h1 className={clsx(lusitana.className, "mb-3 text-2xl")}>
            Please log in to continue.
          </h1>
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
                  className="peer block w-full rounded-md border border-gray-400 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 outline-none"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-400 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 outline-none"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <input type="hidden" name="redirectTo" value={callbackUrl} />
          <Button className="mt-4 w-full" aria-disabled={isPending}>
            Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
          </Button>

          {/* Errors */}
          {errorMessage && (
            <div className="flex h-8 items-end space-x-1" aria-live="polite">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </div>
          )}

          <div className="flex items-center mt-3">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
        </div>
      </form>

      {/* Social Enter Buttons */}
      <form action={doSocialEnter} className="px-6">
        <SocialEnterButtons
          titleGit="Sign in with GitHub"
          titleGoogle="Sign in with Google"
        />

        <div className="mt-2 text-center text-sm text-gray-600">
          <span className="mr-1">Don`t have an account?</span>
          <Link
            href="/register"
            className="font-medium text-indigo-600 hover:underline transition-colors"
          >
            Sign in here
          </Link>
        </div>
      </form>
    </>
  );
}
