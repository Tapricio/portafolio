"use client";
import React, { useEffect, useState } from "react";
import { allUsers } from "@/API/allUsers";
import { User } from "@/assets/types/user";

const AllUsers = () => {
  const [usuarios, setUsuarios] = useState<User[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const getAllUsers = await allUsers();
        setUsuarios(getAllUsers);
        console.log("re-render use effect api call");
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
      }
    };
    fetchAllUsers();
  }, []);

  return (
    <>
      {usuarios ? (
        usuarios.map((user) => (
          <div key={user.id}>
            {user.firstName} {user.lastName}
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default AllUsers;
