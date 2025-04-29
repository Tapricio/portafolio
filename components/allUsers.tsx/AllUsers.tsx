"use client";
import React, {  Suspense, useEffect, useState } from "react";
import { todosUsuarios, UsersResponse } from "@/API/allUsers";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState<User[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await todosUsuarios();
      setAllUsers(data.users);
    };
    fetchData();
  }, []);
  return (<div>
    <Suspense>
        {}
    </Suspense>
  </div>;)
};

export default AllUsers;
