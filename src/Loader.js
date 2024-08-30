import PropagateLoader from "react-spinners/PropagateLoader";
import { useState} from "react";


export default function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#7dc6d8");

  return (
    <div>
      <PropagateLoader 
        className="loader"
        color={color}
        loading={loading}
        animate={true}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}