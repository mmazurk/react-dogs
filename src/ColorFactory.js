
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import ColorHome from "./ColorHome";
import ColorDetail from "./ColorDetail";
import AddColor from "./AddColor";


const ColorFactory = ({colors}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors" element={<ColorHome colors={colors}/>} />
        <Route path="/colors/:color" element={<ColorDetail colors={colors} f/>} />
        <Route path="/colors/new" element={<AddColor />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </BrowserRouter>
  );
};

ColorFactory.defaultProps = { colors: ["blue", "red", "green"] }

export default ColorFactory;