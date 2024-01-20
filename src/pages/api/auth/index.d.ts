import "next-auth";
import { JWT } from "next-auth/jwt";

type AuthData = {
  apiToken: string;
  email: string;
  exp: number;
  iat: number;
  id: string;
  jti: string;
  sub: string;
  role: "admin" | "karyawan";
};

declare module "next-auth" {
  interface Session {
    user: AuthData;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends AuthData {}
}
