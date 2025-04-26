const working = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Tailwind funcionando (rama dev)!</h1>
      <div className="grid grid-cols-[7fr_4fr] gap-4">
        <div className="bg-blue-200">Columna 1 (7fr)</div>
        <div className="bg-green-200">Columna 2 (4fr)</div>
      </div>
    </>
  );
};

export default working;
