import NavBar from "./NavBar";

const DogList = ({ dogs }) => {
  return (
    <div>
        <h2 style={{textAlign: "center"}}>Dogs!</h2>
      <NavBar dogs={dogs} />
    </div>
  );
};

export default DogList;
