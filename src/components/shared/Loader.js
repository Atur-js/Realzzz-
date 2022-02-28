import React from "react";

// Gif
import spinner from "../../gif/Spinner.gif";

const Loader = () => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={spinner} alt="Loading" style={{width:"300px",height:"200px"}}/>
    </div>
  );
};

export default Loader;
