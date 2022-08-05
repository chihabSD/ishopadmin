import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import List from "./pages/List";
import Single from "./pages/Single";
import New from "./pages/New";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route element={<Home />} index />
        <Route path="login" element={<Login />} />

        {/* Users */}
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>

        {/* Products */}
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
