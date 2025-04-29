/* obtenemos usuarios API DummyJson */
export const allUsers = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const results = await response.json();
  return results;
};
