import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const navigate = useNavigate();
  const currentDog = dogs.filter((item) => item.name === name)[0];

  console.log(currentDog);

  useEffect(() => {
    if (!currentDog) {
      navigate("/dogs");
    }
  }, [currentDog, navigate]);

  if (!currentDog) {
    return null; // Just render nothing while the navigation is taking place
  } else {
    return (
      <div style={{ marginLeft: "30px" }}>
        <h1>{currentDog.name}</h1>
        <img src={currentDog.src} style={{ width: "400px" }} alt="dog" />
        <h2> Age: {currentDog.age}</h2>
        <h2>Facts</h2>
        <ul>
          {currentDog.facts.map((fact, idx) => {
            return <li key={idx}>{fact}</li>;
          })}
        </ul>
        <Link to="/">Home</Link>
      </div>
    );
  }
};

export default DogDetails;
