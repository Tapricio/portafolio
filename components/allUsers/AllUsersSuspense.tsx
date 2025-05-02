import { allUsers } from "@/API/allUsers";
import React from "react";
import { User } from "@/assets/types/user";

const AllUsersSuspense = async () => {
  const usuarios = await allUsers();
  console.log("re-render suspense api call");
  return (
    <>
      {usuarios.map((user: User) => (
        <div key={user.id}>
          {user.firstName}
          {user.lastName}
        </div>
      ))}
    </>
  );
};

export default AllUsersSuspense;
