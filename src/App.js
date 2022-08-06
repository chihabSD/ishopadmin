import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import List from "./pages/List";
import Single from "./pages/Single";
import New from "./pages/New";
import { userInputs, productInputs } from "./formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./contexts/darkModeContext";
const App = () => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{toggleDarkMode, dark}}>
      <div className={dark ? "app dark" : "app"}>
        <Routes>
          <Route path="/">
            <Route element={<Home toggleDarkMode={toggleDarkMode} />} index />
            <Route path="login" element={<Login />} />

            {/* Users */}
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            {/* Products */}
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </div>
    </DarkModeContext.Provider>
  );
};

export default App;
