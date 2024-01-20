export const redirectTo = (role: "admin" | "karyawan", link?: string) => {
  const startHref = role === "admin" ? "/admin" : "karyawan";

  let destination: string;
  if (!link) {
    if (role === "admin") {
      destination = startHref + "/partner";
    } else {
      destination = startHref + "/member";
    }
  } else {
    destination = startHref + link;
  }

  return destination;
};
