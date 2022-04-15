import React, { useState } from "react";
import "./App.css";
import UserCreate from "./components/UserCreate";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";

function App() {
  const [language, setLanguage] = useState("english");

  const onLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <>
      <div className="ui container">
        <div>
          Select a Language:
          <i className="flag us"
            onClick={() => {
              onLanguageChange("english");
            }}
          />
          <i className="flag india"
            onClick={() => {
              onLanguageChange("hindi");
            }}
          />
        </div>

        {language}

        <ColorContext.Provider value="green">
          <LanguageContext.Provider value={language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    </>
  );
}

export default App;
