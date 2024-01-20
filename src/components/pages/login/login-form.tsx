import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";

/* UI - COMPONENTS */
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/Form/Input/InputField";
import Label from "@/components/ui/Form/Input/InputLabel";

/* UI - ICONS */
import VisibilityIcon from "@/components/ui/Icons/visibility-icon";
import VisibilityOffIcon from "@/components/ui/Icons/visibility-off-icon";

import type { LoginForm } from "@/types/global/login";

function LoginFormComponent() {
  const [showPassword, setShowPassword] = React.useState(false);

  const formikLogin = useFormik<LoginForm>({
    initialValues: {
      email: "",
      password: "",
      role: "",
    },
    onSubmit: async (values) => {
      await authUser(values);
    },
  });

  const authUser = async (payload: LoginForm) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: payload.email,
      password: payload.password,
    });
    if (!result?.error) {
      window.location.replace("/");
    } else {
      console.error(result);
      alert(result.error);
    }
  };

  return (
    <section>
      <div className="mx-auto flex flex-col items-center justify-center px-4 py-4 lg:py-0 loginLogo:h-screen">
        <div className="w-full max-w-sm">
          <div className="mb-4">
            <Image
              src="/images/site/logo.png"
              alt="logo"
              width={200}
              height={200}
              priority
              className="mx-auto h-[70px] w-auto bg-center md:h-[105px] md:w-auto"
            />
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={formikLogin.handleSubmit}
          >
            <div>
              <Label htmlFor="email">Email</Label>
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                onChange={formikLogin.handleChange}
                value={formikLogin.values.email}
                disabled={formikLogin.isSubmitting}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <InputField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={formikLogin.handleChange}
                value={formikLogin.values.password}
                disabled={formikLogin.isSubmitting}
                required
                iconRight={
                  showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />
                }
                onClickRight={() => setShowPassword(!showPassword)}
              />
            </div>
            <Button type="submit" disabled={formikLogin.isSubmitting}>
              Login
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginFormComponent;
