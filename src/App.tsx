import { Routes, Route, Navigate } from "react-router";
import { Route as AvailableRoutes } from "./routes/routes";

import Drawer from "./components/Drawer";
import routes from "./routes/routes";

function App() {
  return (
    <Drawer>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.path === AvailableRoutes.HOME ? (
                <Navigate to={AvailableRoutes.CONTACTS} />
              ) : (
                <route.element />
              )
            }
          />
        ))}
      </Routes>
    </Drawer>
  );
}

export default App;
