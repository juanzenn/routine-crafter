import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { type Provider } from "next-auth/providers";
import EmailProvider from "next-auth/providers/email";
import { authConfig } from "./auth.config";

const { EMAIL_FROM = "" } = process.env;

export const nextAuth = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
  providers: [
    EmailProvider({
      server: {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "juanandres140299@gmail.com",
          pass: "kheurrghbqvpacqj",
        },
      },
      from: EMAIL_FROM,
    }),
  ] as Provider[],
  adapter: PrismaAdapter(db),
});
