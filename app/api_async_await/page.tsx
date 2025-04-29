"use client";
import React, { Suspense, useEffect, useState } from "react";
import { allUsers } from "@/API/allUsers";

type UsersData = {
  id: number;
  firstName: string;
};
const ApiAsyncAwait = () => {
  const [usuarios, setUsuarios] = useState<UsersData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await allUsers();
      setUsuarios(data.users);
    };
    fetchData();
    console.log(fetchData());
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-5xl">resultados API call</h1>
      <Suspense>
        <ul>
          {usuarios.map((user, index) => (
            <li key={index}>
              Id:{user.id} Nombre:{user.firstName}
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
};

export default ApiAsyncAwait;
