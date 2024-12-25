import FuelCard from "./FuelCard";

const fuels = [
  {
    id: "sdjfhsfj",
    type: "gallery",
  },
  {
    id: "fghfhf",
    type: "text",
  },
  {
    id: "fghfghfgh",
    type: "create",
  },
  {
    id: "sddfgdsfj",
    type: "gallery",
  },
];

function FuelGrid() {
  return (
    <div className="grid grid-cols-1 gap-3">
      {fuels.map((fuel) => {
        return <FuelCard type={fuel.type} key={fuel.id}></FuelCard>;
      })}
    </div>
  );
}

export default FuelGrid;
