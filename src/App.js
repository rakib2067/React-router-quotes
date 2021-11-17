import { Redirect, Route, Switch } from "react-router";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route path="/new-quote">
          <AddQuote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
