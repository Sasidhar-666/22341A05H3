export const saveUrls = (urls) => {
  localStorage.setItem("shortUrls", JSON.stringify(urls));
};

export const getUrls = () => {
  const data = localStorage.getItem("shortUrls");
  return data ? JSON.parse(data) : [];
};
