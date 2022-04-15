import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const Button = () => {
  return (
    <>
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => (value === "english" ? "Submit" : "Jama Kre")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    </>
  );
};
export default Button;
