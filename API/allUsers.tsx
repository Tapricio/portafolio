/* API call de todos los usuarios */
export async function allUsers() {
  try {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    return data.users;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}
