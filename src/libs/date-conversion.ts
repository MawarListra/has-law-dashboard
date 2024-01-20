const isDateInvalid = (date: Date) => {
  return isNaN(date.getTime());
};

export const convertDateToString = (date: string | null) => {
  if (date === null) return null;

  const dateObj = new Date(date);

  if (isDateInvalid(dateObj)) return null;

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
    .format(dateObj)
    .replaceAll("/", "-");
};

export const covertDateToDate = (date: string | null) => {
  if (date === null) return null;

  const dateObj = new Date(date);

  if (isDateInvalid(dateObj)) return null;

  return new Date(dateObj).toISOString().split("T")[0];
};
