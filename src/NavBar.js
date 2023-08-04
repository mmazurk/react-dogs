import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ dogs }) {
    console.log(dogs)
  return (
    <div className="NavBar">
      {dogs.map((item, idx) => {
        return (
          <div key={idx} className="NavBar">
          <img src={item.src} style={{width: "200px"}} alt="dog"/>
          <NavLink to={`/dogs/${item.name}`}>{item.name}</NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default NavBar;
