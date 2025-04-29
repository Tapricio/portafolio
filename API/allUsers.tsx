/* obtenemos usuarios API DummyJson */
export const allUsers = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const results = await response.json();
  return results;
};

export async function todosUsuarios(): Promise<UsersResponse> {
  try {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  // Agrega aquí más campos si quieres
};

export type UsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};
