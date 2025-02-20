export const setCurrency = (
  value = 0,
  withRp = true,
  locale: string = "vi"
) => {
  if (!value) return value;

  const isIndo = locale === "vi";

  const currency = new Intl.NumberFormat("vi-VN", {
    currency: "VND",
  }).format(value);

  return `${withRp ? (isIndo ? "đ" : "Rp") : " "} ${currency.split(",")[0]}`;
};

export const setShortCurrency = (
  value = 0,
  withRp = true,
  locale: string = "id"
) => {
  if (!value) return value;

  const newValue = parseInt(`${value}`);
  const isIndo = locale === "id";

  const currency = new Intl.NumberFormat("id-ID", {
    currency: "VND",
  }).format(newValue);
  const currencies = currency.split(".");

  let shortValue = "";

  switch (true) {
    case newValue >= 1000000000000:
      shortValue = "T";
      break;
    case newValue >= 1000000000:
      shortValue = isIndo ? "M" : "B";
      break;
    case newValue >= 1000000:
      shortValue = isIndo ? "Jt" : "M";
      break;
    case newValue >= 1000:
      shortValue = isIndo ? "Rb" : "K";
      break;
    default:
      break;
  }

  return `${withRp ? (isIndo ? "Rp " : "VND ") : ""}${
    currencies[0]
  }${shortValue}`;
};

export const setShortCurrency2 = (value = 0, withRp = true, locale = "id") => {
  if (!value) return value;

  const newValue = parseInt(`${value}`);
  const isIndo = locale === "id";

  const currency = new Intl.NumberFormat("id-ID", {
    currency: "VND",
  }).format(newValue);
  const currencies = currency.split(".");

  let shortValue = "";

  switch (true) {
    case newValue >= 1000000000000:
      shortValue = "T";
      break;
    case newValue >= 1000000000:
      shortValue = isIndo ? "M+" : "B+";
      break;
    case newValue >= 1000000:
      shortValue = isIndo ? "Jt+" : "M+";
      break;
    case newValue >= 1000:
      shortValue = isIndo ? "Rb+" : "K+";
      break;
    default:
      break;
  }

  return `${withRp ? (isIndo ? "Rp " : "VND ") : ""}${
    currencies[0]
  }${shortValue}`;
};
