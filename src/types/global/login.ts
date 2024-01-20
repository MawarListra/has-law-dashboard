interface Login {
  email: string;
  password: string;
  role: string;
}

export interface LoginForm extends Login {}

export interface LoginType extends Login {
  id: number;
}

/* RESPONSES TYPE */
interface ResponseType {
  status: string;
  message: string;
}

export interface LoginPostResponse extends ResponseType {
  data: LoginType;
  token: string;
  role: "admin" | "karyawan";
}
