export function formatDay(unixtime) {
  const convertToDate = new Date(unixtime * 1000);

  const options = { weekday: "long" };

  return convertToDate.toLocaleDateString("en-US", options);
}

export function formatDate(unixtime) {
  const convertToDate = new Date(unixtime * 1000);

  const options = { day: "numeric", month: "long" };

  return convertToDate.toLocaleDateString("en-US", options);
}
