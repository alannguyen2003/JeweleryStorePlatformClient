function formatDateStringToVietnamese(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",

  }).format(date);
}

export default formatDateStringToVietnamese;
