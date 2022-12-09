import { useRouteError} from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink
} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.mmessage}</i>
      </p>

      <RouterLink to="/">
              <button>Home</button>
            </RouterLink>

    </div>
  );
}