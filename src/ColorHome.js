import "./ColorFactory.css";
import { Link } from "react-router-dom";

const ColorHome = ({ colors }) => {
  return (
    <div>
      <h1>Fun</h1>
      {console.log(colors)}
      <h3>Please select a color</h3>
      <div className="item">
        {colors.map((item, idx) => (
          <Link to={`/colors/${item}`} key={idx}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ColorHome;
