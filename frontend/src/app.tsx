import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "./app.css";
import LoadingDice from "./components/LoadingDice";
export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Suspense fallback={<LoadingDice />}>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
