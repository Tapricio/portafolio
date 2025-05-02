import React, { Suspense } from "react";
import Loader from "@/components/Loader/Loader";
import AllUsersSuspense from "@/components/allUsers/AllUsersSuspense";

const ApiCallSuspense = () => {
  return (
    <div className="text-white">
      <h1 className="text-5xl">Resultados API call</h1>
      <Suspense fallback={<Loader />}>
        <AllUsersSuspense />
      </Suspense>
    </div>
  );
};

export default ApiCallSuspense;
