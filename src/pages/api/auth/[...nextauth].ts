import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import type { NextAuthOptions } from "next-auth";
import type { LoginForm, LoginPostResponse } from "@/types/global/login";
import crypto from "crypto";

const secretStr = crypto.randomBytes(32).toString("hex");

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as LoginForm;
        const payload = {
          email,
          password,
        };

        try {
          const apiUrl = process.env.NEXT_PUBLIC_API;
          const { data: response } = await axios.post<LoginPostResponse>(
            `${apiUrl}/v1/employee/login`,
            payload
          );

          const { data, token, role } = response;
          const user = {
            id: data.id.toString(),
            email: data.email,
            apiToken: token,
            role: "admin",
          };

          return user;
        } catch (err) {
          if (axios.isAxiosError(err)) {
            const errCode = err.response?.status;

            switch (errCode) {
              case 401:
                throw new Error("Email/Password Salah!");

              default:
                throw new Error("Telah terjadi kesalahan.");
            }
          } else {
            throw new Error("Telah terjadi kesalahan.");
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  secret: "c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e",
};

export default NextAuth(authOptions);
