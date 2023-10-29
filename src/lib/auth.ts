import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { type Provider } from "next-auth/providers";
import EmailProvider from "next-auth/providers/email";
import { authConfig } from "./auth.config";

const {
  EMAIL_HOST = "",
  EMAIL_PORT = "",
  EMAIL_USER = "",
  EMAIL_PASSWORD = "",
  EMAIL_FROM = "",
} = process.env;

const EMAIL_SERVER = `smtp://${EMAIL_USER}:${EMAIL_PASSWORD}@${EMAIL_HOST}:${EMAIL_PORT}`;

export const nextAuth = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
  providers: [
    EmailProvider({ server: EMAIL_SERVER, from: EMAIL_FROM }),
  ] as Provider[],
  adapter: PrismaAdapter(db),
});
