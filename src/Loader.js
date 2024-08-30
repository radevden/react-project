import PropagateLoader from "react-spinners/PropagateLoader";
import { useState} from "react";


export default function Loader(props) {

  return (
    <div>
      <PropagateLoader 
        className="loader"
        color={props.color}
        loading={props.loading}
        animate={true}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}