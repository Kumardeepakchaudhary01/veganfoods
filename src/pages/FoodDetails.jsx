import { useParams } from "react-router-dom";

function FoodDetails() {
  const { id } = useParams();
  const food = {
    1: { name: "Lobster Thermidor", description: "Luxury seafood dish", image: "/images/lobster.jpg" },
    2: { name: "Truffle Pasta", description: "Pasta with truffle sauce", image: "/images/truffle.jpg" }
  }[id];

  return (
    <div>
      <h1>{food.name}</h1>
      <img src={food.image} alt={food.name} />
      <p>{food.description}</p>
    </div>
  );
}

export default FoodDetails;
