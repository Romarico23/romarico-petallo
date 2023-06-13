import React from "react";
import "./spinninglogo.css";
import { CirclesWithBar } from "react-loader-spinner";
export const SpinningLogo = () => {
  return (
    <div className="spinningLogo">
      <h1>
        Loading
        <CirclesWithBar
          height="50"
          width="50"
          color="#fff"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor="#0ef"
          innerCircleColor=""
          barColor="#0ef"
          ariaLabel="circles-with-bar-loading"
        />
      </h1>
    </div>
  );
};
