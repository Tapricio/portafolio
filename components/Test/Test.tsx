import React from "react";
type Props = {
  nombre: string;
};
const Test = ({ nombre }: Props) => {
  return <div>{nombre}</div>;
};

export default Test;
