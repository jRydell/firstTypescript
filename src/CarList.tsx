

type Car = {
  id: number;
  model: string;
  broken: boolean;
};

const CarList = () => {
  const cars: Car[] = [
    { id: 1, model: "Toyota", broken: true },
    { id: 2, model: "Saab", broken: false },
    { id: 3, model: "Volvo", broken: false },
  ];

  return (
    <>
      <h1>Carlist:</h1>
      <ul>
        {cars.map((c: Car) => {
          return (
            <>
              <ul>
                <li>
                  Id:{c.id}, Model: {c.model}, Broken: {c.broken.toString()}
                </li>
              </ul>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default CarList;
