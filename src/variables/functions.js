export const formatDate = (date) => {
  return date.split(" ")[0].split("-").reverse().join("-");
};

export const formatDateZ = (date) => {
  return date.split("T")[0].replaceAll("-", "/");
};

export const formatDateX = (date) => {
  return date.replaceAll("/", "-");
};
