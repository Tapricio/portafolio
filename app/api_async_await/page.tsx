"use client";
import React, { Suspense, useEffect, useState } from "react";
import { allUsers, todosUsuarios, UsersResponse } from "@/API/allUsers";

type UsersData = {
  id: number;
  firstName: string;
};
const ApiAsyncAwait = () => {
  const [usuarios, setUsuarios] = useState<UsersData[]>([]);
  const [data, setData] = useState<UsersResponse | undefined>();
  /*  useEffect(() => {
    const fetchData = async () => {
      const data = await allUsers();
      setUsuarios(data.users);
    };
    fetchData();
    console.log(fetchData());
  }, []); */

  /* useEffect(() => {
    const fetchData = async () => {
      const data = await todosUsuarios();
      setData(data);
    };
    fetchData();
  }, []); */

  return (
    <div className="text-white">
      <h1 className="text-5xl">resultados API call</h1>
      {/* <Suspense>
        <ul>
          {data.map((user, index) => (
            <li key={index}>
              Id:{user.id} Nombre:{user.firstName}
            </li>
          ))}
        </ul>
      </Suspense> */}
      {/* <Suspense fallback={<h1>loading</h1>}>
        <ul>
          {data?.users.map((user) => (
            <li key={user.id}>{user.id}</li>
          ))}
        </ul>
      </Suspense> */}
    </div>
  );
};

export default ApiAsyncAwait;
