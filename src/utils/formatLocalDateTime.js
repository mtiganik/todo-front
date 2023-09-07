const formatLocalDateTime = (isoString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const localDate = new Date(isoString).toLocaleString("en-US", {
    ...options,
    timeZone: "Europe/Tallinn",
  });

  return localDate;
};

export default formatLocalDateTime;